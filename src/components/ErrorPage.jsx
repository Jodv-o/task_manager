import { useRouteError } from "react-router-dom";
import { Flex, Heading, Text } from "@chakra-ui/react";

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
    </Flex>
  );
}