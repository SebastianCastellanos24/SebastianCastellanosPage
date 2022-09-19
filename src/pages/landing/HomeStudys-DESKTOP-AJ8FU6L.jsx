import UmngLog from "../../assets/img/UmngLog.png"
import Fimlm from "../../assets/img/FimlmLog.png"
import Udemy from "../../assets/img/UdemyLog.png"

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiGit, DiReact, DiCss3Full, DiGulp } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiSass, SiTypescript, SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

export const HomeStudys = () => {
  return (
    <div className="App grid lg:grid-cols-2 lg:gap-4 mb-16">

      <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl justify-center items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 hover:z-10 ease-in">
        <div className="px-3">
          <img className="w-48" src={UmngLog} alt="University Log"/>
        </div>
        <div className="px-2 mt-7 md:px-5 md:mt-0">
          <h2 className="text-2xl font-bold">Multimedia Engineering</h2>
          <p className="text-sm my-1 font-medium">July 2015 - Sep 2022 </p>
          <p className="text-justify font-medium">A multimedia  engineer  is  able  to use computational  and  multimedia engineering standards  to  develop innovative   products  in  terms  of design, interactivity and use.</p>
        </div>
      </div>

      <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl justify-center items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 hover:z-10 ease-in">
        <div className="px-3">
          <img className="w-20" src={Fimlm} alt="fimlm log" />
        </div>
        <div className="px-2 mt-7 md:px-5 md:mt-0">
          <h2 className="text-2xl font-bold">Diploma in Development Front end with React JS</h2>
          <p className="text-sm my-1 font-medium">Jun 2022 - Sep 2022</p>
          <p className="text-justify font-medium">Learnings:</p>
          <div className="flex w-full justify-evenly mt-3">
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

      <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl justify-center items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 hover:z-10 ease-in">
        <div className="px-3">
          <img className="w-20" src={Udemy} alt="udemy log" />
        </div>
        <div className="px-2 mt-7 md:px-5 md:mt-0">
          <h2 className="text-2xl font-bold">CSS The Complete Guide Flexbox, CSS Grid, SASS </h2>
          <p className="text-sm my-1 font-medium">Jun 2022 - Sep 2022</p>
          <p className="text-justify font-medium">Learnings:</p>
          <div className="flex w-full justify-evenly mt-3">
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

      <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl justify-center items-center text-[#0D378C] md:flex-row hover:scale-110 hover:z-10 ease-in">
        <div className="px-3">
          <img className="w-20" src={Udemy} alt="udemy log" />
        </div>
        <div className="px-2 mt-7 md:px-5 md:mt-0">
          <h2 className="text-2xl font-bold">Modern JavaScript Ultimate Guide Build +15 Proyects </h2>
          <p className="text-sm my-1 font-medium">Jun 2022 - Sep 2022</p>
          <p className="text-justify font-medium">Learnings:</p>
          <div className="flex w-full justify-evenly mt-3">
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

  </div>
  )
}
