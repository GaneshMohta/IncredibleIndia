import { useState } from 'react';
import India from "@react-map/india";
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";

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
  const navigate = useNavigate();
  const [selectedStates, setSelectedStates] = useState([]);

  const handleSelect = (state, selectedStatesArray) => {
    console.log('Selected state:', state);
    // console.log('All selected states:', selectedStatesArray);
    setSelectedStates(selectedStatesArray || [state]);

    // Navigate to the selected state's page (for single selection)
    if (selectedStatesArray === undefined) {
      const stateName = state.replace(/\s/g, "");
      navigate(`/${stateName}`);
    }
  };

  return (
    <div className='maps'>
      <div className='aatulya-header flex justify-between p-2 sticky top-0 z-50 bg-slate-200 items-center'>
        <div className='flex gap-2'>
          <Link to='/'>
            <span className='text-slate-950 relative top-1'>
              <BsArrowLeftShort />
            </span>
          </Link>
          <h3>Aatulya Bharat</h3>
        </div>
      </div>

      <div className='map-container'>
        <India
          type="select-single"
          size={500}  // Adjust the size
          mapColor="lightblue"
          strokeColor="black"
          strokeWidth={1}
          hoverColor="orange"
          selectColor="green"
          hints={true}
          hintTextColor="white"
          hintBackgroundColor="black"
          hintPadding={5}
          hintBorderRadius={5}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}
