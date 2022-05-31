import React from "react";
import { Anchor, Box, Text, ResponsiveContext } from "grommet";
import { LogoBox } from "./LogoBox";
import { SocialMedia } from "./SocialMedia";

const NavHeader = () => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box direction="row" justify="between" margin="none">
        <Anchor href="/" icon={<LogoBox />} color="black" />
        <SocialMedia />
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { NavHeader };
