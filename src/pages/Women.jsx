import React, { useState } from 'react'
import {
  Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow,
  PopoverCloseButton, PopoverAnchor, Button, RadioGroup, useBoolean, HStack, Radio, Input, Spacer,
  Flex, Box, UnorderedList, ListItem, Heading, Text, Grid, GridItem,
  Image,
} from '@chakra-ui/react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Stroyimg from '../assets/story.webp'

const Women = () => {
  const [isEditing, setIsEditing] = useBoolean()
  const [color, setColor] = useState('red')

  return (
    <>
      <Popover trigger="hover" placement="bottom"
        isOpen={isEditing}
        onOpen={setIsEditing.on}
        onClose={setIsEditing.off}
        closeOnBlur={false}
        isLazy
        lazyBehavior='keepMounted'
      >
        <HStack>
          {/* <PopoverAnchor>
            <Input
              color={color}
              w='auto'
              display='inline-flex'
              isDisabled={!isEditing}
              defaultValue='Popover Anchor'
            />
          </PopoverAnchor> */}

          <PopoverTrigger>
            <Button colorScheme='pink'> Women</Button>
          </PopoverTrigger>
        </HStack>

        <PopoverContent textAlign={'left'} width={'97vw'}>

          <PopoverBody width={'90vw'}>
            <Flex justifyContent={'space-between'} gap={'10px'} >

              <Box width={'15vw'}>
                <UnorderedList styleType="none">
                  <ListItem fontSize={'11px'} mt={2}  >What's New</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Bestsellers</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Align Shop</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Travel Clothes</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Matching Sets</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Summer Whites</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Tennis and Golf Clothes</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Summer Clothes</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Plus Size Clothes</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >We Made Too Much</ListItem>
                </UnorderedList>
              </Box>

              <Spacer orientation='Vertical' width={'2px'} bgColor={'grey'} height={'100px'} />

              <Box>
                <Heading fontSize={'11px'} m={1} ml={4}>WOMEN'S CLOTHES</Heading>
                <Grid gridTemplateColumns={`repeat(2, 1fr)`} width={'40vw'} >
                  <GridItem>
                    <UnorderedList styleType="none" >
                      <ListItem fontSize={'11px'} mt={2}  >Button Down Shirts</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Coats & Jackets</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Half Zip Sweatshirts</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Hoodies & Sweatshirts</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Matching Sets</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Summer Whites</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Tennis and Golf Clothes</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Joggers</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Pants</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Polo Shirts</ListItem>
                      <ListItem fontSize={'11px'} mt={2}  >Shirts/ListItem</ListItem>
                    </UnorderedList>
                  </GridItem>
                  <GridItem><UnorderedList styleType="none">
                    <ListItem fontSize={'11px'} mt={2}  >What's New</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Bestsellers</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Align Shop</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Travel Clothes</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Matching Sets</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Summer Whites</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Tennis and Golf Clothes</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Summer Clothes</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >Plus Size Clothes</ListItem>
                    <ListItem fontSize={'11px'} mt={2}  >We Made Too Much</ListItem>
                  </UnorderedList></GridItem>
                </Grid>
              </Box>

              <Box width={'15vw'}>
                <Heading fontSize={'12px'} m={3.5} ml={2}>ACCESSORIES</Heading>
                <UnorderedList styleType="none" >
                  <ListItem fontSize={'11px'} mt={2}  >  Backpacks</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  > Bags</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >  Belt Bags</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Crossbody Bags</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Hair Accessories</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Socks</ListItem>
                  <ListItem fontSize={'11px'} mt={2}  >Yoga Mats</ListItem>
                </UnorderedList >
              </Box>

              <Box  width={'30vw'}>
                <Box> <Image height={'250px'} src='https://bit.ly/dan-abramov' alt='Dan Abramov' /></Box>
                <Box>
                  <Heading fontSize={'14px'} m={2} ml={0}  >They’re built different.</Heading>
                  <Text fontSize={'12px'} mt={2}>On its own or layered, the Wundermost Nulu Asymmetrical Bodysuit’s
                    versatility stands out. </Text>
                  <Heading fontSize={'12px'} m={2} ml={0} >Brilliant both ways.</Heading>
                </Box>
              </Box>
            </Flex>
          </PopoverBody>

          <PopoverFooter p={4} >
              <Flex direction={'row'} textAlign={'left'} justifyContent={'space-between'}  width={'90vw'}>
              <Box>
              <Heading fontSize={'15px'}  opacity={0.8}>ACTIVITY</Heading>
              </Box>
                <UnorderedList styleType="none" >
                    <Flex width={'40vw'} alignItems={'center'} justifyContent={'space-around'}>
                      <ListItem fontSize={'12px'}  >Running</ListItem>
                      <ListItem fontSize={'12px'}  >Workout</ListItem>
                      <ListItem fontSize={'12px'} >Casual</ListItem>
                      <ListItem fontSize={'12px'} >Yoga</ListItem>
                      <ListItem fontSize={'12px'} >Golf</ListItem>
                      <ListItem fontSize={'12px'}   >Tennist</ListItem>
                      </Flex>
                </UnorderedList>
                <Box> <Heading  fontSize={'12px'} >SHOP ALL WOMEN </Heading>  </Box>
              </Flex>
          </PopoverFooter>
        </PopoverContent>
      </Popover>

      <Flex id='main-content' textAlign={'left'} padding={'0px 20px'}>
      <Flex id='main-content-story' direction={'column'}  >
        <Grid templateAreas={`"nav main"
                                "footer footer"`}
          gridTemplateRows={'auto 1fr 30px'} gridTemplateColumns={'auto 1fr'} gap='1' color={'black'}  >
          <GridItem textAlign={'left'} area={'nav'} p={4} pl={0} border={'1px solid red'} mt={20}>
            <Heading fontSize={'25px'} m={3.5} ml={0}> lululemon</Heading>
            <UnorderedList styleType="none" ml={0.8}>
              <ListItem fontSize={'12px'} m={2} ml={0}>Women's What's New</ListItem>
              <ListItem fontSize={'12px'} m={2} ml={0}>Men's What's New</ListItem>
              <ListItem fontSize={'12px'} m={2} ml={0} >All Women's</ListItem>
              <ListItem fontSize={'12px'} m={2} ml={0}>All Men's</ListItem>
              <ListItem fontSize={'12px'} m={2} ml={0}>All Accessories</ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem  area={'main'}>
            <Image src={Stroyimg} width={'100%'} height={'100%'} /></GridItem>
          <GridItem w={'92.5vw'} p={3} area={'footer'}>
            <Flex>
              <Heading fontSize={'20px'} ml={40} >Invite the spotlight.</Heading>
              <Spacer />
              <Text fontSize={'13px'} >Cool, coordinated summer whites
                make every outing feel like an event.</Text>

            </Flex>
          </GridItem>
        </Grid>

        <Flex  justifyContent={'space-between'}>
          <Box width={'49%'} >
            <Box   >
              <Image fit={'contain'} src={'https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_W_OTM_1_2_Lg_MediaAction_D_SummerClothes?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'}
                alt='1' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Noticeably soft.</Heading>
              <Text fontSize={'14px'}>It’s a standout feeling—cool, comfy fabrics in all white are here.</Text>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SUMMER CLOTHES</Button>  </Text>
            </Box>
          </Box>

          <Box width={'49%'} >
            <Box   >
              <Image src={`https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_W_OTM_1_2_Lg_MediaAction_D_Shorts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72`} alt={'7'} />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Strikingly stretchy.</Heading>
              <Text fontSize={'14px'}>The Align Short is a flex in more ways than one.</Text>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SPORTS</Button>  </Text>
            </Box>
          </Box>

        </Flex>

        <Box margin={'10px 0px'} >
          <Flex direction={'row'} justifyContent={'space-between'}>
            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW1ESDS_0002_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt={'3'} /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Wundermost Ultra-Soft Nulu Tube Top</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'}>$48</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW5FFGS_0002_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Lightweight Tennis Mid-Rise Track PantFull Length</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} > $48</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW3HJ7S_0002_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Define Relaxed-Fit Jacket Luon</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$148</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW8ALWS_0002_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>lululemon Align™ High-Rise Skirt</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$78</Text>
              </Flex>
            </Box>
          </Flex>
          <Text border={'1px solid black'} width={'fit-content'}  margin={'10px auto'} borderRadius={'3px'}>
            <Button bgColor={'white'}>SHOPS SUMMER WHITES</Button></Text>
        </Box>

        <Flex  margin={'30px 0px'}  justifyContent={'space-between'}>
          <Box width={'32%'} >
            <Box>
              <Image w={'320px'} src={'https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >A skirt for every scene.</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SKIRTS</Button>  </Text>
            </Box>
          </Box>

          <Box width={'32%'} >
            <Box  width={'100%'} >
              <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensHoodiesSweatshirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Moving along softly.</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} >
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP HOODIES &  SWEATSHIRTS</Button>  </Text>
            </Box>
          </Box>

          <Box width={'32%'} >
            <Box boxSize='sm' width={'100%'}  >
              <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensPants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Comfort’s got legs.</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP PANTS</Button>  </Text>
            </Box>
          </Box>

        </Flex>

        <Box margin={'10px 0px'} >
          <Flex direction={'row'} justifyContent={'space-between'}>
            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW1ESDS_0002_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt={'3'} /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Wundermost Ultra-Soft Nulu Tube Top</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'}>$48</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW5FFGS_0002_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Lightweight Tennis Mid-Rise Track PantFull Length</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} > $48</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW3HJ7S_0002_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Define Relaxed-Fit Jacket Luon</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$148</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LW8ALWS_0002_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>lululemon Align™ High-Rise Skirt</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$78</Text>
              </Flex>
            </Box>
          </Flex>
          <Text border={'1px solid black'} width={'fit-content'}  margin={'10px auto'} borderRadius={'3px'}>
            <Button bgColor={'white'}>SHOPS SUMMER WHITES</Button></Text>
        </Box>

        <Flex  margin={'30px 0px'}  justifyContent={'space-between'}>
          <Box width={'32%'} >
            <Box>
              <Image w={'320px'} src={'https://images.lululemon.com/is/image/lululemon/NA_Jun24_Wk3_W_Skirts_Ecomm_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >A skirt for every scene.</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SKIRTS</Button>  </Text>
            </Box>
          </Box>

          <Box width={'32%'} >
            <Box  width={'100%'} >
              <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensHoodiesSweatshirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Moving along softly.</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} >
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP HOODIES &  SWEATSHIRTS</Button>  </Text>
            </Box>
          </Box>

          <Box width={'32%'} >
            <Box boxSize='sm' width={'100%'}  >
              <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_WomensPants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Comfort’s got legs.</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP PANTS</Button>  </Text>
            </Box>
          </Box>

        </Flex>



    


        <Box display={'flex'} height={'250px'} width={'100%'} bgColor={'black'}
          alignItems={'center'} justifyContent={'center'} >
          <Box bgColor={'white'} margin={'50px'} padding={'50px'}>
            <Heading fontSize={'18px'}>Score a new favourite fit for your goals.</Heading>
            <Text border={'1px solid black'} width={'fit-content'}  borderRadius={'5px'} 
            margin={'20px auto'} >
              <Button bg={'white'} fontSize={'14px'} >SHOP WE MADE TOO MUCH </Button></Text>
          </Box>
        </Box>
   
    
     </Flex>
     </Flex>
      </>

  )
}


export default Women
