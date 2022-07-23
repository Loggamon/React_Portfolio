import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

import {
  Container,
  Text,
  SimpleGrid,
  Button,
  Textarea,
} from "@chakra-ui/react";

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
    <React.Fragment>
      <Text fontSize="50px">
        <h1>Contact Me...</h1>
      </Text>

      <Container p="20px">
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
            <Button type="button" onClick={handleFormSubmit}>
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
    </React.Fragment>
  );
}
