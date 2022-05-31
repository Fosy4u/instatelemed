import React from "react";
import Logo from "./utils/logo.JPG";
import { Box, Stack } from "grommet";

const LogoBox = () => (
  <Stack anchor="top-left" alignSelf="end">
    <img src={Logo} width="20%" />
  </Stack>
);

export { LogoBox };
