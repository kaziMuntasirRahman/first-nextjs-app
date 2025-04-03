import PageHead from "@/components/PageHead";
import { getPosts } from "@/functions/getPosts";
import Link from "next/link";

export const metadata = {
  title: 'Posts',
  description: "This is Posts page."
} 

const PostsPage = async () => {
  const posts = await getPosts()
  return (
    <div>
      <PageHead title="This is Posts Page" />
      <p className="text-center text-lg mb-5">Total Posts: <span className="font-semibold">{posts.length}</span></p>
      <section className="flex flex-wrap mx-auto justify-evenly gap-y-5 max-w-5xl pb-14">
        {
          posts?.slice(0,15).map(({id, title, body}) =>
            <div key={id} className="border rounded-lg h-[360px] w-[300px] p-2 flex flex-col items-start relative">
              <h1 className="text-lg min-h-14">{title}</h1>
              <p className="mt-4 text-justify">{body.length > 200 ? body.slice(0, 300) + '...' : body}</p>
              <Link href={`posts/${id}`} className="px-2 bg-gray-200 border rounded-sm cursor-pointer hover:bg-gray-300  absolute bottom-3 right-3">Read More</Link>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default PostsPage;