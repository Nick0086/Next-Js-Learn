"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// absolute use in chiled meta data 

const metadata: Metadata = {
  title:{
    absolute:'',
    default:'Create Next App',
    template:'%s | Next App',
  },
  description: "Generated by create next app",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

const navLinks = [
  {name:'Register',href:'/register'},
  {name:'Login',href:'/login'},
  {name:'Forgot Password',href:'/forgotPassword'},
  {name:'About',href:'/about'},
  {name:'Blog',href:'/blog'},
  {name:'Dashboard',href:'/dashboard'},
  {name:'Docs',href:'/docs'},
  {name:'Products',href:'/products'},
  {name:'Profile',href:'/profile'}
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathName = usePathname();

  return (
    <html lang="en">
      <body >
        <header className="py-8 px-4 text-sm font-bold text-center border-b-2 border-b-cyan-600 flex gap-3 justify-center " >
          {
            navLinks.map((navLink) =>{ 
              const isActive = pathName.startsWith(navLink.href)
              return(
              <Link className={`${isActive ? 'text-indigo-700' : ''}`} href={navLink.href} key={navLink.name}>{navLink?.name}</Link>
            )})
          }
        </header>
        {children}
        <footer className="py-8 px-4 text-lg font-bold text-center border-t-2 border-t-cyan-600" >
          <h1>Footer Of Web App</h1>
        </footer>
        </body>
    </html>
  );
}
