import React from 'react'
import {Box, Center, Divider, Flex, FormControl, FormHelperText, FormLabel, Heading, 
  Input, Text,Button} from '@chakra-ui/react'


const Loginpage = () => {
  const styleheading={
    fonstSize:'24px'
  }
  const styletext={
    fonstSize:'18px'
  }
  return (
    <Flex direction={'column'} padding={'0px 50px  0px 50px '} marginBottom={'-50px'} textAlign={'left'}>
      <Box>
        <Heading  padding={8} margin={'0px auto'} width={'fit-content'}>
          Wellbeing made easier. We've got you.</Heading>
          <Center >
          <Divider orientation='horizontal'  />
        </Center>
      </Box>

      <Flex   id='loginpage' p={8} justifyContent={'space-between'} width={'95%'} margin={'auto'}>
        <Box w={'35%'}>
          <Box mb={4}>
            <Heading fontSize={'17px'}>Discover lululemon Membership</Heading>
            <Text fontSize={'12px'}>One account. Tons of benefits. Endless possibilities.</Text>
          </Box>

          <Box mt={4}>
            <Heading fontSize={'17px'}>Membership benefits include</Heading>
            <Text fontSize={'14px'} m={1} > Early Access to Product Drops </Text>
            <Text fontSize={'14px'}  m={1}>Exchange or Credit on Sale Items</Text>
            <Text fontSize={'14px'}  m={1}>Select Peloton Classes</Text>
            <Text fontSize={'14px'}  m={1}>Membership Events</Text>
            <Text fontSize={'14px'}  m={1}>Receipt-Free Returns</Text>
            <Text fontSize={'14px'}  m={1}>Free Hemming</Text>
            <Text fontSize={'14px'}  m={1}>Learn More</Text>
          </Box>

        </Box>

        <Center height={'320px'}>
          <Divider orientation='vertical' width={'2px'}  />
        </Center>

        <Box w={'35%'}>
          <Heading fontSize={'20px'} mb={2}>Sign in to your member account</Heading>
          <Box>
            <FormControl>
              <FormLabel fontWeight={'400'} fontSize={'13px'}>Email address</FormLabel>
              <Input type='email' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}

              <FormLabel  fontWeight={'400'} fontSize={'13px'}>Password</FormLabel>
              <Input type='password' />

              <FormHelperText  fontWeight={'400'} fontSize={'13px'} textDecoration={'underline'}>Forgot your password?</FormHelperText>
              <Button w={'97%'} m={2} color={'white'} fontWeight={'700'} bgColor={'#8d9196 '}>SIGN IN</Button>
              <Text fontSize={'10px'} m={2} mb={4}>
                By signing in, you agree to the Terms of Use and acknowledge the Privacy Policy.
                California consumers, see our Notice of Financial Incentives.</Text>
            </FormControl>
          </Box>

          <Center >
          <Divider orientation='horizontal' bgColor={'red'}/>
        </Center>


          <Box>
            <Heading fontSize={'20px'} mb={4} textDecoration={'underline'}>
              Create a member account</Heading>
          </Box>
        </Box>
      </Flex>

    </Flex>
  )
}

export default Loginpage
