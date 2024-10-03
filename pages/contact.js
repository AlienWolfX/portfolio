import { useState } from 'react'
import { Container, Heading, Input, FormControl, FormLabel, Textarea, Button, useColorModeValue, useToast, Text, SimpleGrid, Box, Icon } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const Contact = () => {
    const inputBg = useColorModeValue('white', 'gray.700')
    const inputColor = useColorModeValue('black', 'white')
    const inputBorderColor = useColorModeValue('gray.300', 'gray.600')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate sending the message
        const isSuccess = true // Replace with actual success condition

        if (isSuccess) {
            toast({
                title: "Message sent.",
                description: "Your message has been sent successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            // Clear the form fields
            setName('')
            setEmail('')
            setMessage('')
        } else {
            toast({
                title: "Error.",
                description: "There was an error sending your message.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
            })
        }
    }

    return (
        <Layout title="Contact">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Contact Me
                </Heading>

                <SimpleGrid columns={2} spacing={2}>
                    <Box display="flex" alignItems="center">
                        <Icon as={FaMapMarkerAlt} w={4} h={4} mr={2} />
                        <Text fontSize="sm">Butuan City, Philippines</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Icon as={FaPhone} w={4} h={4} mr={2} />
                        <Text fontSize="sm">(+63) 9124614430</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Icon as={FaEnvelope} w={4} h={4} mr={2} />
                        <Text fontSize="sm">allengabrielle.cruiz@carsu.edu.ph</Text>
                    </Box>
                </SimpleGrid>

                <br />

                <form onSubmit={handleSubmit}>
                    <FormControl id="name" mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input 
                            placeholder='Your name' 
                            bg={inputBg} 
                            color={inputColor} 
                            borderColor={inputBorderColor} 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type='email' 
                            placeholder='Your email' 
                            bg={inputBg} 
                            color={inputColor} 
                            borderColor={inputBorderColor} 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="message" mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea 
                            placeholder='Your message' 
                            bg={inputBg} 
                            color={inputColor} 
                            borderColor={inputBorderColor} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="teal">Submit</Button>
                </form>
            </Container>
        </Layout>
    )
}

export default Contact 
export { getServerSideProps } from '../components/chakra'