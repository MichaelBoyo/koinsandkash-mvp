import { useState } from "react";
import { Helmet } from "react-helmet";
import { Box, Card, Container, Typography } from "@mui/material";

import { OrdersTable } from "../components/orders-table";

import { Cube as CubeIcon } from "../icons/cube";
import { SummaryItem } from "../components/reports/summary-item";
import { Grid } from "@mui/material";
import { Cash as CashIcon } from "../icons/cash";
import SavingsLink from "./SavingsLink";
const tableHeaders = ["Order ID", "Date", "Amount ($)", "Status"];
const stats = [
  {
    content: "Investment",
    icon: CubeIcon,
    label: "INV",
  },
  {
    content: "Savings",
    icon: CashIcon,
    label: "SVN",
  },
];
export const Assets = () => {
  const [myOrders, setMyOrders] = useState([]);

  return (
    <>
      <Helmet>
        <title>Financial Assets | Koins&Kash</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          pb: 3,
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography color="textPrimary" variant="h4">
            Financial Assets
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
                    <SavingsLink
                      myOrders={myOrders}
                      setMyOrders={setMyOrders}
                      name={item.content}
                    />
                  }
                  label={item.label}
                />
              </Grid>
            ))}
          </Box>

          <Card variant="outlined">
            <Typography sx={{ ml: 2, mt: 1 }} color="textPrimary" variant="h4">
              Savings and Investment History
            </Typography>

            <OrdersTable tableHeaders={tableHeaders} orders={myOrders} />
          </Card>
        </Container>
      </Box>
    </>
  );
};
