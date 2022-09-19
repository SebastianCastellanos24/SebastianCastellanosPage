import UmngLog from "../../assets/img/UmngLog.png"

export const UmngStudys = () => {
return (
    <div className="App grid lg:grid-cols-2 lg:gap-4 mb-16">

    <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl justify-center items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 ease-in hover:z-10">
        <div className="px-3">
            <img className="w-48" src={UmngLog} alt="University Log" />
        </div>
        <div className="px-2 mt-7 md:px-5 md:mt-0">
            <h2 className="text-2xl font-bold">Multimedia Engineering</h2>
            <p className="text-sm my-1 font-medium">July 2015 - Sep 2022 </p>
            <p className="text-justify font-medium">A multimedia  engineer  is  able  to use computational  and  multimedia engineering standards  to  develop innovative   products  in  terms  of design, interactivity and use.</p>
        </div>
    </div>

    <div className="flex flex-col bg-[#F5F9FF] p-5 rounded drop-shadow-xl items-center text-[#0D378C] md:flex-row mb-10 lg:mb-0 hover:scale-110 ease-in hover:z-10">
        <div className="px-3">
            <img className="w-24" src={UmngLog} alt="University Log" />
        </div>
        <div className="px-2 mt-7 md:px-5 md:mt-0">
            <h2 className="text-2xl font-bold">Language Center FAEDIS - English Level B2</h2>
            <p className="text-sm my-1 font-medium">Jun 2020 - Apr 2022 </p>
            <div className="flex justify-between mt-5">
                <p className="text-[#F5F9FF] bg-[#0D378C] p-3 rounded ">A1</p>
                <p className="text-[#F5F9FF] bg-[#0D378C] p-3 rounded ">A2</p>
                <p className="text-[#F5F9FF] bg-[#0D378C] p-3 rounded ">B1</p>
                <p className="text-[#F5F9FF] bg-[#0D378C] p-3 rounded ">B2</p>
            </div>
            <p className="text-center mt-3">- Englis course -</p>
        </div>
    </div>

    </div>

    )
}
