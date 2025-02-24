import { Box, Heading, Image, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function Contacts() {
  return (
    <Box id='contacts' mt="150px" mb='50px'  bgColor="white">
        <Heading  mb="50px" mt="100px"><span style={{borderBottom:"2px solid black", marginTop:"50px"}}
        >Get in touch</span></Heading>
       
        <Box display="flex" mt="50px" mb="10px" justifyContent='center' alignItems="center" gap='5%'>
           <Box>
                <Tooltip label="arunkumaryadav19031996@gmail.com">
                   <Image w='50px' h="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7mKcDA9kql6kNZmPJLXC8uh2iVLJ1B_etSenAug&s" />
                </Tooltip>
           </Box>
           <Box>
              <a href='https://github.com/Aaru1996' target="_blank">
                <Image w="42px" h='42px' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              </a>
           </Box>
           <Box>
              <a href='https://www.linkedin.com/in/arun-kumar-yadav-5821411b6/' target="_blank">
                <Image w="40px" h='40px' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png" />
              </a>
           </Box>
          
        </Box>

        <Box  border='1px solid black'></Box>
        <Text>@2025 designed & build by Arun Kumar Yadav</Text>
</Box>
  )
}
