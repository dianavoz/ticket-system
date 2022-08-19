import orders from "../orders.json";
import { Card } from 'antd';
import React from 'react';
import Moment from "react-moment";


export interface Filter {
    filterBtn: string
  
  }

const OrderCard=({filterBtn}:Filter)=>{

   const filterOrders = filterBtn?(orders.filter((order)=>{return order.orderStatus === filterBtn})): orders;

   const count = filterOrders.length;

  
    return(
        <>
            <h4><strong>{count} {filterBtn} orders</strong></h4>
            {filterOrders.map(order=>{
                    return(
                        <div className="site-card-border-less-wrapper" key={order.id}>
                            <Card className="card" title={order.productName} style={{ width: 320 }} >
                                <p className="details order"><strong>Time: </strong><span className="date"><Moment format="D MMM YYYY hh:mm:ss">{order.dateOrdered}</Moment></span></p>
                                <p className="details status"><strong>Status: </strong> {order.orderStatus}</p>
                            </Card>
                        </div>
                    )
                })
                }
               
               
        </>
    )

}

export default OrderCard;