import React from 'react';

const MenuButton = () => {
  return (
    <div
      className="xl:hidden text-primary rounded py-1 px-2 inline-block ml-2"
      aria-label="Open menu"
    >
      <label htmlFor="menu" className="flex items-center mb-0 text-primary cursor-pointer">
        <i className="fa fa-globe-americas text-4xl"></i>
      </label>
    </div>
  );
};

export default MenuButton;
