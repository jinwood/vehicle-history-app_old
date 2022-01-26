import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import NavBar from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <Container maxWidth="lg">
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Vehicle History
        </Typography>
      </Toolbar>
      <div className="w-full flex flex-row  flex-wrap  py-4 flex-grow h-full mb-5">
        <main role="main" className="w-full flex-grow pt-1 px-3 ">
          {children}
        </main>
      </div>
      {/* sticky footer */}
      <footer className="bg-gray-900 text-white p-4 text-center w-full fixed bottom-0">
        <p>Footer</p>
      </footer>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Container>
  );
};

export default Layout;
