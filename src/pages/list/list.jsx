import { listData } from "../../lib/dummydata";
import "./list.scss"
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
// import Map from "../../components/map/Map";

function ListPage() {
  const data = listData;

  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        {data.map(item=>(
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
    <div className="mapContainer">
    <h1>MAP HERE</h1>
    </div>
  </div>;
}

export default ListPage;
