import { Container, Link, Toolbar } from "@mui/material";
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
      <Box sx={{ height: 66, width: "100%" }}></Box>
    </Container>
  );
};

export default Layout;
