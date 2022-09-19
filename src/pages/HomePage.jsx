import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import ReactPlayer from 'react-player'
import video from '../assets/videos/bg.mp4'

export default function HomePage() {
    return (
        <>
            <div className="w-4/5 m-auto bg-[#0D378C] rounded mt-20">
                <div className="opacity-20 w-full">
                    <ReactPlayer
                        url={video}
                        width="100%"
                        height="100%"
                        loop
                        muted
                        playing
                    />
                </div> 
                <div className="p-4 w-full lg:p-10 md:w-4/5">
                    <p className="text-white text-xl md:text-2xl lg:text-3xl">Hi, name is: </p>
                    <h2 className="text-white text-4xl font-bold py-1 mt-2 lg:text-5xl">Sebastian Castellanos</h2>
                    <h1 className="text-white text-xl font-bold py-1 md:text-2xl lg:text-3xl"> Front End Developer</h1>
                    <p className="text-white w-full py-3 mb-2">I´m a Multimedia Engineer focused  on  development
                        web interface with React, with knowledge in  design
                        UI and with experience as a graphic designer.
                    </p>
                    <div className="flex justify-center flex-wrap md:justify-start gap-2">

                        <div className="bg-[#F5F9FF] text-[#0D378C] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex place-content-between min-w-max mb-2 md:mb-0 md:mr-2 hover:bg-[#0D378C] hover:text-[#F5F9FF] ease-in">
                            <FaGithubAlt className="min-w-max mr-1"/>
                            <a href="https://github.com/SebastianCastellanos24">
                                GitHub Page
                            </a>
                        </div>

                        <div className="bg-[#F5F9FF] text-[#0D378C] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex place-content-between min-w-max mb-2 md:mb-0 md:mr-2 hover:bg-[#0D378C] hover:text-[#F5F9FF] ease-in">
                            <IoLogoWhatsapp className="min-w-max mr-1"/>
                            <a href="https://wa.me/qr/HTYEQBMZ6BUZD1">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

