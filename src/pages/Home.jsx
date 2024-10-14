import React from 'react'
import { Flex, Box, Text, Grid, GridItem, Heading, UnorderedList, ListItem, Spacer, Image, Button, Center } from '@chakra-ui/react'
import { BsFileX } from 'react-icons/bs'
import Stroyimg from '../assets/story.webp'

const Home = ({ data }) => {
  console.log(data[7])
  return (
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
          <GridItem pl='2' bg='green.300' area={'main'}>
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
          <Heading p={2}  margin={'10px auto'} w={'fit-content'} >A new spin on summer.</Heading>
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

        <Box  >
          <Box >
            <Image w={'100%'}  src={'https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_1_1_Med_MediaAction_D_Mens?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
          </Box>
          <Box margin={'10px 0px 20px 0px '} >
            <Heading fontSize={'18px'}  >Summer going strong.</Heading>
            <Text fontSize={'14px'}>
              Stick to your plan, not your gear. The License to Train Shirt brings more
              focus with less cling.</Text>
            <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} >
              <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP MEN'S</Button>  </Text>
          </Box>
        </Box>


        <Box  >
          <Heading margin={'20px auto'} w={'fit-content'} >Shift gear into summer.</Heading>
          <Flex direction={'row'} justifyContent={'space-between'}>
            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LM3EJUS_065799_1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>License to Train Short-Sleeve Shirt</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$78</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LM7BDTS_027597_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>License to Train Linerless Short 5</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$88</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image w={'100%'} src={'https://images.lululemon.com/is/image/lululemon/LM3FG2S_036946_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Metal Vent Tech Short-Sleeve Shirt
                Updated Fit</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$78</Text>
              </Flex>
            </Box>

            <Box width={'24%'}>
              <Box> <Image  src={'https://images.lululemon.com/is/image/lululemon/LM7B81S_066033_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
              <Flex direction={'row'}>
                <Text fontSize={'14px'} fontWeight={'600'}>Pace Breaker Linerless Short 7</Text>
                <Spacer orientation='Horizantal' />
                <Text fontSize={'14px'} >$68</Text>
              </Flex>
            </Box>
          </Flex>
          <Text border={'1px solid black'} width={'fit-content'} margin={'10px auto'} borderRadius={'3px'}>
            <Button bgColor={'white'}>BEST WORKOUT GEAR</Button></Text>
        </Box>

        <Flex  margin={'30px 0px'}  justifyContent={'space-between'}>
          <Box width={'32%'} >
            <Box>
              <Image src={'https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_MensShirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Tops that do the most..</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} margin={'10px 0px'} >
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SHIRTS</Button>  </Text>
            </Box>
          </Box>

          <Box width={'32%'} >
            <Box   >
              <Image  src={'https://images.lululemon.com/is/image/lululemon/NA_May24_Wk2_M_SU24Shorts_1_3_MediaAction_M_MLP_ZeroedIn?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Shorts on. Limits off..</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} margin={'10px 0px'}>
                <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SPORTS</Button>  </Text>
            </Box>
          </Box>

          <Box width={'32%'} >
            <Box   >
              <Image  src={'https://images.lululemon.com/is/image/lululemon/na_Jun24Wk1_HPUpdates_Quickhits_1_3_Med_MediaAction_D_MensPants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </Box>
            <Box margin={'10px 0px 20px 0px '} >
              <Heading fontSize={'18px'}  >Keeping you in motion..</Heading>
              <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} margin={'10px 0px'} >
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
  )
}

export default Home;
