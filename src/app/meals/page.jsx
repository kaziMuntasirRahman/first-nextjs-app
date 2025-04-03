import Meals from "@/components/Meals";


export const metadata = {
  title: {
    absolute: 'Meals',
  },
  description: 'Generated by create next app',
} 

const MealsPage = () => {
  return (
    <div>
      <Meals />
    </div>
  );
};

export default MealsPage;