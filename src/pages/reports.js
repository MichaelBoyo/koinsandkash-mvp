import { Helmet } from "react-helmet";
import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { SummaryItem } from "../components/reports/summary-item";

import { OrdersTable } from "../components/orders-table";
import { Cube as CubeIcon } from "../icons/cube";
import {PerformanceIndicators} from "../components/reports/performance-indicators";
import { Cash as CashIcon } from "../icons/cash";
import { latestOrders } from "../__mocks__/reports";

const stats = [
  {
    content: "₦ 3,450,780",
    icon: CubeIcon,
    label: "Genesis Fund",
  },

  {
    content: "₦ 5,000,634",
    icon: CashIcon,
    label: "Transactions",
  },
];

export const Reports = () => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
   const user = JSON.parse(localStorage.getItem("user"));
   setName(user?.displayName);
  }, []);
  return (
    <>
      <Helmet>
        <title>Reports | Koins&Kash Dashboard</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          pb: 3,
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="textPrimary" variant="h4">
                Welcome back, {name}
              </Typography>
            </Grid>
            {stats.map((item) => (
              <Grid item key={item.label} md={4} xs={12}>
                <SummaryItem
                  content={item.content}
                  icon={item.icon}
                  label={item.label}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <PerformanceIndicators />
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardHeader title="Latest Orders" />
                <Divider />
                <OrdersTable orders={latestOrders} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
