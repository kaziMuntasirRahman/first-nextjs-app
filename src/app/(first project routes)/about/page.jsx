import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PageHead from "@/components/PageHead";
import { getServerSession } from "next-auth";
import Link from "next/link";

const About = async () => {
  const session = await getServerSession(authOptions)
  console.log(session);
  return (
    <div>
      <PageHead title='This is About Page' />

      {
        session?.user?.name &&
        <h1 className="text-3xl text-center mb-4 font-semibold">{`welcome ${session?.user?.name}`} </h1>
      }
      <nav className="flex items-center justify-center gap-5 text-lg">
        <Link href='about/history' className="hover:underline">History</Link>
        <Link href='about/mission' className="hover:underline">Mission</Link>
      </nav>
    </div>
  );
};

export default About;