import { MdFileDownload } from "react-icons/md";
import myImageWebp from "../assets/img/MyImage.webp";
import myImageAvif from "../assets/img/MyImage.avif";
import myImage from "../assets/img/MyImage.jpg";

export default function AboutMe() {
    return (
        <div className="w-4/5 m-auto mt-28">

            <div className="flex items-center justify-end mb-16">
                <div className="w-1/3 h-1 bg-[#0D378C]"></div>
                <h2 className="text-[#0D378C] text-2xl font-bold py-1 ml-5">AboutMe</h2>
            </div>
            
            <div className="flex  flex-col items-center mb-16 lg:flex-row">    
                <picture>
                    <source srcSet={myImageAvif} type="image/avif"/>
                    <source srcSet={myImageWebp} type="image/webp"/>
                    <img className="rounded" loading="lazy" src={myImage} width="500" height="300" alt="Creator photo"/>
                </picture>
                <div className="text-[#0D378C] mt-8 font-semibold text-justify md:w-2/3 lg:mt-0 lg:px-20 md:mt-16">
                    <p className="my-5">Hello! My name is Sebastian Castellanos and  I really like
                    programming on  the  front  side  because  this  is the 
                    visual and design part. 
                    </p>
                    <p className="my-5">I met this world of development when I was  in  college, 
                    the first thing I thought was that developing pages was 
                    boring, then I looked at the infinite possibilities of pages 
                    that could be created and how beautiful some of these 
                    pages looked. I was very interested and started to learn 
                    in a different way. 
                    </p>
                    <p className="my-5">Currently, I´m looking for a place where I can  apply  my knowledge, learn many new things and 
                    be part  of  the creation of products  that  impact  the  lives  of  many people in an excellent 
                    way. That is what excites me and is my reason to  keep  my learning.
                    </p>
                </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
                <div className="bg-[#0D378C] text-[#F5F9FF] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex w-10 min-w-max hover:text-[#0D378C] hover:bg-[#F5F9FF] ease-in">
                    <MdFileDownload className="min-w-max mr-1"/>
                    <a href="https://drive.google.com/file/d/1vtQQvIhB4dFralh4RygUJg7iEj84wlSo/view?usp=sharing">
                        Summary
                    </a>
                </div>
            </div>
        </div>
    )
}