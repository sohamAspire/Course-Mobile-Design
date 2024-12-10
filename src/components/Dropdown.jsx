import React, { useState } from "react";
import DropDownIdicator from '../assets/dropdown.svg';

const Dropdown = ({ options, label, overflow , medium }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleDropdown = (value) => {
    setActive(value);
    setIsOpen(!isOpen);
  };


  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className={`inline-flex justify-between ${medium ? 'py-2' : ' py-5'} w-full rounded-md border border-gray-300 shadow-sm px-4 ${overflow ? 'bg-transparent' : 'bg-white'}  text-sm font-medium text-gray-700 focus:outline-none focus:ring-indigo-500`}>
        <span>{!active ? label : active}</span>
        <img src={DropDownIdicator} alt="arrow" className="w-6 aspect-square ml-2" />
      </button>

      {isOpen && (
        <div className="origin-left absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu">
          <ul className={`py-1 ${overflow ? 'h-[80px] overflow-auto' : ''}`} role="none">
            {options.map((option, index) => {
              return (<li
                key={index}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleDropdown(option)}
              >
                {option}
              </li>)
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
