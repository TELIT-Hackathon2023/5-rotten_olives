import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Sectors = ({ onSectorClick }) => {
  const handleButtonClick = () => {
    const subpage = 1;
    onSectorClick(subpage);
  };
  return (
    <div>
      <main className={'d-flex flex-column align-items-end'}>
        <div onClick={handleButtonClick} className={'d-flex flex-column align-items-start sector sector-70'}>
          <div className={'sector-number'}>Section #2</div>
          <div className={'d-flex flex-row w-100 justify-content-between sector-details'}>
            <div>40 occupied</div>
            <div>20 free</div>
          </div>
        </div>
        <div className={'d-flex flex-column align-items-start sector sector-40'}>
          <div className={'sector-number'}>Section #3</div>
          <div className={'d-flex flex-row w-100 justify-content-between sector-details'}>
            <div>40 occupied</div>
            <div>20 free</div>
          </div>
        </div>
        <div className={'d-flex flex-column align-items-start sector sector-60'}>
          <div className={'sector-number'}>Section #4</div>
          <div className={'d-flex flex-row w-100 justify-content-between sector-details'}>
            <div>40 occupied</div>
            <div>20 free</div>
          </div>
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



      </main>
      <footer>
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
        </section>
      </footer>
    </div>
  );
}

export default Sectors;