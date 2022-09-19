import { Link } from "react-scroll";
import { useState } from "react";
import { ImMenu } from "react-icons/im";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-[#0D378C] mb-3 w-full">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-[#BBD3F2] ease-in" 
                            href="/"
                            >
                            Sebastian Castellanos
                        </a>
                        <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)} 
                        ><ImMenu className="hover:text-[#BBD3F2] hover:rotate-90"/></button>
                    </div>
                    <div className={
                        "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <Link smooth spy to="home">
                                <span className="ml-2 text-white text-xl cursor-pointer font-bold px-2 hover:text-[#BBD3F2] ease-in">
                                    Home
                                </span>
                            </Link>

                            <Link smooth spy to="aboutMe">
                                <span className="ml-2 text-white text-xl cursor-pointer font-bold px-2 hover:text-[#BBD3F2] ease-in">
                                    About Me
                                </span>
                            </Link>

                            <Link smooth spy to="skills">
                                <span className="ml-2 text-white text-xl cursor-pointer font-bold px-2 hover:text-[#BBD3F2] ease-in">
                                    Skills
                                </span>
                            </Link>

                            <Link smooth spy to="studys">
                                <span className="ml-2 text-white text-xl cursor-pointer font-bold px-2 hover:text-[#BBD3F2] ease-in">
                                    Studys
                                </span>
                            </Link>

                            <Link smooth spy to="portfolio">
                                <span className="ml-2 text-white text-xl cursor-pointer font-bold px-2 hover:text-[#BBD3F2] ease-in">
                                    Portfolio
                                </span>
                            </Link>

                            <Link smooth spy to="contact">
                                <span className="ml-2 text-white text-xl cursor-pointer font-bold px-2 hover:text-[#BBD3F2] ease-in">
                                    Contact
                                </span>
                            </Link>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}