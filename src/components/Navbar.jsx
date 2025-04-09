"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact',
    href: '/contact'
  },
  {
    title: 'Services',
    href: '/services'
  },
  {
    title: 'Blogs',
    href: '/blogs'
  },
  {
    title: 'Posts',
    href: '/posts'
  },
  {
    title: 'Meals',
    href: '/meals'
  }
];

const dashboardLinks = [
  {
    title: 'Dashboard',
    href: '/dashboard'
  },
  {
    title: 'Manage User',
    href: '/manage-user'
  },
  {
    title: 'Statistics',
    href: '/statistics'
  }
]

const Navbar = () => {
  const pathName = usePathname()
  const session = useSession()
  console.log(session)

  if (pathName.includes('dashboard')) {
    return (
      <nav className="min-w-screen bg-gray-800 text-white flex items-center justify-center gap-5">
        {dashboardLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`${pathName === link.href && 'font-semibold text-cyan-400'
              } hover:underline`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    )
  }
  return (
    <nav className='grid grid-cols-3 py-5 px-10 text-lg items-center bg-cyan-300'>
      <Link
        href='/'
        className='text-2xl font-semibold text-gray-600 mr-auto'
      >
        First<span className='text-black font-bold'>NextJs</span>App
      </Link>
      {/* nav links */}
      <section className='flex items-center justify-center py-5 px-10 text-lg gap-4 '>
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`${pathName === link.href && 'font-semibold'
              } hover:underline`}
          >
            {link.title}
          </Link>
        ))}
      </section>
      {
        session.data ?
        <div className='ml-auto'>
          <p className='btn btn-primary'>{session.data.user.email}</p>
          <button onClick={()=>signOut()} className="btn btn-error text-white">Log Out</button>
        </div>
          :
          <div className='ml-auto flex items-center'>
          <Link href='/api/auth/signup' className='btn btn-info'>
            Sign Up
          </Link>
          <Link href='/api/auth/signin' className='btn btn-secondary'>
            Sign In
          </Link>
          </div>
      }
    </nav>
  );
};

export default Navbar;