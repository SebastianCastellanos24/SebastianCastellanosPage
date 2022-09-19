import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3Full, DiGit, DiReact, DiGulp } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript, SiJavascript, SiSass, SiTailwindcss, SiMongodb } from "react-icons/si";


export default function Skills() {
    return (
        <div className="w-4/5 m-auto mt-28">
            <div className="flex items-center mb-16">
                <h2 className="text-[#0D378C] text-2xl font-bold py-1 mr-5">My Skills</h2>
                <div className="w-1/3 h-1 bg-[#0D378C]"></div>
            </div>
            <div className="grid grid-cols-2 gap-10 mb-16 md:grid-cols-4">
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]"> 
                    <AiFillHtml5 className="w-28 h-28 "/>
                    <p className="text-center font-semibold">HTML5</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <DiCss3Full className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C] "/>
                    <p className="text-center font-semibold">CSS3</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <SiJavascript className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">JavaScript</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <SiTypescript className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">TypeScript</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <AiFillGithub className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">GitHub</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <DiGit className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">Git</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <DiReact className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">Git</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <IoLogoNodejs className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">NodeJs</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <SiMongodb className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">NodeJs</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <SiTailwindcss className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">Tailwind</p>
                </div>  
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <SiSass className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">SASS</p>
                </div>
                <div className="m-auto text-[#BBD3F2] easy-in hover:text-[#0D378C]">
                    <DiGulp className="w-28 h-28 text-[#BBD3F2] easy-in hover:text-[#0D378C]"/>
                    <p className="text-center font-semibold">Gulp</p>
                </div>
            </div>
        </div>
    )
}

