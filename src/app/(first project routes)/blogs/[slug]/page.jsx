const getBlogs = async (slug) => {
  // const response = await fetch('../../../../../public/data/blogs.json')
  const response = await fetch('public/data/blogs.json')
  const data = await response.json()
  console.log(data)
  return data.posts.find(blog => blog.slug === slug)
}

const BlogDetails = async ({ params }) => {
  // console.log(params.slug)
  const {title} = await getBlogs(params.slug)

  return (
    <div>
      {/* <PageHead title={title} /> */}

    </div>
  );
};

export default BlogDetails;

// import PageHead from "@/components/PageHead";

// export const generateMetadata = async ({ params }) => {
//   const { title, body } = await getBlogs(params.id)
//   return {
//     title: title,
//     description: body
//   }
// }

// const getBlogs = async (slug) => {
//   const response = await fetch('/data/blogs.json')
//   const data = await response.json()
//   console.log(data)
//   return data.find(blog => blog.slug === slug)
// }

// const BlogDetails = async ({ params }) => {
//   // console.log(params.id);
//   const slug = await params.slug
//   const { title, content, author } = await getBlogs(params.slug)


//   return (
//     <div>
//       <PageHead title={title} />
//       <section className="max-w-3xl min-h-[300px] border mx-auto p-4 flex flex-col gap-2">
//         <p className="text-lg text-gray-700">by <span className="font-semibold ">{author}</span></p>
//         <p>{content}</p>
//       </section>
//     </div>
//   );
// };

// export default BlogDetails;