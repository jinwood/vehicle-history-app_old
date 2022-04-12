import Container from "@mui/material/Container";
import React, { ReactElement, ReactNode } from "react";

export default function PageContent({ children }: { children: ReactNode }) {
  return <Container sx={{ marginTop: "20px" }}>{children}</Container>;
}
