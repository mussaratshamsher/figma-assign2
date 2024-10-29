import Image from "next/image"
import React from 'react'

import Wthumb from "./../../../public/Wthumb.png"
import Bthumb from "./../../../public/Bthumb.png"
import man from "./../../../public/man.png"
import man2 from "./../../../public/man2.png"

export function Frame1() {
  return (
    <main className=" w-[400px] h-[429.57px] mt-10  border-t-[1px] border-r-2 border-b-2 border-gray-200 shadow-sm">

<div className= "text-slate-900 p-10">
<div className= "flex flex-row">
<Image src={Bthumb} alt="" />
</div>
<p className="mt-7 mb-7">Whitespace is designed as a collaboration tool for budinesses that is a full project management solution.</p>
<hr className= "w-72 h-1 border-[1] border-gray-800 content-center"></hr>
</div>

<div className= "flex flex-row justify-center gap-5"> 
  <div >
    <Image src={man} alt="" className="w-20 h-20 border border-gray-500 shadow-stone-600 rounded-full"/>
  </div>

<div>
  <h1 className= "text-black"> <b>Oberon Shaw, MCH</b></h1>
  <p className= "text-black">Head of Talent Acquistion, <br />
  North America </p>
</div>

</div>
    

    </main>
  )
}

export function Frame2() {
  return (
    <main className= "w-[400px] h-[429.57px] mt-10 border border-blue-400  rounded bg-blue-400">

<div className= "text-white p-10">
<div className= "flex flex-row">
<Image src={Wthumb} alt="" />
</div>
<p className= "mt-7 mb-7">Whitespace is designed as a collaboration tool for budinesses that is a full project management solution.</p>
<hr className= "w-72 h-1 border-[1] border-blue-200 content-center"></hr>
</div>

<div className="flex flex-row justify-center gap-5"> 
  <div >
    <Image src={man2} alt="" className= "w-20 h-20 border border-white rounded-full"/>
  </div>

<div>
  <h1 className= "text-blue-900"> <b>Oberon Shaw, MCH</b></h1>
  <p className= "text-white">Head of Talent Acquistion, <br />
  North America </p>
</div>

</div>
    

    </main>
  )
}

export function Frame3() {
  return (
    <main className= "w-[400px] h-[429.57px] mt-10  border border-blue-400  rounded bg-blue-400">

    <div className=" text-white p-10">
    <div className= "flex flex-row">
    <Image src={Wthumb} alt="" />
    </div>
    <p className= "mt-7 mb-7">Whitespace is designed as a collaboration tool for budinesses that is a full project management solution.</p>
    <hr className= "w-72 h-1 border-[1] border-blue-200 content-center"></hr>
    </div>
    
    <div className= "flex flex-row justify-center gap-5"> 

      <div > <Image src={man} alt="" className=" w-20 h-20 border border-gray-500 shadow-stone-600 rounded-full"/></div>
    
    <div>
      <h1 className="text-blue-900"> <b>Oberon Shaw, MCH</b></h1>
      <p className= "text-white">Head of Talent Acquistion, <br />
      North America </p>
    </div>
    
    </div>
        
    
        </main>
  )
}

