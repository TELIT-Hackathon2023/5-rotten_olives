import React, {useState, useEffect} from "react";
import './Default.scss';
import FaceIcon from '@mui/icons-material/Face';
import Sectors from "../Sectors";
import ParkingLots from "../ParkingLots";
import axios from 'axios';
import _ from 'lodash';


const Default = (props) => {
  const [subpage, setSubpage] = useState(0);
  const [parkingSpots, setParkingSpots] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSectorClick = (subpage) => {
    axios
      .get("http://127.0.0.1:3001/sector?sectorID=1")
      .then(function (response) {
        setParkingSpots(_.orderBy(response.data, ['spot_number'], ['asc']));
        setLoading(false);
        setSubpage(subpage);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  // useEffect(() => {
  //   // Make an Axios call and update the state with the received data
  //   axios.get('http://127.0.0.1:3001/sector?sectorID=1')
  //     .then(response => {
  //       setParkingSpots(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <div className={'default-layout'}>
      <header>
        <div className={'d-flex flex-column align-items-start user'}>
          <div>Patrik</div>
          <p>Personal ID</p>
        </div>
        <div>
          <FaceIcon className={'icon'}/>
        </div>
      </header>
      {
        subpage === 0 &&
        <Sectors onSectorClick={handleSectorClick} />
      }
      {(!loading && subpage === 1) ? (
        <ParkingLots parkingSpots={parkingSpots} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Default;