import { BiMailSend } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="w-4/5 m-auto mt-28">
            <div className="flex justify-end items-center mb-16">
                <div className="w-1/3 h-1 bg-[#0D378C]"></div>
                <h2 className="text-[#0D378C] text-2xl font-bold py-1 ml-5">Contact Me</h2>
            </div>

            <form className="w-4/5 m-auto">
                <div className="my-5">
                    <label className="block text-xl font-bold text-[#0D378C]" label for="name">Full Name:</label>
                    <input className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#0D378C] font-semibold" type="text" id="name" placeholder="Introduce your full name..."/>
                </div>
                <div className="my-5 flex justify-center gap-x-4 flex-wrap md:flex-nowrap">
                    <div className="w-full">
                        <label className="block text-xl font-bold text-[#0D378C]" label for="email">Email:</label>
                        <input className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#0D378C] font-semibold" type="email" id="email" placeholder="Introduce your email..."/>
                    </div>
                    <div className="w-full">
                        <label className="block text-xl font-bold text-[#0D378C]" label for="phone">Phone Number:</label>
                        <input className="block bg-[#F5F9FF] w-full shadow-lg p-3 my-1 text-[#0D378C] font-semibold" type="phone" id="phone" placeholder="Introduce your phone..."/>
                    </div>
                </div>
                <div className="my-5">
                    <label className="block text-xl font-bold text-[#0D378C]" label for="name">Message:</label>
                    <textarea className="block bg-[#F5F9FF] w-full shadow-xl p-3 my-1 text-[#0D378C] font-semibold" rows="10" cols="20"/>
                </div>
                <div className="flex justify-center my-16 lg:justify-end">
                    <div className="bg-[#0D378C] text-[#F5F9FF] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex min-w-max hover:text-[#0D378C] hover:bg-[#F5F9FF] ease-in">
                        <BiMailSend className="min-w-max mr-1"/>
                        <a href="https://wa.me/qr/HTYEQBMZ6BUZD1">
                            Send Information
                        </a>
                    </div>
                </div>
            </form>

            <section>
                <div className="flex justify-center items-center">
                    <div className="w-1/5 h-1 bg-[#0D378C]"></div>
                    <h3 className="px-5 text-[#0D378C] font-bold text-xl text-center">Other contact ways</h3>
                <div className="w-1/5 h-1 bg-[#0D378C]"></div>
                </div>
                <div className="flex justify-between w-3/4 m-auto my-10 flex-wrap gap-6">

                    <div className="text-[#BBD3F2] cursor-pointer hover:text-[#0D378C] ease-in">
                        <a className="flex flex-col items-center" href="https://wa.me/qr/HTYEQBMZ6BUZD1">
                            <IoLogoWhatsapp className=" w-10 h-10"/>
                        </a>
                        <p>WhatsApp</p>
                    </div>

                    <div className="text-[#BBD3F2] cursor-pointer hover:text-[#0D378C] ease-in">
                        <a  className="flex flex-col items-center" href="https://wa.me/qr/HTYEQBMZ6BUZD1">
                            <AiFillInstagram className=" w-10 h-10"/>
                        </a>
                        <p>Instagram</p>
                    </div>

                    <div className="text-[#BBD3F2] cursor-pointer hover:text-[#0D378C] ease-in">
                        <a className="flex flex-col items-center" href="https://www.linkedin.com/in/sebastian-castellanos-sandoval-02045a1a0/">
                            <AiFillLinkedin className=" w-10 h-10"/>
                        </a>
                        <p>LinkedIn</p>
                    </div>

                    <div className="text-[#BBD3F2] cursor-pointer hover:text-[#0D378C] ease-in">
                        <a className="flex flex-col items-center" href="https://github.com/SebastianCastellanos24">
                            <FaGithubAlt  className=" w-10 h-10"/>
                        </a>
                        <p>GitHub</p>
                    </div>
                    
                </div>
            </section>

        </div>
    )
}