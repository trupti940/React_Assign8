import { Box, Flex, Button, Text } from '@chakra-ui/react';

function App() {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
    
      <Flex as="nav" justify="space-between" align="center" wrap="wrap" p={4} bg="teal.500" color="white">
        <Text fontSize="xl" fontWeight="bold">My Responsive App</Text>
        <Box>
          <Button as="a" href="#" mr={4}>Home</Button>
          <Button as="a" href="#">About</Button>
        </Box>
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} mt={8}>
       
        <Box flex="1" p={4} bg="gray.100" borderRadius="md" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
          <Text fontSize="xl" mb={4}>Card 1</Text>
          <Button colorScheme="teal">Read More</Button>
        </Box>

        
        <Box flex="1" p={4} bg="gray.100" borderRadius="md">
          <Text fontSize="xl" mb={4}>Card 2</Text>
          <Button colorScheme="teal">Read More</Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;






