import Image from "next/image"
import Logo from "./../../../public/Logo.png"
import arrow from "./../../../public/arrow.png"


export default function Header() {
    return (
      <main>



          <header className=''>
              <nav className='flex justify-between p-8 bg-blue-900 w-full'> 
  
          <div className=" flex items-center ml-3  gap-2 w-10 h-10  " >
              <Image src={Logo} alt="icon" width={25} height={25}/>  
   <h1 className='text-white font-extrabold'>Whitepace</h1>
            </div> 
                  <ul className=' flex justify-center gap-[50px] text-white '>
                      <li>Products</li>
                      <li>Solutions</li>
                      <li>Pricing</li>                   
                      <li>Resources</li>
                  </ul>
                  
                  <div className='flex ml-14 gap-[40px]'>
                      <button className='w-20 bg-orange-300 text-blck rounded'> login</button> 
                      <button className='flex p-2 w-52 gap-2 bg-blue-500 rounded text-white'>Try Whitepace Free
                      <Image src={arrow} alt="" width={25} height={2}/></button>
                  </div>
              </nav>
             <hr className="border-orange-300"/>
          </header> 
      </main>
    )
  }
  