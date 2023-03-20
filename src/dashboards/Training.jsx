import react from "react";
import Constant from "./Constant";
import Dcomponents from "./Dcomponents";
import {GrAnnounce} from "react-icons/gr";
// import {HiOutlineComputerDesktop} from "react-icons/hi";
// import {FiUsers} from "react-icons/fi";
// import {GrAnnounce} from "react-icons/gr";

function Training(props){
return <div className="grid grid-col-9 w-screen h-screen ">
<div className="bg-[#742BDA] h-screen w-full float-left relative  col-span-1">

<div><img src="assets/Dlogo.png" className="h-10 w-10"></img></div>
<Dcomponents
icon={Constant[0].icon}
name={Constant[0].name}
/>

<Dcomponents
icon={Constant[1].icon}
name={Constant[1].name}
/>

<Dcomponents
icon={Constant[2].icon}
name={Constant[2].name}
/>
<Dcomponents
icon={Constant[3].icon}
name={Constant[3].name}
/>

<Dcomponents
icon={Constant[4].icon}
name={Constant[4].name}
/>

<Dcomponents
icon={Constant[5].icon}
name={Constant[5].name}
/>

<Dcomponents
icon={Constant[6].icon}
name={Constant[6].name}
/>

<Dcomponents 
icon={Constant[7].icon}
/>
 </div>

 <div className="col-span-8">

 <div className="grid grid-col-4 grid-flow-col h-[60px] shadow-lg">
 
 <div className="col-span-1 pl-6 pt-3">
 <h3>Trainings</h3>
 </div>

 <div className="flex flex-row pl-[30%]">
 <div className=" items-center relative w-[100%] mt-3">
 <input className="border rounded-full w-[100%]"/>
 <div className="ml-[90% absolute">
 <GrAnnounce/>
 </div>
 </div>
 </div>

 <div className="col-span-1 pl-[50%] pt-2">
 <div className="flex flex-row">
 <div>
 <p className="">Admin</p>
 <p className="text-gray">admin@gmail.com</p>
 </div>
 <img className="rounded-full pl-2" src="assets/avater.png"></img>
 </div>

 </div>
 </div>
 </div>

  <div className="">
//  <p>selam</p>
  </div>
</div>
}

export default Training