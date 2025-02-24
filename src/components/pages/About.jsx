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
             Motivated MERN Stack Developer with 10 months of experience in building dynamic, scalable, and user-friendly web applications.
              </Text>
               <Text style={{textAlign:"center"}}> 
               Proficient in React.js, Node.js, Express.js, and MongoDB, with a strong understanding of front-end and back-end development.

               </Text>
              <Text > 
              Skilled in writing clean, efficient code, optimizing performance, and implementing RESTful APIs.

              </Text> 
              <Text>
              Adept at collaborating with cross-functional teams to deliver high-quality software solutions. 
              </Text>
              <Text>
              Seeking opportunities to contribute and grow in a challenging development environment.

              </Text>
           </Box>
      
    </Box>
  )
}

