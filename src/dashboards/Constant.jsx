import React from "react";
import {RxDashboard} from "react-icons/rx";
import {AiOutlineMessage} from "react-icons/ai";
import {HiOutlineComputerDesktop} from "react-icons/hi2";
import {FiUsers} from "react-icons/fi";
import {GrAnnounce} from "react-icons/gr";
import {VscFeedback} from "react-icons/vsc";
import {MdLogout} from "react-icons/md";

const Constant = [
    {
        icon: <RxDashboard className="w-8 h-8 "/>,
        name:<p>Dashboard</p>
    },
    {
        icon: <AiOutlineMessage className="w-8 h-8"/>,
        name: <p>Message</p>
    },
    {
        icon: <AiOutlineMessage className="w-8 h-8"/>,
        name: <p>Message</p>
    },
    {
        icon: <HiOutlineComputerDesktop className="w-8 h-8 items-center justify-center"/>,
        name: <p>Training</p>
    },
    {
        icon: <FiUsers className="w-8 h-8"/>,
        name: <p>Members</p>
    },
    {
        icon: <GrAnnounce className="w-8 h-8"/>,
        name: <p>Announcement</p>
    },
    {
        icon: <VscFeedback className="w-8 h-8"/>,
        name: <p>Feedback</p>
    },
    {
        icon: <MdLogout className="w-8 h-8"/>,
    }
]

export default Constant;