import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  TablePagination,
  Typography,
} from "@mui/material";
import { OrdersFilter } from "../components/orders/orders-filter";
import { OrdersTable } from "../components/orders-table";
import { orders } from "../__mocks__/orders";
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
  const [mode, setMode] = useState("table");
  const [query, setQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleModeChange = (event, newMode) => {
    if (newMode) {
      setMode(newMode);
    }
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
                  button={<SavingsLink name={item.content} />}
                  label={item.label}
                />
              </Grid>
            ))}
          </Box>

          <Card variant="outlined">
            <Typography sx={{ ml: 2, mt: 1 }} color="textPrimary" variant="h4">
              Savings and Investment History
            </Typography>
            <OrdersFilter
              mode={mode}
              onModeChange={handleModeChange}
              onQueryChange={handleQueryChange}
              query={query}
            />

            <Divider />
            <OrdersTable tableHeaders={tableHeaders} orders={orders} />
            <Divider />
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={orders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
      </Box>
    </>
  );
};
