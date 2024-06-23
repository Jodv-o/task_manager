import { FormControl, FormLabel, Input, Card, CardBody, Center, InputGroup, IconButton, InputRightAddon, Button, Text, Link as ChakraLink} from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { ViewIcon } from "@chakra-ui/icons"

export default function RegisterPage(){
    const handleClick = (e)=>{
        let inputElement = e.target.closest("div.chakra-input__group").firstElementChild
        inputElement.setAttribute("type", inputElement.getAttribute("type")==="password"? "text": "password")
    }

    return(
        <Center minH={'lg'}>
            <Card maxW='md'>
                <CardBody>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input/>

                        <FormLabel>Username</FormLabel>
                        <Input/>

                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type="password"/>
                            <InputRightAddon width="15%" justifyContent="center">
                                <IconButton onClick={handleClick} icon={<ViewIcon/>} variant="unstyled"/>
                            </InputRightAddon>
                        </InputGroup>

                        <FormLabel>Repeat Password</FormLabel>
                        <InputGroup>
                            <Input type="password"/>
                            <InputRightAddon width="15%" justifyContent="center">
                                <IconButton onClick={handleClick} icon={<ViewIcon/>} variant="unstyled"/>
                            </InputRightAddon>
                        </InputGroup>

                        <Button colorScheme="orange" mt="10px">Sign Up</Button>

                        <Text mt="10px">Alredy have an account <ChakraLink as={ReactRouterLink} to='/login' color="blue">Sign In</ChakraLink></Text>
                    </FormControl>
                </CardBody>
            </Card>
        </Center>
    )
}
