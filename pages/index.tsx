import { Box, Button, Center, Container, Flex, Heading, Text, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import vercelBadge from "../public/powered-by-vercel.svg"

const Home: NextPage = () => {
  const toast = useToast()
  const primary = useColorModeValue("blue.500", "blue.200")

  return (
    <>
      <Container>
        <Center h="100vh">
          <VStack>
            <Text fontSize="lg" fontWeight="bold" color={primary}>Glynhack</Text>
            <Heading size="2xl">Code in a community</Heading>
            <Text textAlign="center" pt={4} pb={6}>Don&apos;t fight those errors alone. Bang your face on a keyboard in public, because that will fix all your problems.</Text>
            <a href="http://glynhack.vercel.app/">
              <Button colorScheme='blue' size="lg">Join the waitlist</Button>
            </a>
          </VStack>
          <Box pos="absolute" bottom={5}>
            <a target="_blank" href="http://vercel.com/?utm_source=glynhack&utm_campaign=oss">
              <Image src={vercelBadge} />
            </a>
          </Box>
        </Center>
      </Container>
    </>
  )
}

export default Home
