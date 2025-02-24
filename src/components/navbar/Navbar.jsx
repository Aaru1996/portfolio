import React from 'react'
import {Link } from 'react-scroll'
import {Box,Button, HStack, Spacer,Flex, Hide, Heading, Show, useDisclosure, Input, Image} from "@chakra-ui/react"

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
// const { isOpen, onOpen, onClose } = useDisclosure()
// const btnRef = React.useRef()
// import {Link, NavLink} from "react-router-dom"

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = React.useRef()
  return (
    <Flex h="50px" w="100%"  zIndex="1" bgColor="white" boxShadow="lg"  fontWeight={"bold"} fontFamily="sans-serif" justifyContent='space-around' alignItems="center" position="sticky" top='0'  >
       <Box w="20%" >
          <Heading color='blue'>A</Heading>
       </Box>

      
       <Hide below="sm" >

        <Box _hover={{cursor:'pointer', borderBottom:'2px solid black'}}>

        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} >
          Home
          </Link>
        </Box>
        
          <Box _hover={{cursor:'pointer', borderBottom:'2px solid black'}}>

            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
              About
            </Link>
          </Box>
          <Box _hover={{cursor:'pointer', borderBottom:'2px solid black'}}>

              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} >
                Skills
              </Link>
          </Box>
          <Box _hover={{cursor:'pointer', borderBottom:'2px solid black'}}>

              <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                Projects
              </Link>
          </Box>
          <Box _hover={{cursor:'pointer', borderBottom:'2px solid black'}}>

            <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-50} duration={500} >
              Contacts
            </Link>
          </Box>
       </Hide>

       <Show below='sm'>
           {/* <Box>This text appears at the "sm" value screen width or greater.</Box> */}

           <Button ref={btnRef} colorScheme='blue' bgColor={'blue'} onClick={onOpen}>
                 <Image  w='30px' h='30px' src='https://cdn3.iconfinder.com/data/icons/photo-camera-ui/512/mobile-navigation-bar-menu-responsive-ui-512.png'/>

            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
              size={'xs'}
              height='100px'
            >
              <DrawerOverlay />
              <DrawerContent>
               <Button ref={btnRef} colorScheme='blue' bgColor={'blue'} onClick={onClose}>
                 <Image  w='30px' h='30px' src='https://cdn3.iconfinder.com/data/icons/photo-camera-ui/512/mobile-navigation-bar-menu-responsive-ui-512.png'/>
               </Button>

                <DrawerBody>
                      <Box _hover={{cursor:'pointer', bgColor:"blue", color:"White"}} mb={'10px'}>

                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} >
                         <Heading fontSize={'18px'}  onClick={onClose}> Home</Heading>
                        </Link>
                      </Box>

                      <Box _hover={{cursor:'pointer',  bgColor:"blue", color:"White"}} mb={'10px'}>

                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
                        <Heading fontSize={'18px'}  onClick={onClose}> About</Heading>
                        </Link>
                      </Box>
                      <Box _hover={{cursor:'pointer',  bgColor:"blue", color:"White"}} mb={'10px'}>

                          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} >
                          <Heading fontSize={'18px'}  onClick={onClose}> Skills</Heading>
                          </Link>
                      </Box>
                      <Box _hover={{cursor:'pointer', bgColor:"blue", color:"White"}} mb={'10px'}>

                          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                          <Heading fontSize={'18px'}  onClick={onClose}> Projects</Heading>
                          </Link>
                      </Box>
                      <Box _hover={{cursor:'pointer', bgColor:"blue", color:"White"}} mb={'10px'}>

                        <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-50} duration={500} >
                        <Heading fontSize={'18px'}  onClick={onClose}>Contacts</Heading>
                        </Link>
                      </Box>
                </DrawerBody>
              </DrawerContent>
              </Drawer>
        </Show>
      </Flex>
    )
  }
