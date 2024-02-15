import { useState } from "react"



export default function Nav(){

    const [open,setOpen] = useState(false)

    function toggle(){
        setOpen(!open)
    }

    return(
        <div className="absolute flex gap-10 px-8 py-6 z-20 items-center top-0 left-0 w-full">
            <div className="h-6 hidden sm:block">
                <img className="h-full w-auto" src="./logo.svg" alt="" />
            </div>
            <ul className="sm:flex sm:gap-3 text-white hidden">
                <li className="text-md cursor-pointer relative after:absolute after:w-0 hover:after:w-10 after:bottom-3 after:h-1 after:bg-text-white after:rounded-full ">home</li>
                <li className="text-md cursor-pointer relative after:absolute after:w-0 hover:after:w-10 after:bottom-3 after:h-1 after:bg-text-white after:rounded-full ">shop</li>
                <li className="text-md cursor-pointer relative after:absolute after:w-0 hover:after:w-10 after:bottom-3 after:h-1 after:bg-text-white after:rounded-full ">about</li>
                <li className="text-md cursor-pointer relative after:absolute after:w-0 hover:after:w-10 after:bottom-3 after:h-1 after:bg-text-white after:rounded-full ">contact</li>
            </ul>
            {!open &&
            <div className="sm:hidden w-full px-4 flex gap-6 items-center justify-start py-4">
                
                <div className="h-6  " onClick={toggle}>
                    <img src="./icon-hamburger.svg" className="h-full w-auto" alt="" />
                </div>
               
                <div>
                    <img src="./logo.svg" alt="" />
                </div>
            </div>}
            { open &&
            <div className="sm:hidden bg-white w-full px-4 flex gap-6 py-6">
                <div className="h-6" onClick={toggle}>
                    <img src="./icon-close.svg" className="h-6 w-auto" alt="" />
                </div>
                <ul className="flex gap-4">
                    <li className='text-md text-black font-semibold'>home</li>
                    <li className='text-md text-black font-semibold'>shop</li>
                    <li className='text-md text-black font-semibold'>about</li>
                    <li className='text-md text-black font-semibold'>contact</li>
                </ul>

            </div>
        }
        </div>
    )
}