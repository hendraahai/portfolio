import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="container-2xl mb-10 bg-transparent h-16 drop-shadow-md fixed top-0 w-full">
      <div className="flex h-14 mb-10 justify-between">
        <h1
          className={`flex items-center text-2xl h-16 px-5 py-0 ${josefinSans.className}`}
        >
          Hendra.tech
        </h1>
        <ul
          className={`flex justify-end items-center ${josefinSans.className}  gap-5 h-16 p-5`}
        >
          <li className={`hover:bg-slate-200`}>Home</li>
          <li>Projects</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
