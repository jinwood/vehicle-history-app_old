import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";

interface Props extends AppBarProps {
  open?: boolean;
}

export default function AppBar() {
  return <MuiAppBar></MuiAppBar>;
}
