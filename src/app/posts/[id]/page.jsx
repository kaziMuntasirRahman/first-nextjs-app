import PageHead from "@/components/PageHead";

export const generateMetadata = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id)
  return {
    title: title,
    description: body
  }
}

const getDetailsPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  return data;
}

const PostDetails = async ({ params }) => {
  // console.log(params.id);
  const { title, body } = await getDetailsPost(params.id)
  const metadata = {
    title: { title },
    description: { body }
  }
  return (
    <div>
      <PageHead title={title} />
      <section className="max-w-3xl min-h-[300px] border mx-auto p-4 flex flex-col gap-2">
        <p>Post details of: {params.id}</p>
        {/* <p className="text-lg text-gray-700">by <span className="font-semibold ">{author}</span></p> */}
        <p>{body}</p>
      </section>
    </div>
  );
};

export default PostDetails;