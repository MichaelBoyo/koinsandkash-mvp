import { useState } from "react";
import axios from "axios";
import { Alert, Button } from "@mui/material";
const oneLiquidity = axios.create({
  baseURL:
    "https://sandbox-api.oneliquidity.technology/integrator/v1/deposit/float",
  headers: {
    "content-type": "application/json",
    accept: "application/json",
    authorization: `Bearer ${process.env.REACT_APP_ONELIQUIDITY_BEARER_TOKEN}`,
  },
});
const OneLiquidity = ({ amount, myOrders, setMyOrders, name }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const oneLiquidityPay = () => {
    const fetch = async () => {
      const res = await oneLiquidity
        .post("", {
          amount: Number(`${amount}`),
          currency: "USD",
        })
        .catch((err) => console.log(err));

      if (res.status === 201) {
        const data = {
          id: Math.floor(1000 + Math.random() * 9000),
          createdAt: Date.now(),
          status: "One Liquidity",
          totalAmount: amount,
        };

        localStorage.setItem(name, JSON.stringify([...myOrders, data]));

        setMyOrders([...myOrders, data]);
        setIsLoaded(true);
      }
    };
    fetch();
  };
  if (isLoaded) {
    return <Alert severity="success">Payment successful</Alert>;
  }
  return (
    <Button onClick={oneLiquidityPay} variant="contained">
      Make payment
    </Button>
  );
};

export default OneLiquidity;
