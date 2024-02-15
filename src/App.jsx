import { useState } from 'react'
import './App.css'
import Details from './Details/Details';
import Hero from './Hero/Hero';


function App() {
  const [i, seti] = useState(0)

  function nextFun(){
    if(i>1){
  
      seti(0)
    }
    else{
      seti(i+1)
    }
  }
  function prevFun(){
    if (i<1){
      seti(2)
    }
    else{
      
      seti(i-1)
    }
  }
  

  return (
    <main className='w-full font-Leage'>
        <section className='w-full sm:flex '>
          <Hero i={i}/>
          <Details i={i} nextFun={nextFun} prevFun={prevFun} />
        </section>
        <section className='w-full block sm:flex'>
          <div className="sm:w-[30%] w-full">
            <img className='w-full h-auto' src="./image-about-dark.jpg" alt="" />
          </div>
          <div className='sm:w-[40%] w-full flex flex-col text-left items-start py-6 sm:py-6 px-6 justify-center bg-white'>
            <h2 className='uppercase text-black mb-3 text-md font-bold'> 
              about our funiture
            </h2>
            <p className='text-md font-medium text-neutral-400 leading-loose'>
              Our multifunctional collection blends design and function to suit your
              individual taste. Make each room unique, or pick a cohesive theme that best
              express your interests and what inspires you. Find the funiture poeces you
              need, from traditional to contemporary styles or anything in between.
              Product specialists are available to help you create your dream space.
            </p>
          </div>
          <div className='sm:w-[30%] w-full'>
            <img className='w-full h-auto' src="./image-about-light.jpg" alt="" />
          </div>
        </section>
    </main>
  )
}

export default App
