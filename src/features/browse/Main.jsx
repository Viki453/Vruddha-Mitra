import { useState } from "react";
import styles from "./Main.module.css";

import NavBar from "../../ui/NavBar";
import VruddhaList from "./VruddhaList";
import VruddhaDetails from "./VruddhaDetails";
// import SearchBox from "../components/SearchBox";
// import Map from "../components/Map";
import Map, { getLatLng } from "../map/Map";
import { useLoaderData } from "react-router";
import { getVListRadius } from "../../servers/vServices";

function Main() {
  const vruddhaData = useLoaderData();
  const [isMapOpen, setMapOpen] = useState(true);
  const [selectedVruddhaId, setSelectedVruddhaId] = useState(null);

  function handleMapOpen() {
    setMapOpen(!isMapOpen);
  }

  function handleVruddhaSelect(id) {
    setSelectedVruddhaId(id);
    setMapOpen(false); // Close the map when a Vruddha is selected
  }

  return (
    <div>
      {/* <NavBar /> */}
      <div className={styles.main}>
        <VruddhaList
          handleMapOpen={handleMapOpen}
          vruddhaData={vruddhaData}
          onSelect={handleVruddhaSelect} // Pass the selection handler
        />
        {isMapOpen ? (
          <Map />
        ) : (
          <VruddhaDetails
            handleMapOpen={handleMapOpen}
            vruddhaData={vruddhaData}
            selectedVruddhaId={selectedVruddhaId} // Pass the selected ID
          />
        )}
      </div>
    </div>
  );
}

export async function loader() {
  const { lat, lng } = getLatLng();
  const vruddhaData = await getVListRadius(lat, lng, 10);
  return vruddhaData;
}

export default Main;
