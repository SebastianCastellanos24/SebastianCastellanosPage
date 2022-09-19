import * as React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {

return (
    <div className='flex justify-evenly mb-16 flex-wrap gap-y-2'>
        <Link className="bg-[#0D378C] text-[#F5F9FF] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex  min-w-max hover:text-[#0D378C] hover:bg-[#F5F9FF] ease-in" to="/home">
            HOME
        </Link>
        <Link className="bg-[#0D378C] text-[#F5F9FF] cursor-pointer text-xl leading-none px-4 py-3 rounded font-bold flex  min-w-max hover:text-[#0D378C] hover:bg-[#F5F9FF] ease-in" to="/umng">
            UMNG
        </Link>
        <Link className="bg-[#0D378C] text-[#F5F9FF] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex  min-w-max hover:text-[#0D378C] hover:bg-[#F5F9FF] ease-in" to="/fimlm">
            FIMLM
        </Link>
        <Link className="bg-[#0D378C] text-[#F5F9FF] cursor-pointer text-xl leading-none px-3 py-3 rounded font-bold flex min-w-max hover:text-[#0D378C] hover:bg-[#F5F9FF] ease-in" to="/udemy">
            UDEMY
        </Link>
    </div>
    );
};
