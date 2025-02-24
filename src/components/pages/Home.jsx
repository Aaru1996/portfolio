import { Box, Heading, Image, Spacer, HStack, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Box display="flex" flexDirection={{base:"column",md:"row",lg:"row"}} id='home' mt='50px'
     justifyContent="space-evenly" alignItems="center" >
      <Box fontSize={{base:"18px",md:"20px",lg:"30px"}}>
        <Box>

          <Heading>Hi, I'm</Heading>
          <Heading>Arun Kumar Yadav</Heading>
          <Heading>MERN Stack Developer</Heading>
        </Box>
        <Box display='flex' gap='20px' mb="20px" mt="20px" justifyContent="center" >
           <Box boxShadow="lg"  _hover={{boxShadow:"dark-lg"}} p='3px' bgColor='white' borderRadius='5px'>
              <a href='https://github.com/Aaru1996' target="_blank">
                <Image w="42px" h='42px' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              </a>
           </Box>
           <Box fontSize='18px' p='3px' display='flex' alignItems='center' 
           borderRadius='5px' boxShadow="lg" _hover={{boxShadow:"dark-lg"}} bgColor='white'>
              <Image w='40px' h='40px'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kleCD_Jx5sy-T9okqN6tIbbLEoqJmbMx3g&usqp=CAU' />
              <a target="_blank" href='https://drive.google.com/drive/folders/1snu2nZNIKaXGMxftFsgAwf_GlhZWSpcm?usp=sharing'>Resume</a>
           </Box>
        </Box>
      </Box>
      {/* <Spacer /> */}
      <Box boxShadow={"dark-lg"} borderRadius="10px">
        <Image h={{base:"300px",md:"400px",lg:"400px"}} 
         borderRadius="10px" src='portfolio-image.jpg' alt='arun'/>
      </Box>
    </Box>
  )
}
