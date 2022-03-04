import { Box, Center, Container, Heading, Text, VStack } from '@chakra-ui/react'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <Container>
      <Center h="100vh">
        <VStack>
          <Heading size="4xl">Glyn Hack</Heading>
          <Text fontSize="xl">Learn to code with Glyn Students</Text>
        </VStack>
      </Center>
    </Container>
    </>
  )
}

export default Home
