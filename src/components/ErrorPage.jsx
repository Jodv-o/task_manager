import { useRouteError } from "react-router-dom";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} minH={"95dvh"}>
      <Heading>Oops!</Heading>
      <Text fontSize="24px">Sorry, an unexpected error has occurred.</Text>
      <Text fontSize="24px">
        <i>{error.statusText || error.message}</i>
      </Text>
      <Button colorScheme="orange" margin={"20px"} leftIcon={<ArrowBackIcon/>} onClick={()=>window.location.href="/"}>Return to home</Button>
    </Flex>
  );
}