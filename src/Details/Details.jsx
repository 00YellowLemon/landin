const details =  [
    {
    title: "Discover innovative ways to decorate",
    word: ` We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`
},
{
    title: "  We are available all across the globe",
    word: `  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`
},
{
    title: "Manufactured with the best materials",
    word:   `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.`
}
]

export default function Details({i,nextFun,prevFun}){
    return(
        <div className=" relative w-full sm:flex sm:flex-col items-start sm:pr-16cc p-6 sm:p-10 justify-center sm:w-2/5">
            <h1 className="text-2xl sm:text-4xl font-bold mb-6">{details[i].title}</h1>
            <p className="text-md mb-4 text-neutral-400 font-medium">
               {details[i].word} 
            </p>
            <button className="flex uppercase justify-center items-center font-bold gap-4">
                <span>
                    shop now
                </span>
                <img src="./icon-arrow.svg" alt="" />
            </button>
            <div className="absolute top-0 right-0 z-20 flex items-center justify-center sm:bottom-0 sm:right-auto sm:top-auto sm:left-0 sm:translate-y-0 -translate-y-full">
                <div className="p-6 bg-black grid place-items-center cursor-pointer" onClick={nextFun}>
                    <img src="./icon-angle-left.svg" className="h-6 w-auto" alt="" />
                </div>
                <div className="p-6 bg-black grid place-items-center cursor-pointer" onClick={prevFun}>
                    <img src="./icon-angle-right.svg" className="h-6 w-auto" alt="" />
                </div>
            </div>
        </div>
    )
}