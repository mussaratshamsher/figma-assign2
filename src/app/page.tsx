import Image from "next/image";
import workTogether from "./../../public/workTogether.png"
import arrow from "./../../public/arrow.png"
import dataElem from "./../../public/dataElem.png"
import sponsers from "./../../public/sponsors.png"
import Apps from "./../../public/Apps.png"
import Slider from "./../../public/Slider.png"
import appIcon from "./../../public/appIcon.png"


import Header from "./components/Header";
import { Card, Card2, Card3 } from "./components/Card";
import { Frame1, Frame2, Frame3 } from "./components/Frames";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="font-normal">

{/* section 1 */}
<Header />
{/* Section 2 */}
<div className=" flex bg-blue-900 w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-5">
       <section className="flex p-8 ">
       <div className=" flex flex-col">
        <h1 className="text-white font-bold text-5xl mb-12 mt-14"> Get More Done With Whitepace</h1>
      <p className="text-white mb-12"> Project management software that enables your teams to collaborate, paln,
        analyze and manage everyday task.
      </p>
      <button className='flex justify-center p-2 w-52 gap-2 bg-blue-400 rounded text-white'>Try Whitepace Free
        <Image src={arrow} alt="" width={25} height={2}/> </button>
     </div>

      <div className="w-[800px] h-[350px] bg-blue-200"> </div> 
      </section>
    </div>

{/* Section 3 */}

<div  className=" flex justify-center bg-white bg-fixed w-full h-[500px] pt-[120px] pr-[120px] pl-[120px] gap-40">
<div className="flex flex-row justify-center gap-14">
      <div className="text-black mt-14">
        <h1 className=" font-extrabold text-5xl mb-12"> Project <br /> Management 
        <hr className="w-80 h-1 border-[2px] border-orange-300 content-center"/></h1>
      <p className="mb-12"> Images, videos, PDF's and audio files are supported. Create math expressions 
      and diagrams directly from the app. Take photos with mobile app and save them to 
      a note.
      </p>
      <button className='flex justify-center gap-2 p-2 w-40 bg-blue-400 rounded text-white'>Try it Free
      <Image src={arrow} alt="" width={25} height={2}/></button>
    </div>
    <div className="w-[700px] h-[350px] bg-blue-200"> </div>
</div>
</div>

{/* section 4 */}
<div  className=" flex bg-white bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">

<div className="w-[700px] h-[700px]">
    <Image src={workTogether} alt="" />     
        
      </div>  
<div className="text-black mt-16">
        <h1 className=" font-extrabold text-5xl mb-12"> Work Together<hr className="w-52 h-1 ml-40 border-[2px] border-orange-300"/></h1>
      <p className="mb-12"> With whitepaces share your notes with your colleagues and collaborate on them.
        You can also publish a note to the internet and share the URL with others.
      </p>
      <button className='flex justify-center p-2 w-40 gap-2  bg-blue-400 rounded text-white'>Get Started
      <Image src={arrow} alt="" width={25} height={2}/></button>
    </div>
</div>

{/* Section 5 */}
<div  className=" flex bg-blue-900 bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">

      <div>
        <h1 className=" font-extrabold text-white text-4xl mb-12"> Use as Extension<hr className="w-52 h-1 ml-36 border-[2px] border-orange-300"/></h1>
      <p className="mb-12 text-white"> Use the web clipper extension available on firefox and chrome, to save web pages
        or take screenshots as notes.
      </p>
      <button className='flex justify-center gap-2 p-2 w-40 bg-blue-400 rounded text-white'> Let's Go
      <Image src={arrow} alt="" width={25} height={2}/></button>
    </div>
    <div className="w-[700px] h-[350px] bg-blue-200"> </div>
     
</div>

{/* setion 6 */}
<div  className=" flex bg-white bg-fixed w-full h-[600px] pt-[120px] pr-[120px] pl-[120px] gap-40">
<div className="w-[1000px] h-[350px] bg-blue-200"> </div>

<div className="text-black">
        <h1 className=" font-extrabold text-5xl mb-12"> Customize it to <br /> your needs <hr className="w-72 h-1 border-[2px] border-orange-300"/></h1>
      <p className="mb-12"> Customize the app with the plugins, custom themes and multiple text editors (Rich Text or Markdown). 
        Or create your own scripts and plugins using the Extension API. 
      </p>
      <button className='flex justify-center gap-2 p-2 w-40 bg-blue-400 rounded text-white'>Lets's Go
      <Image src={arrow} alt="" width={25} height={2}/></button>
    </div>
</div>
{/* Section 7 */}
<div>
<h1 className=" font-extrabold text-5xl text-center text-black mb-8"> Choose Your Plan<hr className="w-72 h-1 ml-[650px] border-[2px] border-orange-300"/></h1>
<p  className="text-center">Whether you want to get organize, keep your personal life on track, or boost workplace
   productivity. Evernote <br />has the right plan for you.
</p>
</div>
<div className="flex flex-row gap-5 ml-8 mr-8">
  <div className="mt-10"> <Card /> </div>
  <div className="mt-5">  <Card2 />   </div>
  <div className="mt-10">  <Card3 />  </div>
 
</div>

{/* section8 */}
<div className=" bg-blue-900 w-full h-96 mt-20 ">
<h1 className="pt-14 font-extrabold text-white text-center text-5xl mb-12"> Your work, Everywhere you are
  <hr className="w-48 h-1 ml-[900px] border-[2px] border-blue-400"/></h1>
      <p className=" text-white text-center "> Access your notes from your computer, phone or tablet by synchronizing 
        with various services, including whitespce, dropbox and <br />
      OneDrive. The app is available on Windows, macOS, Linux, Android and IOS. A terminal app is also available!  
      <br />
      
      </p>
      <div className="flex justify-center pt-10">
      <button className='flex justify-center gap-2 p-2 w-36 bg-blue-400 rounded text-white'> Try Taseky
      <Image src={arrow} alt="" width={25} height={2}/> </button>
          </div>
    </div>

    {/* section 9 */}

<div  className=" flex bg-white bg-fixed w-full h-[500px] pt-[120px] pr-[120px] pl-[120px]">

<div className="text-black">
 <h1 className=" font-extrabold text-4xl mb-6 mt-10">100% Your Data<hr className="w-28 ml-52 h-1 border-[2px] border-orange-300"/></h1>
<p className="mb-6"> The ap is open source and notes are saved to an open format, you'll 
 always have access to them. Uses End-To_End Encription (E2EE) to 
 secure your notes and ensure no-one but yourself can access them.
</p>
<button className='flex justify-center gap-2 p-2 w-40 bg-blue-400 rounded text-white'> Read more
<Image src={arrow} alt="" width={25} height={2}/> </button>
</div>
<div className="w-[1500px] h-[1900px]">
    <Image src={dataElem} alt="" />  </div>   
        
</div> 

{/* section 10 */}
<div className="  bg-white bg-fixed w-full h-[300px]">
<h1 className="font-extrabold text-slate-900 text-center text-5xl mb-30"> 
  Our Sponsors<hr className="w-64 h-1 ml-[600px] border-[2px] border-orange-300"/></h1>
<div className="flex justify-center mt-20">
<Image src={sponsers} alt="" width={900} height={500}  />
</div>
</div>

{/* section 11 */}
<div  className=" flex bg-blue-900 bg-fixed w-full h-[500px] pt-20   pr-[120px] pl-[120px] gap-40">

<div className="w-[700px] h-[700px]">
        <Image src={Apps} alt="" className="transparent"></Image>
      </div>
      <div>
        <h1 className=" font-extrabold text-white text-4xl mb-12">Work With Your <br /> Favourite Apps Using 
        <br /> whitepace</h1>
      <p className="mb-12 text-white"> whitepace teams up with your favourite software. Integrate with over 1000+ apps
        with Zapier to have all the tools you need for your projects success.
      </p>
      <button className='flex justify-center p-2 w-40 bg-blue-400 rounded text-white'> Read more
      <Image src={arrow} alt="" width={25} height={2}/></button>
    </div>
</div>

{/* section 12 */}
<div className="w-full  h-[600px] bg-white">
<h1 className=" font-extrabold text-6xl text-center text-black mb-12 mt-12"> What Our Clients Says<hr className="w-40 h-1 ml-[875px] border-[2px] border-orange-300"/></h1>

<div className="flex flex-row justify-center gap-5">
<div> <Frame1 />  </div>
<div> <Frame2 /> </div>
<div> <Frame3 /> </div>
 </div>
 <div className="flex justify-center mt-10"> <Image src={Slider } alt="" /></div>
</div>
{/* section 13 */}

<div className=" bg-blue-900 w-full h-[700] mt-20 ">
<h1 className="pt-14 font-extrabold text-white text-center text-4xl mb-12">Try Whitepace <br />Today</h1>
      <p className=" text-white text-center "> Get started  for free. <br />
      Add your whole team as your needs grow.
      </p>
      <div className="flex justify-center pt-10">
      <button className='flex justify-center p-2 w-40 bg-blue-400 rounded text-white'> Try taskey free
      <Image src={arrow} alt="" width={25} height={2}/></button>
        </div>
        <p className=" text-white text-center mt-10 mb-10">On a big team? Contact sales</p>
<div className="flex justify-center">
 <Image src={appIcon} alt="" /> </div>
</div>

 {/* section 14  Footer */}
 <div>
  <Footer />
</div>








      
    </main>
  );
}
