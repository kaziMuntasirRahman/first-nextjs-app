'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState('')
  const [searchKey, setSearchKey] = useState('a')


  const getMeals = async (searchItem) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchItem}`)
      const data = await response.json()
      console.log(data)
      if (Array.isArray(data.meals)) {
        // console.log("inside if block....", searchKey)
        setMeals(data.meals);
        setError('')
      } else {
        setError(response.meals)
        setMeals([])
        // console.log("inside else block....", searchKey)
      }
    } catch (err) {
      // console.log(err.meals)
      // setError(err.meals)
      // setMeals([])
      // console.log('catch block.........', searchKey)
    } finally {
      //
    }
  }

  useEffect(() => {
    getMeals(searchKey)
  }, [searchKey])

  return (
    <div className="w-full flex flex-col items-center">
      <div className="join my-6">
        <input className="input input-neutral join-item focus:outline-none border border-gray-200 focus:border focus:border-black" placeholder="search meal..." onChange={(e) => setSearchKey(e.target.value)} />
        <button onClick={() => getMeals(searchKey)} className="btn join-item">Search</button>
      </div>
      <h1 className="text-3xl font-semibold mb-5">Total Meals: {meals.length}</h1>
      <section className="grid grid-cols-3 gap-4">
        {error ?
          <div className="text-red-700">{error}</div>
          :
          (meals.length > 0) ?
            meals?.map(({ idMeal, strMeal, strCategory, strInstructions, strMealThumb }) =>
              <div key={idMeal} className="border w-[300px] p-2 h-auto flex flex-col gap-2.5 relative">
                <p className="absolute right-0 top-2.5 bg-cyan-900 font-semibold text-white px-2 py-1">{strCategory}</p>
                {/* <img src={strMealThumb} alt="" /> */}
                <Image src={strMealThumb} alt={strMeal} width={300} height={300} objectFit="cover" />
                <h1 className="text-xl">{strMeal}</h1>
                <p>{strInstructions.slice(0, 150)}</p>
              </div>
            )
            :
            <div className="text-2xl col-span-3 text-center my-3">No Meals found.</div>
        }
      </section>
    </div>
  );
};

export default Meals;