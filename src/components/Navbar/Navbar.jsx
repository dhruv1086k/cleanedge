import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function Navbar() {
  // use to open the sign in modal
  const { openSignIn } = useClerk();
  // use to check if the user has signed in or not and get all the user details
  const { isSignedIn, user } = useUser();

  return (
    <>
      <nav className="fixed z-[99] w-full flex items-center justify-between px-32 py-4 bg-white shadow-md">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src={assets.logo} alt="clean edge logo" />
            <span className="text-xl font-semibold text-black">CLEAN EDGE</span>
          </div>
        </Link>

        {/* Menu Links */}
        <ul className="flex items-center space-x-8 text-black">
          <li>
            <a href="#" className="hover:text-gray-600">
              Remove Background
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-600">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-600">
              Pricing
            </a>
          </li>
          {!isSignedIn ? (
            <li>
              <button
                onClick={() => openSignIn({})}
                className="px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-800"
              >
                Get Started
              </button>
            </li>
          ) : (
            <li className="flex justify-center items-center">
              <UserButton />
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
