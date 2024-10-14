import React from 'react'
import { Flex, Box, Text, Grid, GridItem, Heading, UnorderedList, ListItem, Spacer, Image, Button, Center } from '@chakra-ui/react'
import { BsFileX } from 'react-icons/bs'
import Stroyimg from '../assets/story.webp'

const Men = ({ data }) => {
  console.log(data[7])
  return (
    <>
      <Flex id='main-content' textAlign={'left'} padding={'0px 20px'}>
        <Flex id='main-content-story' direction={'column'}  >
          <Grid templateAreas={`"nav main"
                                "footer footer"`}
            gridTemplateRows={'auto 1fr 30px'} gridTemplateColumns={'auto 1fr'} gap='1' color={'black'}  >
            <GridItem textAlign={'left'} area={'nav'} p={2}  border={'1px solid red'} mt={20} height={'fit-content'}>
              <Heading fontSize={'25px'} m={4} > lululemon men's</Heading>
              <UnorderedList styleType="none" ml={1}>
                <ListItem fontSize={'12px'} m={2} >Shorts</ListItem>
                <ListItem fontSize={'12px'} m={2} >ABC Pants</ListItem>
                <ListItem fontSize={'12px'} m={2}  >T-Shirts</ListItem>
                <ListItem fontSize={'12px'} m={2} >Joggers</ListItem>
                <ListItem fontSize={'12px'} m={2} >Trousers</ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem  area={'main'}>
              <Image src={'https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_3_1_D?wid=1280&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
            </GridItem>
            <GridItem w={'92.5vw'} p={3} area={'footer'}>
              <Flex>
                <Heading fontSize={'20px'} ml={40} >Full steam, zero stick.</Heading>
                <Spacer />
                <Text fontSize={'13px'} >License to Train tops won’t cling when your workout heats up—leaving 
                  you feeling unstoppable.</Text>
              </Flex>
            </GridItem>
          </Grid>

          <Flex justifyContent={'space-between'} margin={'20px 0px'}>
            <Box width={'49%'} >
              <Box   >
                <Image fit={'contain'} src={'https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_W_OTM_1_2_Lg_MediaAction_D_SummerClothes?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'}
                  alt='1' />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  >More power to you.</Heading>
                <Text fontSize={'14px'}>Stand up to the toughest workout in the abrasion-resistant License to Train Short.</Text>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SPORTS</Button>  </Text>
              </Box>
            </Box>

            <Box width={'49%'} >
              <Box   >
                <Image 
                src={`https://images.lululemon.com/is/image/lululemon/na_Jun24_wk5_M_Train_1_2_Lg_MediaAction_D_TShirts?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72`} alt={'7'} />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  >Push past plateaus.</Heading>
                <Text fontSize={'14px'}>Less cling in the License to Train Shirt gives 
                  you one more reason to up the intensity.</Text>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP T-SHIRTS</Button>  </Text>
              </Box>
            </Box>

          </Flex>

          <Box  margin={'20px 0px'}>
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
                <Box> <Image src={'https://images.lululemon.com/is/image/lululemon/LM7B81S_066033_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
                <Flex direction={'row'}>
                  <Text fontSize={'14px'} fontWeight={'600'}>Pace Breaker Linerless Short 7</Text>
                  <Spacer orientation='Horizantal' />
                  <Text fontSize={'14px'} >$68</Text>
                </Flex>
              </Box>
            </Flex>
            <Text border={'1px solid black'} width={'fit-content'} margin={'10px auto'} borderRadius={'3px'}>
              <Button bgColor={'white'}>SHOP WHAT'S NEW</Button></Text>
          </Box>


          <Flex margin={'30px 0px'} justifyContent={'space-between'}>
            <Box width={'32%'} >
              <Box>
                <Image w={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Shorts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  >No shortage of movement.</Heading>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SPORTS</Button>  </Text>
              </Box>
            </Box>

            <Box width={'32%'} >
              <Box width={'100%'} >
                <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Shirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  >More performance up your sleeve.</Heading>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} >
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP T-SHIRTS</Button>  </Text>
              </Box>
            </Box>

            <Box width={'32%'} >
              <Box boxSize='sm' width={'100%'}  >
                <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Pants_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  > Bottom line: committed to comfort.</Heading>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP PANTS</Button>  </Text>
              </Box>
            </Box>

          </Flex>

                

          <Box  margin={'20px 0px'}>
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
                <Box> <Image src={'https://images.lululemon.com/is/image/lululemon/LM7B81S_066033_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' /></Box>
                <Flex direction={'row'}>
                  <Text fontSize={'14px'} fontWeight={'600'}>Pace Breaker Linerless Short 7</Text>
                  <Spacer orientation='Horizantal' />
                  <Text fontSize={'14px'} >$68</Text>
                </Flex>
              </Box>
            </Flex>
            <Text border={'1px solid black'} width={'fit-content'} margin={'10px auto'} borderRadius={'3px'}>
              <Button bgColor={'white'}>SHOP BEST SELLERES</Button></Text>
          </Box>

          <Flex margin={'30px 0px'} justifyContent={'space-between'}>
            <Box width={'32%'} >
              <Box>
                <Image w={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_HoodiesSweatshirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  >You’ll miss it when you take it off.</Heading>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP HOODIES & SWEATSHIRTS</Button>  </Text>
              </Box>
            </Box>

            <Box width={'32%'} >
              <Box width={'100%'} >
                <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_Jun24_wk1_M_Golf_1_3_Med_MediaAction_D_GolfPolo?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  >Every collar a call to action.</Heading>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} >
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP POLO</Button>  </Text>
              </Box>
            </Box>

            <Box width={'32%'} >
              <Box boxSize='sm' width={'100%'}  >
                <Image width={'320px'} src={'https://images.lululemon.com/is/image/lululemon/na_May24_Q2_M_Shoes_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'} alt='Dan Abramov' />
              </Box>
              <Box margin={'10px 0px 20px 0px '} >
                <Heading fontSize={'18px'}  > Step into limitless possibilities.</Heading>
                <Text border={' 1px solid black'} width={'fit-content'} borderRadius={'3px'} mt={4} mb={4}>
                  <Button bg={'white'} fontSize={'14px'} fontWeight={'600'} >SHOP SHOES</Button>  </Text>
              </Box>
            </Box>

          </Flex>


          <Box display={'flex'} height={'250px'} width={'100%'} bgColor={'black'}
            alignItems={'center'} justifyContent={'center'} >
            <Box bgColor={'white'} margin={'50px'} padding={'50px'}>
              <Heading fontSize={'18px'}>Score a new favourite fit for your goals.</Heading>
              <Text border={'1px solid black'} width={'fit-content'} borderRadius={'5px'}
                margin={'20px auto'} >
                <Button bg={'white'} fontSize={'14px'} >SHOP WE MADE TOO MUCH </Button></Text>
            </Box>
          </Box>

        </Flex>
      </Flex>
    </>
  )
}

export default Men

