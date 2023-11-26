import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { parseISO, format } from 'date-fns';

const ParkingLots = (props) => {

  function render_column(from, to) {
    return props.parkingSpots.map( (parkingSpot, index) => {
      if (from <= index && index <= to) {
        return (
          <div className={`parking-lot ${parkingSpot.spot_state === 0 && 'free'} ${parkingSpot.spot_state === 1 && 'reserved'} ${parkingSpot.spot_state === 2 && 'occupied'}`}>
            <div className={'d-flex flex-row justify-content-between'}>
              {parkingSpot.spot_state === 0 &&
                <div className={'state'}>Free</div>}
              {parkingSpot.spot_state === 1 &&
                <div className={'state'}>Reserved</div>}
              {parkingSpot.spot_state === 2 &&
                <div className={'state'}>Occupied</div>}
              <div className={'id'}>#{parkingSpot.spot_number}</div>
            </div>
            <div className={'d-flex flex-row align-items-start number'}>
              <div>
                {parkingSpot.vehicle_license}
              </div>
            </div>
          </div>
        )
      }
    });
  }

  return (
    <div>
      <main>
        <div className={'d-flex flex-row'}>
          <div className={'d-flex flex-column'}>
            {render_column(0, 4)}
          </div>
          <div className={'d-flex flex-column'}>
            <div className={'road'}>
              <ArrowDownwardIcon className={'icon'}/>
            </div>
          </div>
          <div className={'d-flex flex-column'}>
            {render_column(5, 9)}
          </div>
          <div className={'d-flex flex-column'}>
            {render_column(10, 14)}
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/*<div>*/}
          {/*  {aaa}*/}
          {/*  <DeleteIcon className={'delete-icon'}/>*/}
          {/*    {aaa === 'products' &&*/}
          {/*      <NavLink to={'/product/1'}>Detail</NavLink>*/}
          {/*    }*/}
          {/*    {aaa === 'product' &&*/}
          {/*      <div>*/}
          {/*        <Card bbb={"cardicek"}/>*/}
          {/*      </div>*/}
          {/*    }*/}
          {/*</div>*/}


        </div>
      </main>
      <footer>
        <div className={'banner-wrapper'}>
          <div className={'banner-id'}>
            <div className={'circle free'} />
            <div>Slot #34</div>
            {/*<div><b>Select free parking slot</b></div>*/}
          </div>
          <div className={'banner-info -error'}>
            {/*Free from 16:00 - 18:00*/}
            <div className={'w-100'}>Occupide from 18:00 - 19:00</div>
          </div>
        </div>
        <section>
          <div className={'day-wrapper'}>
            <div className={"day"}>
              <div>Today</div>
              <p>Nov 25</p>
            </div>
            <div className={"day"}>
              <div>Tomorrow</div>
              <p>Nov 26</p>
            </div>
            <div className={"day"}>
              <div>Monday</div>
              <p>Nov 27</p>
            </div>
          </div>
          <div className={'duration-wrapper'}>
            <div className={'duration-item'}>
              <p>From</p>
              <div className={'input'}>
                <div className={'left-addon'}>
                  <ArrowBackIosNewIcon className={'icon'}/>
                </div>
                <input className={'text-field'} placeholder={'16:00'} />
                <div className={'right-addon'}>
                  <ArrowForwardIosIcon className={'icon'}/>
                </div>
              </div>
            </div>
            <div className={'duration-item'}>
              <p>To</p>
              <div className={'input'}>
                <div className={'left-addon'}>
                  <ArrowBackIosNewIcon className={'icon'}/>
                </div>
                <input className={'text-field'} placeholder={'18:00'}/>
                <div className={'right-addon'}>
                  <ArrowForwardIosIcon className={'icon'}/>
                </div>
              </div>
            </div>
          </div>
          <div className={'licence-plate-wrapper'}>
            <p>Licence Plate</p>
            <div className={'input'}>
              <input className={'text-field'} placeholder={'Enter Your License Plate'} />
            </div>
          </div>
          <div className={'reserve-wrapper'}>
            <p className={'reserve-info'}>Select free parking slot you want to reserve</p>
            <button className={'primary-button'} disabled={true}>
              Reserve
              {/*Add to Whitelist*/}
            </button>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default ParkingLots;