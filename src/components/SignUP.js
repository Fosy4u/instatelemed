import React, { useState } from "react";
import { Box, Button, Text, TextInput, FormField, Card } from "grommet";
import FormBox from "./Form";

const SignUP = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Box
        direction="column"
        width="large"
        justify="center"
        alignSelf="center"
        style={{ margin: "auto", color: "black" }}
      >
        {!showModal && (
          <Box style={{ margin: "auto" }}>
            <Box
              direction="row"
              align="center"
              width="medium"
              // setopacity
            ></Box>
            <Text
              size="small"
              color="brand"
              weight="bold"
              textAlign="center"
              style={{ margin: "auto", color: "black", paddingBottom: "5%" }}
            >
              Be the first to know when we launch?
            </Text>
            <Button
              onClick={() => {
                setShowModal(true);
              }}
              style={{ width: "40%", margin: "auto" }}
            >
              <Box
                round="xlarge"
                background="#1e90ff"
                pad={{ vertical: "small", horizontal: "medium" }}
              >
                <Text size="small" color="" weight="bold" textAlign="center">
                  click me
                </Text>
              </Box>
            </Button>
          </Box>
        )}
      </Box>

      {showModal && (
        <FormBox
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default SignUP;
