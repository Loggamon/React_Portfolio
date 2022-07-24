import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Button,
  Textarea,
} from "@chakra-ui/react";
import "../pages/pageStyles/pageStyles.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (!name) {
      setErrorMessage("Please leave a name");
      return;
    }
    if (!message) {
      setErrorMessage("Please leave a response");
      return;
    }
    alert(`Thank you, ${name}!`);

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Box>
      <Text className="heading">
        <h1>Contact Me</h1>
      </Text>

      <Container p="20px" align="center">
        <p>Please fill out the form down below...</p>
        <form>
          <SimpleGrid spacing="20px">
            <Textarea
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
              variant="filled"
            />
            <Textarea
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="email"
              variant="filled"
            />
            <Textarea
              value={message}
              name="text"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
              variant="filled"
            />
            <Button
              bg="#0d0221"
              color="#c2e7d9"
              _hover={{ bg: "#c2e7d9", color: "#0d0221" }}
              type="button"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </SimpleGrid>
        </form>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <p>...and I will get back to you!</p>
      </Container>
    </Box>
  );
}
