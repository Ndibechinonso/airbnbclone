import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Map from "../components/CustomIcons/Map";
import MapComponenet from "../components/MapComponent";
import Footer from "../components/Footer";
import { useState } from "react";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  const [viewStateToggle, setViewStateToggle] = useState("map")

  const toggleView = () =>{
    viewStateToggle === "map" ? setViewStateToggle("list") : setViewStateToggle("map")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Vacation Homes & Condo Rentals - Airbnb - Airbnb</title>
        <meta name="description" content="A clone of Airbnb site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {viewStateToggle === "map" ? <ImageGrid />
         : <MapComponenet />}
       
        <div className="map_container">
            <button onClick={toggleView} ><span>Show {viewStateToggle}</span> <Map /></button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
