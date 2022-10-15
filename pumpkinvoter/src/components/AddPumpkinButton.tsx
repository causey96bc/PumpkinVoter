import { Button, Input } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import firebasePumpkinStorage from "../utils/firebasePumpkinStorage";

export const AddPumpkinButton = () => {
  const [image, setImage] = useState<File>();
  const addPumpkinToFirebase = () => {
    if (!image) return;
    firebasePumpkinStorage(image);
  };

  return (
    <div>
      <Input
        type="file"
        onChange={(event) => setImage(event.target.files![0])}
      />
      <Button onClick={addPumpkinToFirebase} colorScheme="blue">
        Submit your pumpkin
      </Button>
    </div>
  );
};
