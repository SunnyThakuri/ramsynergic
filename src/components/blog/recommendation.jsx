import alsoLikeImg1 from "../../assets/BlogUI/likeImg.png"
import alsoLikeImg2 from "../../assets/BlogUI/likeImg.png"

const Recomendation = () =>{
    return(
        <div className="mt-[100px]">
            <h1 className='text-[32px] text-[#2C2C2C]'>You may also like</h1>

            <div className="grid grid-cols-2 mt-[24px] gap-5">

                <div className="w-full">
                    <img className='w-full' src={alsoLikeImg1} alt="" />
                    <h1 className='md:text-[20px]  mt-5 text-[#000000] md:font-semibold'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
                    <div className="btn flex space-x-5 mt-[16px]">
                    <button className='bg-[#A0D7FF] md:px-5 px-3 py-2 rounded-[8px] text-white'>General</button>
                    <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
                    </div>
                </div>

                <div className="w-full">
                    <img className='w-full' src={alsoLikeImg2} alt="" />
                    <h1 className='md:text-[20px] mt-5 text-[#000000] md:font-semibold'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
                    <div className="btn flex space-x-5 mt-[16px]">
                        <button className='bg-[#A0D7FF] md:px-5 px-3 py-2 rounded-[8px] text-white'>General</button>
                        <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomendation;