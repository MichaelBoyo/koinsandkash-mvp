import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
  Popover,
  Card,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const transactionTypeOptions = ["Deposit", "Withdraw"];
const transactionTypeOption2 = [
  "Dollar Savings (BUSD)",
  "US Stocks (equity) - S&P 500",
  "International Commodities (oil, agric, metals) - S&P GSCI",
  "US Real Estate - Various REITs",
  "Nigerian Commodities (gold) - Gold price in ZAR",
  "Nigerian Stocks (equity) - NGX 30",
  "Naira Savings (fixed deposit)",
  "Bitcoin",
  "Ethereum",
];

export default function BasicPopover({ name }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const formik = useFormik({
    initialValues: {
      companyName: "",
      transactionType: "",
      email: "",
      fullName: "",
      jobTitle: "",
      submit: null,
    },
    validationSchema: Yup.object().shape({
      companyName: Yup.string().max(255).required("Company name is required"),
      transactionType: Yup.string()
        .max(255)
        .oneOf(transactionTypeOptions)
        .required("Currency is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      fullName: Yup.string().max(255).required("Amount is required"),
      jobTitle: Yup.string().max(255).required("Phone Number is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        helpers.setStatus({ success: true });
        helpers.setSubmitting(false);
      } catch (err) {
        console.error(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <Typography color="" variant="h6">
          {name}
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Card variant="outlined" sx={{ p: 3 }}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  pb: 3,
                }}
              >
                <div>
                  <div>
                    <Typography color="textSecondary" variant="text">
                      Enter transaction details
                    </Typography>
                  </div>
                </div>
              </Box>
              <Grid container spacing={2} sx={{ maxWidth: 420 }}>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.fullName && formik.errors.fullName
                    )}
                    fullWidth
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                    label="Amount"
                    name="fullName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    variant="outlined"
                    type="number"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.jobTitle && formik.errors.jobTitle
                    )}
                    fullWidth
                    helperText={
                      formik.touched.jobTitle && formik.errors.jobTitle
                    }
                    label="Phone No Call"
                    name="jobTitle"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.jobTitle}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.jobTitle && formik.errors.jobTitle
                    )}
                    fullWidth
                    helperText={
                      formik.touched.jobTitle && formik.errors.jobTitle
                    }
                    label="Phone No Whatsapp"
                    name="jobTitle"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.jobTitle}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.transactionType && formik.errors.transactionType
                    )}
                    fullWidth
                    helperText={
                      formik.touched.transactionType && formik.errors.transactionType
                    }
                    label="Transation type"
                    name="transaction type"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    select
                    value={formik.values.transactionType}
                    variant="outlined"
                  >
                    {transactionTypeOptions.map((transactionTypeOption) => (
                      <MenuItem
                        key={transactionTypeOption}
                        value={transactionTypeOption}
                      >
                        {transactionTypeOption}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.transactionType && formik.errors.transactionType
                    )}
                    fullWidth
                    helperText={
                      formik.touched.transactionType && formik.errors.transactionType
                    }
                    label="Asset"
                    name="assets"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    select
                    value={formik.values.transactionType}
                    variant="outlined"
                  >
                    {transactionTypeOption2.map((transactionTypeOption) => (
                      <MenuItem
                        key={transactionTypeOption}
                        value={transactionTypeOption}
                      >
                        {transactionTypeOption}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {formik.errors.submit && (
                  <Grid item xs={12}>
                    <FormHelperText error>
                      {formik.errors.submit}
                    </FormHelperText>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Typography color="textSecondary" variant="text">
                    Account details will either be sent to your whatsApp within
                    10 minutes. Kindly ensure you make the transfer within 10
                    minutes once you receive it. The account expires.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Make Payment
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
        </Card>
      </Popover>
    </div>
  );
}
