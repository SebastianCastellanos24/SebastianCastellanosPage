import Udemy from "../../assets/img/UdemyLog.png"

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiGulp, DiReact } from "react-icons/di";
import { SiJavascript, SiSass, SiTypescript, SiMongodb, SiRedux } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export const UdemyStudys = () => {
    return (
        <div className="grid lg:grid-cols-2 lg:gap-4 mb-16">

            <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl  items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 ease-in hover:z-10">
                <div className="px-3">
                    <img className="w-20" src={Udemy} alt="udemy log" />
                </div>
                <div className="px-2 mt-7 md:px-5 md:mt-0">
                    <h2 className="text-2xl font-bold">CSS The Complete Guide Flexbox, CSS Grid, SASS </h2>
                    <p className="text-sm my-1 font-medium">Jun 2022 - Sep 2022</p>
                    <p className="text-justify font-medium">Learnings:</p>
                
                    <div className="flex w-full justify-between mt-3">
                        <div >
                            <AiFillHtml5 className="w-10 h-10 m-auto"/>
                            <p className="text-center">HTML5</p>
                        </div>
                        <div >
                            <DiCss3Full className="w-10 h-10 m-auto"/>
                            <p className="text-center">CSS3</p>
                        </div>
                        <div >
                            <SiSass className="w-10 h-10 m-auto"/>
                            <p className="text-center">SASS</p>
                        </div>
                        <div >
                            <DiGulp className="w-10 h-10 m-auto"/>
                            <p className="text-center">Gulp</p>
                        </div>
                        <div >
                            <IoLogoNodejs className="w-10 h-10 m-auto"/>
                            <p className="text-center">NodeJs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl  items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 ease-in hover:z-10">
                <div className="px-3">
                    <img className="w-20" src={Udemy} alt="udemy log" />
                </div>
                <div className="px-2 mt-7 md:px-5 md:mt-0">
                    <h2 className="text-2xl font-bold">Modern JavaScript Ultimate Guide Build +15 Proyects </h2>
                    <p className="text-sm my-1 font-medium">Jun 2022 - Sep 2022</p>
                    <p className="text-justify font-medium">Learnings:</p>
                    <div className="flex w-full justify-between mt-3">
                    <div>
                        <SiJavascript className="w-10 h-10 m-auto"/>
                        <p className="text-center" >JavaScript</p>
                    </div>
                    <div>
                        <SiTypescript className="w-10 h-10 m-auto"/>
                        <p className="text-center" >Typescript</p>
                    </div>
                    <div>
                        <IoLogoNodejs className="w-10 h-10 m-auto"/>
                        <p className="text-center" >Nodejs</p>
                    </div>
                    <div>
                        <SiMongodb className="w-10 h-10 m-auto"/>
                        <p className="text-center" >Mongodb</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl  items-center text-[#0D378C] md:flex-row hover:scale-110 ease-in hover:z-10">
                <div className="px-3">
                    <img className="w-20" src={Udemy} alt="udemy log" />
                </div>
                <div className="px-2 mt-7 md:px-5 md:mt-0">
                    <h2 className="text-2xl font-bold">React Master: Learn ReactJS, Hooks, MERN, NodeJS, JWT+</h2>
                    <p className="text-sm my-1 font-medium">Jun 2022 - Sep 2022</p>
                    <p className="text-justify font-medium">Learnings:</p>
                    <div className="flex w-full justify-between mt-3">
                        <div>
                            <SiJavascript className="w-10 h-10 m-auto"/>
                            <p className="text-center" >JavaScript</p>
                        </div>
                        <div >
                            <DiReact className="w-10 h-10 m-auto"/>
                            <p className="text-center">React</p>
                        </div>
                        <div>
                            <SiRedux className="w-10 h-10 m-auto"/>
                            <p className="text-center" >Redux</p>
                        </div>
                        <div>
                            <IoLogoNodejs className="w-10 h-10 m-auto"/>
                            <p className="text-center" >Nodejs</p>
                        </div>
                        <div>
                            <SiMongodb className="w-10 h-10 m-auto"/>
                            <p className="text-center" >Mongodb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}