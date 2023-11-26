import React, {useState} from "react";
import './Default.scss';
import FaceIcon from '@mui/icons-material/Face';
import Sectors from "../Sectors";
import ParkingLots from "../ParkingLots";
import axios from 'axios';


const Default = (props) => {
  const [subpage, setSubpage] = useState(0);

  const handleSectorClick = (subpage) => {
    axios
      .get("http://127.0.0.1:9229/sector?=1")
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    setSubpage(subpage);
  };

  return (
    <div className={'default-layout'}>
      <header>
        <div className={'d-flex flex-column align-items-start user'}>
          <div>Patrik</div>
          <p>Personal ID</p>
        </div>
        <div>
          <FaceIcon classname={'icon'}/>
        </div>
      </header>
      {
        subpage === 0 &&
        <Sectors onSectorClick={handleSectorClick} />
      }
      {
        subpage === 1 &&
        <ParkingLots />
      }
    </div>
  );
}

export default Default;