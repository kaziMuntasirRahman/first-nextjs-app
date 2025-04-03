"use client"

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname()

  if (pathName.includes('dashboard'))
    return
  
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-5" >
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer >
  );
};

export default Footer;