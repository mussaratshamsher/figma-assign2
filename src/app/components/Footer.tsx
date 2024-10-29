import React from 'react'

import Image from 'next/image'
import Logo from "./../../../public/Logo.png"
import arrow from "./../../../public/arrow.png"
import Language from "./../../../public/Language.png"
import socialIcon from "./../../../public/socialIcon.png"
export default function Footer() {
  return (
    <main>
     <main className="bg-blue-900 w-full h-[700]  flex flex-row justify-between text-white p-32">

     <div>
        <div className= "flex flex-row gap-2"> 
        <Image src={Logo} alt="icon" className= "w-10 h-7" />
          <h1 className= "mb-4 font-medium text-2xl"><b>Whitepace</b></h1>
          </div>
          <p> Whitepace was created for <br />the new ways we live and <br />
          work.We make a better <br />workspace around the world.</p>
        </div>

        <div>
          <h1 className= "mb-4"><b>Product</b></h1>
          <ul >
            <li className="text-orange-300">Overview</li>
            <li> Pricing</li>
            <li>Customr Stories</li>
          </ul>
        </div>

        <div>
          <h1  className= "mb-4"><b>Resources</b></h1>
          <ul>
            <li>Blog</li>
            <li>Guides & Tutorials</li>
            <li>Help center</li>
          </ul>
        </div>

        <div>
          <h1  className= "mb-4"><b>Company</b></h1>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>

        <div>
          <h1  className= "mb-4 font-medium text-2xl"><b>Try it Today</b></h1>
          <p>Get started for free. Add <br />whole team as your needs grow</p>
          <button className="flex justify-center p-2 w-40 bg-blue-400 rounded text-white mt-4"> Start today
          <Image src={arrow} alt="" width={25} height={2}/></button>
        </div>
        </main>

        <div className= "w-full h-[500] bg-blue-900 p-10">
        <hr className="w-full h-5 border-[1] border-orange-300" ></hr>
       <ul className= "flex flex-row justify-center gap-8 text-white" >
        <li> <Image src={Language} alt="" /></li>
        <li> Terms & privacy</li>
        <li> Security</li>
        <li> Status</li>
        <li> @2024 Copyrights  Reserved  Mussarat  Shamsher</li>
        <li> <Image src={socialIcon} alt="" /></li>
       </ul>
       
        </div>

    </main>
  )
}
