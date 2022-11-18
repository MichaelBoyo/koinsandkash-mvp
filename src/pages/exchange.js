import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Alert, Box, Card, Container, Typography } from "@mui/material";

import { OrdersTable } from "../components/orders-table";

import { Cube as CubeIcon } from "../icons/cube";
import { SummaryItem } from "../components/reports/summary-item";
import { Grid } from "@mui/material";
import { Cash as CashIcon } from "../icons/cash";
import Links from "./Links";
const tableHeaders = ["Order ID", "Date", "Amount ($)", "Payment Gateway"];
const stats = [
  {
    content: "Crypto to Naira",
    icon: CubeIcon,
    label: "C2N",
  },
  {
    content: "Dollar to Naira",
    icon: CashIcon,
    label: "D2N",
  },
];
export const Exchange = () => {
  const data = JSON.parse(localStorage.getItem("exchange"))
    ? JSON.parse(localStorage.getItem("exchange"))
    : [];
  const [myOrders, setMyOrders] = useState(data);
  const [successPay, setSuccessPay] = useState(false);

  useEffect(() => {
    if (successPay) {
      setTimeout(() => {
        setSuccessPay(false);
      }, 3000);
    }
  });

  return (
    <>
      <Helmet>
        <title>Exchange | Koins&Kash</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          pb: 3,
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          {successPay && <Alert severity="success">Payment setails sent to your whatsapp</Alert>}
          <Typography color="textPrimary" variant="h4">
            Exchange
          </Typography>

          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              mb: 3,
            }}
          >
            {stats.map((item) => (
              <Grid item key={item.label} md={4} xs={12}>
                <SummaryItem
                  content={item.content}
                  icon={item.icon}
                  button={
                    <Links
                      myOrders={myOrders}
                      setMyOrders={setMyOrders}
                      name={item.content}
                      setSuccessPay={setSuccessPay}
                    />
                  }
                  label={item.label}
                />
              </Grid>
            ))}
          </Box>

          <Card variant="outlined">
            <Typography sx={{ ml: 2, mt: 1 }} color="textPrimary" variant="h4">
              Exchange History
            </Typography>
            <OrdersTable tableHeaders={tableHeaders} orders={myOrders} />
          </Card>
        </Container>
      </Box>
    </>
  );
};
