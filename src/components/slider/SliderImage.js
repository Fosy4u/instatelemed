import React from "react";
import PropTypes from "prop-types";
import { Box, Image, ResponsiveContext, Stack, Text } from "grommet";

const SliderImage = ({ src }) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Stack anchor="bottom">
        <Box
          round="xlarge"
          overflow="hidden"
          align="center"
          margin="xsmall"
          height="small"
        >
          <Image
            src={src}
            style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
          />
        </Box>
      </Stack>
    )}
  </ResponsiveContext.Consumer>
);

SliderImage.propTypes = {
  name: PropTypes.array,
  score: PropTypes.array,
  src: PropTypes.string,
};

export { SliderImage };
