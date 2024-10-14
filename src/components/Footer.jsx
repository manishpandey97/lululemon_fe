import React from 'react'
import { Grid, GridItem, Box, Text, Heading, Flex, Icon, Spacer, Divider,Center } from '@chakra-ui/react'
import { FaPinterestP, FaYoutube, FaFacebookF, } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <Box marginTop={'50px'} padding={'0px 20px'}>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} alignItems={'top'}>
        <GridItem w='100%' textAlign={'left'} >
          <Box>
            <Heading fontSize={'10px'} mb={3}>MY ACCOUNT</Heading>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Membership Program</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Sign In</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Register</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Order Status</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Returns</Text>
          </Box>
        </GridItem>
        <GridItem w='100%' textAlign={'left'}>
          <Box>
            <Heading fontSize={'10px'} mb={3}>HELP</Heading>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>FAQ</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Accessibility Statement</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Services</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Ordering</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Shipping Policy</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Returns</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Redeem Gift Cards</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Sizing</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Our Products</Text>
          </Box>
        </GridItem>
        <GridItem w='100%' textAlign={'left'}>
          <Box>
            <Heading fontSize={'10px'} mb={3}>ABOUT US</Heading>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Our Business</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Media</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Investors</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Strategic Sales</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Affiliates and Creators</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Sweat Collective</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>FURTHER</Text>
          </Box>
        </GridItem>
        <GridItem w='100%' textAlign={'left'}>
          <Box>
            <Heading fontSize={'10px'} mb={3}>CONTACT US</Heading>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Live Chat</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Email Sign Up</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Contact Us</Text>
          </Box>
        </GridItem>
        <GridItem w='100%' textAlign={'left'}>
          <Box>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>CAREERS</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>COMMUNITY</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>LIKE NEW</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>SUSTAINABILITY</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>SOCIAL IMPACT</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>DIVERSITY AND INCLUSION</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>LULULEMON APPS</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>SITEMAP </Heading>
          </Box>
        </GridItem>
        <GridItem w='100%' textAlign={'left'}>
          <Box>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>GIFT CARDS</Heading>
            <Heading fontSize={'10px'} mb={3} opacity={0.8}>STORE LOCATOR</Heading>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Privacy Policy</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>Your Privacy ChoicesCalifornia Consumer Privacy
              Act (CCPA) Opt-Out Icon</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>California Privacy Rights</Text>
            <Text fontSize={'12px'} mb={1} opacity={0.8}>California Transparency Act</Text>
          </Box>
        </GridItem>

        <GridItem w='100%' textAlign={'left'}>
          <Flex alignItems={'top'} justify={'space-around'}>
            <Icon as={FaTwitter} fontSize={'17px'} opacity={0.8} />
            <Icon as={FaPinterestP} fontSize={'17px'} opacity={0.8} />
            <Icon as={FaYoutube} fontSize={'17px'} opacity={0.8} />
            <Icon as={FaFacebookF} fontSize={'17px'} opacity={0.8} />
            <Icon as={IoLogoInstagram} fontSize={'17px'} opacity={0.8} />
          </Flex>
        </GridItem>
      </Grid>
      <Divider bgColor={'grey'}   h={'0.5px'}/>
      <Flex fontSize={'10px'} opacity={'0.8'} p={2}>
        <Box p='2'>© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7</Box>
        <Spacer />
        <Box p='2' >Privacy Policy</Box>
        <Center height='30px'>
          <Divider orientation='vertical' bgColor={'grey'}   w={'1px'}/>
        </Center>
        <Box p='2' >Terms of Use</Box>
      </Flex>
    </Box>
  )
}

export default Footer
