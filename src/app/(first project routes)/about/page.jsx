import PageHead from "@/components/PageHead";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <PageHead title='This is About Page'/>
      <nav className="flex items-center justify-center gap-5 text-lg">
        <Link href='about/history' className="hover:underline">History</Link>
        <Link href='about/mission' className="hover:underline">Mission</Link>
      </nav>
    </div>
  );
};

export default About;