import React, { useState } from "react";
import { Box, Button, Text, TextInput, FormField, Card } from "grommet";
import {
  Form,
  PasswordInputField,
  TextInputField,
  validators,
} from "grommet-controls";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// import "./modal.css";

const FormBox = ({ style, closeModal }) => {
  const [value, setValue] = useState({});

  return (
    <Modal
      open={true}
      classNames="modalAnimationIn modalAnimationOut overlayAnimationIn overlayAnimationOut"
      animationDuration={3000}
      center={true}
      onClose={closeModal}
    >
      <Form
        onSubmit={() => console.log("onSubmit")}
        pad={{
          horizontal: "small",
        }}
      >
        <TextInputField
          label="Name"
          name="Name"
          validation={[validators.required()]}
        />

        <TextInputField
          label="Email"
          name="Email"
          validation={[validators.required(), validators.email()]}
        />
        <Box pad="small">
          <Button type="submit" label="Submit" primary color="#1e90ff" />
        </Box>
      </Form>
    </Modal>
  );
};

export default FormBox;
