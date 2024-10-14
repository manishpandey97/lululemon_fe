import React from 'react'
import { HStack, Icon, Input } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import { Link, useColorModeValue, Stack, Flex, Spacer, Box,Image } from '@chakra-ui/react';
import { RxAvatar } from 'react-icons/rx'
import { SlBag } from 'react-icons/sl'
import { FaRegHeart } from "react-icons/fa"
import { MdSearch } from "react-icons/md";
import Logopng from '../assets/logo.png'
const Navbar2 = () => {
  const linkColor = useColorModeValue('black.500', 'black.600');
  const links = [
    { to: '/', label: <Box> <Image src={Logopng}  height={'25px'}/></Box> },
    { to: '/women', label: 'WOMEN' },
    { to: '/men', label: 'MEN' },
    { to: '/accessories', label: 'ACCESSORIES' },
    { to: '/shoes', label: 'SHOES' },
    { to: '/likenew', label: 'LIKENEW' },
  ]

  const links1 = [
    { to: '/searchbar', label: 
    <Flex alignItems='center' gap='1' border={'1px solid black'} 
    padding={'10px 5px'} width={'20vw'}  borderRadius={'2px'} >
       <Icon as={MdSearch} fontSize={'17px'} /> 
       <input border={'none'} outline={'none'} placeholder='Search' p={2}  /> </Flex> },
    { to: '/login', label: <Flex alignItems={'center'}>
       <Icon as={RxAvatar} fontSize={'20px'}  m={1}/> Sign In  </Flex>  },
    { to: '/likeItem', label: <Icon as={FaRegHeart} fontSize={'17px'}/> },
    { to: '/cart', label: <Icon as={SlBag} fontSize={'17px'}/> },
  ]


  return (
      <Flex minWidth='max-content' alignItems='center' gap='2' justifyContent={'space-between'} padding={'0px 0px'} 
       fontSize={'10px'} bgColor={'white'}>
          {links.map((link,index) => {
          return (
            <Box p={1} fontWeight={'700'} m={3} >
              <Link key={index}  as={RouterLink}  to={link.to} color={linkColor}
                _hover={{ textDecoration: 'underline',color:'crimson' }}>
                {link.label}
              </Link>
            </Box>
          )
        })}  
       
    
        <Spacer/>

       
        {links1.map((link,index) => {
          return (
            <Box p={1} m={1}  padding={'0px 15px'}>
              <Link key={index}  as={RouterLink}  to={link.to} color={linkColor}
                _hover={{ textDecoration: 'underline' }}>
                {link.label}
              </Link>
            </Box>
          )
        })}
         

      </Flex>
  )
}

export default Navbar2
