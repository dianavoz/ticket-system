import { Button } from "antd";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
         <h1>My Orders</h1>
         <Link to="/orders"><Button type="primary" size="large" >Take me to my Orders</Button></Link>
        </>
    )

}

export default Home;