import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

export const MyCard = ({ url, titulo, descripcion, url_preview, url_github }) => {
  return (
    <div className="m-6 bg-[#0D378C] px-2 py-2 rounded shadow-2xl hover:scale-110 easy-out">
      <img src={url} className="rounded mx-auto mb-4 shadow-2xl" />
      <div className="p-5 items-center">
        <h2 className="font-bold text-2xl mb-4 text-center text-[#F5F9FF]">{titulo}</h2>
        <p className="mb-6 text-[#F5F9FF] text-justify">{descripcion}</p>
        <div className="flex justify-evenly flex-wrap gap-2">

          <div className="bg-[#F5F9FF] text-[#0D378C] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex place-content-between min-w-max mb-2 md:mb-0 hover:bg-[#0D378C] hover:text-[#F5F9FF] ease-in">
            <AiOutlineLink className="min-w-max mr-1"/>
            <a href={url_preview} target="_blank" >
            Page Link
            </a>
          </div>

          <div className="bg-[#F5F9FF] text-[#0D378C] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex place-content-between min-w-max mb-2 md:mb-0 hover:bg-[#0D378C] hover:text-[#F5F9FF] ease-in">
            <FaGithubAlt className="min-w-max mr-1"/>
            <a href={url_github} target="_blank" >
            GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
