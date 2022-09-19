import { Routes, Route } from "react-router-dom";

import { HomeStudys, UmngStudys, FimlmStudys, UdemyStudys } from "../pages";
import { Navbar } from "./Navbar";

export const AppNavigate = () => {
return (
    <div className="w-4/5 m-auto mt-28">
    
    <div className="flex items-center justify-end mb-16">
        <div className="w-1/3 h-1 bg-[#0D378C]"></div>
        <h2 className="text-[#0D378C] text-2xl font-bold py-1 ml-5">My Studies</h2>
    </div>

    <Navbar />

    <h1 className="text-center text-[#0D378C] font-bold text-3xl mb-14">These are my studies</h1>

    <Routes>
        <Route path="/*" element={<HomeStudys />} />

        <Route path="/home" element={<HomeStudys/>} />
        <Route path="/umng" element={<UmngStudys/>} />
        <Route path="/fimlm" element={<FimlmStudys/>} />
        <Route path="/udemy" element={<UdemyStudys/>} />

    </Routes>
    </div>
    );
};
