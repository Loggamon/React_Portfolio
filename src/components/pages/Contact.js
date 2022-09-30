import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
  const form = useRef();

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

    emailjs
      .sendForm(
        "service_yspira8",
        "template_6swzpt9",
        form.current,
        "30osIDRqP6-cv7gFe"
      )
      .then(
        (result) => {
          console.log(result.status, result.text);
          console.log("SENT!");
          alert(`Thank you, ${name}!`);
        },
        (error) => {
          console.log(error.text);
        }
      );

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
        <span>Please fill out the form down below...</span>
        <form ref={form}>
          <SimpleGrid spacing="20px">
            <Textarea
              value={name}
              name="name"
              onChange={handleInputChange}
              id="name"
              type="text"
              placeholder="name"
              variant="filled"
            />
            <Textarea
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="email"
              placeholder="email"
              variant="filled"
            />
            <Textarea
              value={message}
              name="text"
              onChange={handleInputChange}
              type="text"
              id="message"
              placeholder="message"
              variant="filled"
            />
            <Button
              bg="#0d0221"
              color="#c2e7d9"
              _hover={{ bg: "#c2e7d9", color: "#0d0221" }}
              type="submit"
              id="emailButton"
              value="Send"
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
