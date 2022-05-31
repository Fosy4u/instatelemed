import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Box, Heading, Paragraph, Text } from "grommet";

export const StyledHeading = styled(Heading)`
  font-weight: 200;
`;

const Description = ({ size, ...rest }) => (
  <div style={{ textAlign: "center" }}>
    <Heading
      alignSelf="center"
      responsive="true"
      textAlign="center"
      style={{ margin: "auto" }}
      level="2"
    >
      {" "}
      Bringing quality healthcare to your comfort zone
    </Heading>
    <Text margin="none" responsive="true">
      <span style={{ color: "#1e90ff" }}>Healthcare</span> embracing the power
      of <span style={{ color: "#1e90ff" }}>Technology</span> . Let the
      countdown begin!
    </Text>
  </div>
);

Description.propTypes = {
  size: PropTypes.string.isRequired,
};

export { Description };
