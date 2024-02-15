import Nav from "./Nav/Nav";

const urls = ["./mobile-image-hero-1.jpg", "./mobile-image-hero-2.jpg","./mobile-image-hero-3.jpg"]
const urlsw = ["./desktop-image-hero-1.jpg", "./desktop-image-hero-2.jpg","./desktop-image-hero-3.jpg"]



export default function Hero({i}){

    console.log(urls[i])

    return(
        <div className="sm:w-3/5 sm:h-[70vh] w-full relative">
            <Nav />
            <div className="w-full sm:hidden block h-full">
                <img className="w-full h-full" src={urls[i]} alt="" />
            </div>
            <div className="w-full hidden sm:block h-full">
                <img className="w-full h-full" src={urlsw[i]} alt="" />
            </div>
        </div>
    )
}