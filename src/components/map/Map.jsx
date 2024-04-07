import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "./Map.scss"
import "leaflet/dist/leaflet.css"
import Pin from '../pin/Pin';
import { listData } from '../../lib/dummydata';

const Map = () => {
    const position = [52.4797, -1.90269]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {listData.map(item=>(
      <Pin key={item.id} item={item}/>

    ))}
  
  </MapContainer>

  )
}

export default Map
