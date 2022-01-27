import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Link,
  Paper,
  Toolbar,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarFilledTwoToneIcon from "@mui/icons-material/DirectionsCarFilledTwoTone";

import { Box } from "@mui/system";

const Layout = ({ children }: any) => {
  return (
    <Container maxWidth={false}>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Link href="/">
          <DirectionsCarFilledTwoToneIcon />
        </Link>
      </Toolbar>
      <Box>{children}</Box>
      <Box sx={{ width: "100%", mt: 3 }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </Container>
  );
};

export default Layout;
