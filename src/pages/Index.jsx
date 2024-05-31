import { Container, Text, VStack, Heading, Button, IconButton, HStack, Box, Image } from "@chakra-ui/react";
import { FaChartLine, FaMobileAlt, FaLock, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to StockMaster
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your Ultimate Finance App for Stocks Analysis
        </Text>
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1554260570-e9689a3418b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGFuYWx5c2lzfGVufDB8fHx8MTcxNzEyMzA0MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Stock Market Analysis" borderRadius="md" />
        </Box>
        <HStack spacing={4} justify="center">
          <IconButton aria-label="Stock Analysis" icon={<FaChartLine />} size="lg" />
          <IconButton aria-label="Mobile Friendly" icon={<FaMobileAlt />} size="lg" />
          <IconButton aria-label="Secure" icon={<FaLock />} size="lg" />
          <IconButton aria-label="Rocket Performance" icon={<FaRocket />} size="lg" />
        </HStack>
        <VStack spacing={4} align="stretch">
          <Box>
            <Heading as="h2" size="lg">
              Real-Time Stock Analysis
            </Heading>
            <Text>Get the latest updates and insights on stock market trends. Our app provides real-time data to help you make informed decisions.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Mobile Friendly
            </Heading>
            <Text>Access your stock portfolio and analysis on the go. Our app is optimized for mobile devices, ensuring you never miss an update.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Secure and Reliable
            </Heading>
            <Text>Your data is safe with us. We use top-notch security measures to protect your information and ensure reliability.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Rocket Performance
            </Heading>
            <Text>Experience lightning-fast performance with our app. Analyze stocks and make decisions quickly and efficiently.</Text>
          </Box>
        </VStack>
        <Box textAlign="center">
          <Button colorScheme="teal" size="lg">
            Get Started Now
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
