import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex, Heading } from "@chakra-ui/react"


function App() {

  return (
    <Flex p="10px" justifyContent="space-between" boxShadow="md">
      <Heading fontSize="30px">Task Manager</Heading>
      <Button rightIcon={<ArrowForwardIcon/>} colorScheme="orange" onClick={()=>window.location.href="/register"}>Get Started</Button>
    </Flex>
  )
}

export default App
