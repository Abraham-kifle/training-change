import react from "react";
import {RxDashboard} from "react-icons/rx";

function Dcomponents(props){
return<div className="text-white text-center">
  <div>{props.icon}</div>
  <div>{props.name}</div>
</div>
}

export default Dcomponents