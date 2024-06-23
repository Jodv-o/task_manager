import { FormControl, FormLabel, Input, Card, CardBody, Center, InputGroup, IconButton, InputRightAddon, Button, Text, Link as ChakraLink} from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { ViewIcon } from "@chakra-ui/icons"
import { useState } from "react"

export default function LoginPage(){
    const [show, setShow] = useState(false)
    const handleClick = ()=>setShow(!show)

    return(
        <Center minH={'lg'}>
            <Card maxW='md'>
                <CardBody>
                    <FormControl>
                        <FormLabel>Email or Username</FormLabel>
                        <Input/>

                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type={show?'text':'password'}/>
                            <InputRightAddon width="15%" justifyContent="center">
                                <IconButton onClick={handleClick} icon={<ViewIcon/>} variant="unstyled"/>
                            </InputRightAddon>
                        </InputGroup>

                        <Button colorScheme="orange" mt="10px">Log In</Button>

                        <Text mt="10px">Do not have an account <ChakraLink as={ReactRouterLink} to='/register' color="blue">Create One</ChakraLink></Text>
                    </FormControl>
                </CardBody>
            </Card>
        </Center>
    )
}
