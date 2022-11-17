import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const seerbit = axios.create({
  baseURL:
    "https://sandbox-api.oneliquidity.technology/integrator/v1/deposit/float",
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    authorization: `Bearer ${process.env.REACT_APP_ONELIQUIDITY_BEARER_TOKEN}`,
  },
});
const Seerbit = ({ amount, handleClose, myOrders, setMyOrders }) => {
 
  const seerbitPay = () => {
    const fetch = async () => {
      const res = await seerbit
        .post("", {
          amount: Number(`${amount}`),
          currency: "USD",
        })
        .catch((err) => console.log(err));
  
      if (res.status === 201){
        setMyOrders([...myOrders,  {
          id: Math.floor(1000 + Math.random() * 9000),
          createdAt: Date.now(),
          status: "One Liquidity",
          totalAmount: amount,
        }]);
        handleClose();
        alert("payment success check your email ")
      }
    };
    fetch();
  };
  return (
    <Button onClick={seerbitPay} variant="contained">
     Make payment
    </Button>
    
  );
};

export default Seerbit;
