import Fimlm from "../../assets/img/FimlmLog.png"

import { AiFillGithub } from "react-icons/ai";
import { DiGit, DiReact } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

export const FimlmStudys = () => { 
    return (
        <div className="grid lg:grid-cols-2 lg:gap-4 mb-16">
            <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl justify-center items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 ease-in">
                <div>
                    <img className="w-24" src={Fimlm} alt="fimlm log" />
                </div>
            <div className="px-2 mt-7 md:px-5 md:mt-0">
                <h2 className="text-2xl font-bold">Diploma in Development Front end with React JS</h2>
                <p className="text-sm my-1 font-medium">Jun 2022 - Sep 2022</p>
                <p className="text-justify font-medium">Learnings:</p>
                <div className="flex w-full justify-between mt-3">
                <div >
                    <SiJavascript className="w-10 h-10 m-auto"/>
                    <p className="text-center">JavaScript</p>
                </div>
                <div >
                    <DiReact className="w-10 h-10 m-auto"/>
                    <p className="text-center">React</p>
                </div>
                <div >
                <DiGit className="w-10 h-10 m-auto"/>
                    <p className="text-center">Git</p>
                </div>
                <div >
                    <AiFillGithub className="w-10 h-10 m-auto"/>
                    <p className="text-center">Github</p>
                </div>
                <div >
                    <SiTailwindcss className="w-10 h-10 m-auto"/>
                    <p className="text-center">Tailwind</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}