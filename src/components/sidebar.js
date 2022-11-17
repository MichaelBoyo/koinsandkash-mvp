import { Link as RouterLink, matchPath, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Cog as CogIcon } from "../icons/cog";
import { ShoppingCart as ShoppingCartIcon } from "../icons/shopping-cart";
import { User as UserIcon } from "../icons/user";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SellIcon from "@mui/icons-material/Sell";

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
const items = [
  {
    href: "/dashboard",
    icon: UserIcon,
    label: "Dashboard",
  },
  {
    href: "/dashboard/assets",
    icon: BusinessCenterIcon,
    label: "Financial Assets",
  },
  {
    href: "/dashboard/transfers",
    icon: PriceChangeIcon,
    label: 'Global Transfers',
  },
  {
    href: "/dashboard/exchange",
    icon: CurrencyExchangeIcon,
    label: "Exchange Currency",
  },
  {
    href: "/dashboard/vendors",
    icon: SellIcon,
    label: "Vendors",
  },

  {
    href: "/dashboard/credit",
    icon: CardGiftcardIcon,
    label: "Credit",
  },

  {
    href: "/dashboard/settings",
    icon: CogIcon,
    label: "Settings",
  },
  {
    href: "/dashboard/learning",
    icon: UserIcon,
    label: "Discover..",
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Drawer
      open
      sx={{ zIndex: 1000 }}
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: "background.paper",
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 64px)",
          p: 1,
          top: 64,
          width: 73,
        },
      }}
    >
      <List sx={{ width: "100%" }}>
        {items.map(({ href, icon: Icon, label }) => {
          const active = matchPath(
            { path: href, end: true },
            location.pathname
          );

          return (
            <ListItem
              disablePadding
              component={RouterLink}
              key={href}
              to={href}
              sx={{
                flexDirection: "column",
                color: active ? "primary.main" : "text.secondary",
                px: 2,
                py: 1.5,
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  color: "inherit",
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: {
                    pb: 0,
                    pt: 1.25,
                  },
                  variant: "caption",
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
