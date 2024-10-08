'use client'
import Link from "next/link";
import Image from "next/image";
import { useState ,useEffect } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Controls whether the user is logged in

    const handleLogout = () => {
        // Implement logout functionality here (e.g., clearing auth tokens, redirecting to sign-in page, etc.)
        setIsLoggedIn(false);
        console.log("User logged out");
    };

    return (
        <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-lg relative">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/assets/images/logo.png" // Make sure the logo path is correct
                    alt="Logo"
                    width={50}
                    height={50}
                    className="mr-3 bg-transparent"
                />
            </Link>

            {/* Hamburger Icon for Mobile */}
            <button
                className="block md:hidden text-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>

            {/* Navigation Links */}
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } md:flex md:space-x-6 items-center space-y-4 md:space-y-0 mt-4 md:mt-0 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent md:w-auto w-full p-4 md:p-0 z-10`}
            >
                <Link href="/" className="hover:text-yellow-600 block">
                    Home
                </Link>
                <Link href="/feed" className="hover:text-yellow-600 block">
                    Feed
                </Link>

                {/* Conditionally Render "Create Post", "Profile", and "Logout" if Logged In */}
                {isLoggedIn ? (
                    <>
                        <Link href="/profile" className="hover:text-yellow-600 block">
                            Profile
                        </Link>
                        <Link href="/create-post" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition block">
                            Create Post
                        </Link>

                        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition block">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link href="/sign-in" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition block">
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Nav;
