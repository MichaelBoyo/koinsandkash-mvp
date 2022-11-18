import { useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Card, Container, Divider, Typography } from "@mui/material";

import { OrdersTable } from "../components/orders-table";
import { SummaryItem } from "../components/reports/summary-item";
import { Grid } from "@mui/material";
import VendorPay from "./VendorPay";
const tableHeaders = ["Order ID", "Date", "Amount ($)", "Status"];
const stats = [
  {
    content: "Pay vendor",
  },
];
export const Vendor = () => {
  const data = JSON.parse(localStorage.getItem("vendor"))
    ? JSON.parse(localStorage.getItem("vendor"))
    : [];
  const [myOrders, setMyOrders] = useState(data);

  return (
    <>
      <Helmet>
        <title>Pay A Vendor | Koins&Kash</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          pb: 3,
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
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
                  label={item.label}
                  button={
                    <VendorPay
                      myOrders={myOrders}
                      setMyOrders={setMyOrders}
                      name={item.content}
                    />
                  }
                />
              </Grid>
            ))}
          </Box>

          <Card variant="outlined">
            <Typography sx={{ ml: 2, mt: 1 }} color="textPrimary" variant="h4">
              Payment History
            </Typography>

            <Divider />
            <OrdersTable tableHeaders={tableHeaders} orders={myOrders} />
          </Card>
        </Container>
      </Box>
    </>
  );
};
