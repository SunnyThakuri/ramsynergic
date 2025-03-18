
const FaqVideo = () =>{
    return(
        <div className="flex flex-col gap-12 items-center px-4">
            <p className="text-3xl">How to use Zoom</p>
            <div className="md:h-[478px] h-[210px] w-full md:w-[850px] rounded-2xl">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/VomOzeE7Z-k?si=yjioQ_Bq2owavx4o&amp;start=68&autoplay=1&mute=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    className="w-full h-full rounded-3xl"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default FaqVideo