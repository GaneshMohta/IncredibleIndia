import { useState } from 'react';
import DatamapsIndia from 'react-india-states-map';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      name: "Maharashtra",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  }
};

export default function MapIndia() {
  const navigate=useNavigate();

  const [activeState, setActiveState] = useState(null);

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    console.log(name);
    setActiveState({ data, name });
    const newname=name.replace(/\s/g,"");

    navigate(`/${newname}`);
    //onRoute(name);

  };

  // const onRoute=(name)=>{
  //   <Routes>
  //     <Route path=`/${name}` element={/>
  //   </Routes>
  // }

  return (
    <div className='maps'>
      <DatamapsIndia
        regionData={stateLists}
        mapLayout={{

          borderColor: 'white',
          noDataColor: 'navy'
        }}
        hoverComponent={({ value }) => {
          return(
          <p style={{ color: 'green' }}>{value.name}</p>
          )
        }}
        onClick={stateOnClick}
        activeState={activeState}
      />
    </div>
  );
}
