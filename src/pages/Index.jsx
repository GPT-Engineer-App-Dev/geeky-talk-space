import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const categories = [
  { title: "General Discussion", description: "Talk about anything tech-related." },
  { title: "Programming", description: "Discuss coding, algorithms, and best practices." },
  { title: "Hardware", description: "Share insights on the latest hardware and gadgets." },
  { title: "Networking", description: "Discuss networking technologies and solutions." },
  { title: "Security", description: "Talk about cybersecurity, vulnerabilities, and protection." },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">Tech Forum</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="/">Home</Link>
          <Link href="#categories">Categories</Link>
          <Link href="#about">About</Link>
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" id="categories">Discussion Categories</Heading>
          {categories.map((category, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{category.title}</Heading>
              <Text mt={4}>{category.description}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <VStack spacing={4}>
          <Text>Contact us at: contact@techforum.com</Text>
          <HStack spacing={4}>
            <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
            <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
            <Link href="https://linkedin.com" isExternal><FaLinkedin /></Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;