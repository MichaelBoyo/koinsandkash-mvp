import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Cog as CogIcon } from '../icons/cog';
import { ShoppingCart as ShoppingCartIcon } from '../icons/shopping-cart';
import { User as UserIcon } from '../icons/user';
import { Star as BarChartIcon } from '../icons/star';
const items = [
  {
    href: '/dashboard',
    icon: UserIcon,
    label: 'Dashboard'
  },
  {
    href: '/dashboard/orders',
    icon: ShoppingCartIcon,
    label: 'Orders'
  },
  {
    href: '/dashboard/store',
    icon: BarChartIcon,
    label: 'store'
  },
  {
    href: '/dashboard/settings',
    icon: CogIcon,
    label: 'Settings'
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
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 64px)',
          p: 1,
          top: 64,
          width: 73
        }
      }}
    >
      <List sx={{ width: '100%' }}>
        {items.map(({ href, icon: Icon, label }) => {
          const active = matchPath({ path: href, end: true }, location.pathname);

          return (
            <ListItem
              disablePadding
              component={RouterLink}
              key={href}
              to={href}
              sx={{
                flexDirection: 'column',
                color: active ? 'primary.main' : 'text.secondary',
                px: 2,
                py: 1.5,
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  color: 'inherit'
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: {
                    pb: 0,
                    pt: 1.25
                  },
                  variant: 'caption'
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
