import "leaflet/dist/leaflet.css"
import styles from "../../styles/Home.module.scss"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const MapComponent = () =>{
  
  const position = [9.077751, 8.6774567]
      return (
        <MapContainer className={styles.map} center={position} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      );
}

export default MapComponent