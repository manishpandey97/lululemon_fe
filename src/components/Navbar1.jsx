import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Link, useColorModeValue, Flex, Spacer, Box, Icon, } from '@chakra-ui/react';
import { CiLocationOn,CiGift ,CiCircleQuestion, CiGlobe} from "react-icons/ci";

const Navbar1 = () => {
  const linkColor = useColorModeValue('black.500', 'black.600');

  const links = [
    { to: '/storelocater', label: 
    <Flex alignItems={'center'}> <Icon as={CiLocationOn} fontSize={'15px'}  m={1}/> Store Locatore </Flex>},
    { to: '/giftcards', label: <Flex alignItems={'center'}>
       <Icon as={CiGift} fontSize={'15px'}  m={1}/> Gift Cards </Flex>  },
    { to: '/gethelp', label: <Flex alignItems={'center'}>
    <Icon as={CiCircleQuestion} fontSize={'15px'}  m={1}/>
     Get Help </Flex> },
    { to: '/country', label: <Flex alignItems={'center'}>
    <Icon as={ CiGlobe} fontSize={'15px'}  m={1}/>
     USA </Flex> },
  ]


  return (
      <Flex minWidth='max-content' alignItems='center' gap='1px' padding={'0px 15px'}
       fontSize={'10px'} bgColor={'rgb(250,250,250)'}>
       <Spacer/>
          {links.map((link,index) => {
          return (
            <Box p={1} m={1} mt={0} mb={0}  fontWeight={'400'}>
              <Link key={index}  as={RouterLink}  to={link.to} color={linkColor}
                _hover={{ textDecoration: 'underline',color:'crimson' }}>
                {link.label}
              </Link>
            </Box>
          )
        })}  
       
    
        

       
        {/* {links1.map((link,index) => {
          return (
            <Box p={1} m={1} >
              <Link key={index}  as={RouterLink}  to={link.to} color={linkColor}
                _hover={{ textDecoration: 'underline' }}>
                {link.label}
              </Link>
            </Box>
          )
        })} */}
         

      </Flex>
  )
}

export default Navbar1
