
import "./list.scss"
import Filter from "../../components/filter/Filter"
// import Card from "../../components/card/Card"
import Map from "../../components/map/Map.jsx";
// import DocCard from "../docCard/Card.jsx";
import { doctorsData } from "../../lib/data.js";
import Doctor from "../docCard/Card.jsx";

// import Map from "../../components/map/Map";

function List() {
  const data = doctorsData;


  return <div className="list">
    <div className="listContainer">
      <div className="wrapper">
        
     {data.map(item=>(
      <Doctor key={item.id} data={item}/>
     ))}
       
      </div>
    </div>
  
  </div>;
}

export default List;
