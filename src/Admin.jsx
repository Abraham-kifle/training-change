import AdminSideNav from "./AdminSideNav";
import {IoMdNotifications} from 'react-icons/io';
import {RxDotsHorizontal} from 'react-icons/rx';
import {CiSearch} from 'react-icons/ci';
import {IoMdTime} from 'react-icons/io';



export default function Admin(){
    return <div className="w-screen h-screen grid grid-cols-8">
        <AdminSideNav />
        <div className="col-span-7 grid-flow-row">
            <div className="shadow-lg h-16 shadow-slate-300 w-full grid grid-cols-3">
                <div className="text-center justify-center"><h1 className="my-5 font-bold text-lg ml-6 text-start">Members</h1></div>
                <div className="flex">
                    <div className="w-3/4 h-1/2 bg-slate-200 rounded-2xl mt-5 ml-5 flex">
                        <input type='search'  className="text-center h-full w-full rounded-2xl  bg-slate-200"></input>
                         <CiSearch className="h-6 w-6 text-[#962DFF] mt-1.5 mr-4"/>
                    </div>
                    {/* <CiSearch className="h-6 w-6 absolute text-[#962DFF] ml-72 mt-6"/> */}
                    <IoMdNotifications className="w-8 h-8 text-[#962DFF] mt-5 ml-3"/>    
                </div>
                <div className="flex gap-3 justify-end mr-5">
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">Admin</h1>
                        <h3>admin@gmail.com</h3>
                    </div>
                    <div>
                        <div className="rounded-full p-0.5 border-2 border-[#962DFF] my-2">
                            <img src="member.png" className="rounded-full border-black border"></img>
                        </div>
                    </div>
                    <RxDotsHorizontal className="w-7 h-7 mt-5"/>
                </div>

            </div>

            <div className="h-[100px] bg-[#9AAFDA]">
             <div className="flex flex- pt-8">

             <div className="bg-white ml-2 w-[30%] text-center rounded-t-lg">
             <button className="">
              All 9
             </button>
             <div className="w-full bg-[#742BDA] mt-3 h-1 "></div>
             </div>

             <div className="bg-white ml-2 w-[60%] text-center rounded-t-lg">
             <button>
             Soft Skill 9
             </button>
             </div>

             <div className="bg-white ml-2 w-full text-center rounded-t-lg">
             <button>
             Entrepreneur Skill 9
             </button>
             </div>

             <div className="bg-white ml-2 w-[70%] text-center rounded-t-lg">
             <button>
             Technical Skill 9
             </button>
             </div>

             <div className=" ml-2 text-center rounded-t-lg">
             <div className=" bg-slate-200 rounded-md p-1 flex mr-2">
                        <input type='search'  className="text-center rounded-md bg-slate-200"></input>
                        <p className="mt-1 text-gray">|</p> 
                        <CiSearch className="h-6 w-6 text-[#962DFF] mt-1.5 mr-4"/>
                    </div>
             </div>

    
             </div>
            </div>

            <div className="grid grid-col-3 grid-flow-col">
            {/*un used div*/}
            <div>
            <div className="shadow-2xl w-80 ml-7 mt-4 pt-4">
            <div className="w-[70px] h-8 bg-[#73ED5F] absolute pt-1 text-center ml-60 rounded-md top-48">
            <p>Active</p>
            </div>

            <div className="px-3 w-full h-1/2">
            <img src="th.png" alt="thmbnail not found"></img>
            </div>
            
            <div className="flex flex-row w-full justify-between">

            <div className="flex flex-row">
            <div className="pl-3 pr-2"><img src="author.png"></img></div>
            <div className="flex flex-col ml-2">
            <p>John Doe</p>
            <p className="text-[#2D4849]">Trainer</p>
            </div>
            </div>

            
            <div className="pr-5 ">
            <p className="text-lg text-[#858585]">Soft Skill</p>
            </div>
            </div>
               
            <div className="w-full mt-4 ml-2 ">
            <p>Soft Skill lorem ispum lorem ipsum<br/> lorem 
             ispum lorem ipsumlorem ispum <br/>lorem ipsum.</p>
            </div>

            <div className="flex flex-row ml-2 pt-4 text-[#]">
            <IoMdTime className="w-6 h-6"/>
            <p className="pl-2">08 hr 15 mins</p>
            </div>

            <div className="w-full bg-[#E6F0F0] text-center  mt-2 p-4">
            <button className="bold font-bold ">View Detail</button>
            </div>
            </div>
            </div>
            
            <div>
            <div className="shadow-2xl w-80 ml-7 mt-4 pt-4">
            <div className="w-[70px] h-8 bg-[#73ED5F] absolute pt-1 text-center ml-60 rounded-md top-48">
            <p>Active</p>
            </div>

            <div className="px-3 w-full h-1/2">
            <img src="th.png" alt="thmbnail not found"></img>
            </div>
            
            <div className="flex flex-row w-full justify-between">

            <div className="flex flex-row">
            <div className="pl-3 pr-2"><img src="author.png"></img></div>
            <div className="flex flex-col ml-2">
            <p>John Doe</p>
            <p className="text-[#2D4849]">Trainer</p>
            </div>
            </div>

            
            <div className="pr-5 ">
            <p className="text-lg text-[#858585]">Soft Skill</p>
            </div>
            </div>
               
            <div className="w-full mt-4 ml-2 ">
            <p>Soft Skill lorem ispum lorem ipsum<br/> lorem 
             ispum lorem ipsumlorem ispum <br/>lorem ipsum.</p>
            </div>

            <div className="flex flex-row ml-2 pt-4 text-[#]">
            <IoMdTime className="w-6 h-6"/>
            <p className="pl-2">08 hr 15 mins</p>
            </div>

            <div className="w-full bg-[#E6F0F0] text-center  mt-2 p-4">
            <button className="bold font-bold ">View Detail</button>
            </div>
            </div>
            </div>

            <div>
            <div className="shadow-2xl w-80 ml-7 mt-4 pt-4">
            <div className="w-[70px] h-8 bg-[#73ED5F] absolute pt-1 text-center ml-60 rounded-md top-48">
            <p>Active</p>
            </div>

            <div className="px-3 w-full h-1/2">
            <img src="th.png" alt="thmbnail not found"></img>
            </div>
            
            <div className="flex flex-row w-full justify-between">

            <div className="flex flex-row">
            <div className="pl-3 pr-2"><img src="author.png"></img></div>
            <div className="flex flex-col ml-2">
            <p>John Doe</p>
            <p className="text-[#2D4849]">Trainer</p>
            </div>
            </div>

            
            <div className="pr-5 ">
            <p className="text-lg text-[#858585]">Soft Skill</p>
            </div>
            </div>
               
            <div className="w-full mt-4 ml-2 ">
            <p>Soft Skill lorem ispum lorem ipsum<br/> lorem 
             ispum lorem ipsumlorem ispum <br/>lorem ipsum.</p>
            </div>

            <div className="flex flex-row ml-2 pt-4 text-[#]">
            <IoMdTime className="w-6 h-6"/>
            <p className="pl-2">08 hr 15 mins</p>
            </div>

            <div className="w-full bg-[#E6F0F0] text-center  mt-2 p-4">
            <button className="bold font-bold ">View Detail</button>
            </div>
            </div>
            </div>

            
           
       {/*second component*/}

    

            </div>
              
            


            
            
        </div>
    </div>
}