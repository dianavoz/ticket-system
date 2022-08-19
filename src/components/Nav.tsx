import { Button } from "antd";
import { NavLink } from "react-router-dom";
import React from "react";

export interface Filter {
  setFilterBtn:  React.Dispatch<React.SetStateAction<string>>
  filterBtn: string
}

const Nav = ({setFilterBtn,filterBtn}:Filter) => {
 
 const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLTextAreaElement;
    setFilterBtn(target.value)
  };

  return (
    <> 
    <div className="nav">
      <NavLink to={""} className="nav">
          <Button type="text" size="large" value="" onClick={handleClick} className="orders">Orders</Button>
          <Button type="primary" size="large"  value="accepted" onClick={handleClick}>
            Accepted
          </Button>
          <Button type="primary" size="large"  value="inProgress" onClick={handleClick}> In Progress</Button>
          <Button type="primary" size="large"  value="complete" onClick={handleClick}>Complete</Button>
      </NavLink>
    </div>
    <div>
         {filterBtn&&<Button type="default" className="removeFilter" value="" onClick={handleClick}>
            Remove Filter ❎ 
          </Button>
       }
    </div>
    </>
  );
};

export default Nav;


