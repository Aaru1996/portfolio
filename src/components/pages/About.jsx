import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Box id='about' mt="150px" >
             <Box >

                 <Heading ><span style={{borderBottom:"2px solid black"}}>About</span></Heading> 
             </Box>
           {/* <Text fontWeight="bold">I'm Arun Kumar Yadav</Text> */}
           <Box fontSize='18px'>

             <Text style={{marginTop:"30px"}}>

              A creative full stack developer with problem solving skills and specializing in MERN
              stack. Having 9 months 
              </Text>
               <Text style={{textAlign:"center"}}> of experience  in web development as a Product Support
              Engineer. Always eager to learn</Text>
              <Text > 
                 new technologies to enhance my skills and bring
              value to the organization.</Text> 
           </Box>
      
    </Box>
  )
}

