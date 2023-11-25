import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from "../Card";
import './Default.scss';

const Default = (props) => {
  const [aaa, setAaa] = useState(props.aaa);

  return (
    <div className={'default-layout'}>
      <header>
        Header
        <nav>
          <h2 className="text-xl font-bold">
            asdasd
          </h2>
        </nav>
      </header>
      <main>
        <div>
          <h2 className="text-4xl font-bold text-center">Pick your game</h2>
          <div>
            {aaa}
            <DeleteIcon className={'delete-icon'}/>
              {aaa === 'products' &&
                <NavLink to={'/product/1'}>Detail</NavLink>
              }
              {aaa === 'product' &&
                <div>
                  <Card bbb={"cardicek"}/>
                </div>
              }
          </div>
        </div>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default Default;