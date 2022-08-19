import { Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav"
import OrderCard from "./OrderCard"

const Orders=()=>{
    const [filterBtn, setFilterBtn] = useState("");

    return(
       <>
        <Nav setFilterBtn={setFilterBtn} filterBtn={filterBtn}/>
        
        <div>
     
                <OrderCard filterBtn={filterBtn} />
        </div>
        </>
    )

}

export default Orders;