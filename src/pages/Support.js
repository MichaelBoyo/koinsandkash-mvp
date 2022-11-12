import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { EmojiSadOutlined as EmojiSadIcon } from '../icons/emoji-sad-outlined';

export const Support = () => (
  <Box sx={{ backgroundColor: 'background.default' }}>
    <Container
      maxWidth="md"
      sx={{
        px: 5,
        py: 14,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <EmojiSadIcon sx={{ color: 'text.secondary' }} />
      <Typography
        align="center"
        color="textPrimary"
        sx={{ my: 2 }}
        variant="h3"
      >
        Coming soon !
      </Typography>
      <Typography
        align="center"
        color="textSecondary"
        variant="body2"
      >
        Our engineers are still working on this page.
      </Typography>
      <Button
        color="primary"
        component={RouterLink}
        sx={{ mt: 2 }}
        to="/"
        variant="text"
      >
        Take me Back
      </Button>
    </Container>
  </Box>
);
