import { Box, Button, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export default function Projects() {
  return (
    <Box id="projects" mt="150px" >
      <Heading mb="50px" ><span style={{borderBottom:"2px solid black"}}>Projects</span></Heading>
       
      {/* <Box  display='flex'  boxShadow="lg" bgColor="white" rounded="md" 
        w="80%" m="auto" p="01%" mb="50px" flexDirection={{base:"column", md: "row",
       lg: "row"}}
          justifyContent="center" alignItems="center" gap="2%">
        <Box  w={{base:'80%', md:"50%", lg:"60%"}} >
          <Image  w="100%" h={{base:"150px",md:"200px",lg:"300px"}} src="Bitrix24.png" />
        </Box>
        <Box textAlign="left" w={{base:'80%', md:"40%", lg:"40%"}}>
           <Heading fontWeight="normal">bitrix24.in_clone</Heading>
           <br/>
           <Text>Bitrix24 is a workspace to do chats&video calls, online meeting. Task can be created for project.

           </Text>
           <br/>
          
           <Text>A collabrative project, build by a team of 4 members. Executed in 5 days.</Text>
           <br/>
           
           <Text>ReactJs | Chakra UI | MongoDb | Express | NodeJs | Javascript</Text>
           <br/>
           <Box display="flex" justifyContent="flex-end" mr="2%" gap="5%" alignItems="center"> 
               <Button bgColor="blue">
                  <a href="https://github.com/Aaru1996/gusty-cover-2254"
                     target="_blank">Github</a>
               </Button>
               <Button bgColor="blue">
                  <a href="https://bitrix24-clone.netlify.app/"
                      target="_blank">Live Link</a>
               </Button>
           </Box>
        </Box>
      </Box> */}

      <Box  display='flex'  boxShadow="lg" bgColor="white" rounded="md" 
        w="80%" m="auto" p="01%" mb="50px" flexDirection={{base:"column", md: "row",
       lg: "row"}}
          justifyContent="center" alignItems="center" gap="2%">
        <Box  w={{base:'80%', md:"50%", lg:"60%"}} >
          <Image  w="100%" h={{base:"150px",md:"200px",lg:"300px"}} src="e-dashboard-image.png" />
        </Box>
        <Box textAlign="left" w={{base:'90%', md:"40%", lg:"40%"}}>
           <Heading fontWeight="normal">E-Dashboard</Heading>
           <br/>
           <Text>E-Dashboard is a MERN stack-based web application designed for efficient data management and visualization.
             It features includes User-Authentication, SignUp-Login, Responsive-UI, RESTful APIs Devlopment, MongoDb Integration, category-based filter, search by category and device-name,
              pagination, upload data, Add to Cart. </Text>
           <br/>
           <Text> <span style={{fontWeight:"600"}}>Tech Stacks :</span> React.js | Node.js | Express.js | MongoDb | Chakra UI | CSS | </Text>
           <br/>
           <Box display="flex" justifyContent="flex-end" mr="2%" gap="5%" alignItems="center"> 
               <Button bgColor="blue" color='white'>
                  <a href="https://github.com/Aaru1996/e-dashboard-frontend"
                     target="_blank">Github</a>
               </Button>
               {/* <Spacer /> */}
               <Button bgColor="blue" color='white'>
                  <a href="https://e-commerce-dashboard-application.netlify.app/"
                      target="_blank">Live Link</a>
               </Button>
           </Box>
        </Box>
      </Box>

      <Box display='flex' boxShadow="lg" bgColor="white" rounded="md" 
        w="80%" m="auto"  mb="50px" p="1%"  flexDirection={{base:"column", md: "row",
       lg: "row"}}
          justifyContent="center" alignItems="center" gap="2%">
        <Box  w={{base:'80%', md:"50%", lg:"60%"}} >
          <Image  w="100%" h={{base:"150px",md:"200px",lg:"300px"}} src="sugar-cosmetics-homepage.png" />
        </Box>
        <Box textAlign="left" w={{base:'80%', md:"40%", lg:"40%"}}>
           <Heading fontWeight="normal">sugarcosmetics.com_clone</Heading>
           <br/>
           <Text>It is an app for cosmetics products for women. Homepage, menu of products, sign up, add to cart and checkout portions are designed. </Text>
           <br/>
          
           <Text>A collabrative project, build by a team of 4 members. Executed in 5 days.</Text>
           <br/>
           
           <Text><span style={{fontWeight:"600"}}>Tech Stacks :</span> HTML | CSS | Javascript</Text>
           <br/>
           <Box display="flex" justifyContent="flex-end" mr="2%" gap="5%" alignItems="center"> 
               <Button bgColor="blue" color='white'>
                  <a href="https://github.com/Aaru1996/Sugar_Cosmetics_clone"
                     target="_blank" rel='noreferrer'>Github</a>
               </Button>
               {/* <Spacer /> */}
               <Button bgColor="blue" color='white'>
                  <a href="http://sugar-cosmetic-by-arun.netlify.app/"
                      target="_blank">Live Link</a>
               </Button>
           </Box>
        </Box>
      </Box>

      {/* <Box display='flex' boxShadow="lg" bgColor="white" rounded="md" 
        w="80%" m="auto" p="1%"  flexDirection={{base:"column", md: "row",
       lg: "row"}}
          justifyContent="center" alignItems="center" gap="2%">
        <Box  w={{base:'80%', md:"50%", lg:"60%"}} >
          <Image  w="100%" h={{base:"150px",md:"200px",lg:"300px"}} src="travelocity-homepage.png" />
        </Box>
        <Box textAlign="left" w={{base:'80%', md:"40%", lg:"40%"}}>
           <Heading fontWeight="normal">travelocity.com_clone</Heading>
           <br/>
           <Text>Travelocity is an online hotels, cars, cruise, and flight booking app. Homepage, sign up, 
            serach, flights and checkout portions are implemented.</Text>
           <br/>
          
           <Text>A collabrative project, build by a team of 4 members. Executed in 5 days.</Text>
           <br/>
           
           <Text><span style={{fontWeight:"600"}}>Tech Stacks :</span> HTML | CSS | Javascript</Text>
           <br/>
           <Box display="flex" justifyContent="flex-end" mr="2%" gap="5%" alignItems="center"> 
               <Button bgColor="blue">
                  <a href="https://github.com/Sunny7079/travelocity"
                     target="_blank">Github</a>
               </Button>
               <Button bgColor="blue">
                  <a href="https://travelocity-clone-by-arun.netlify.app/"
                      target="_blank">Live Link</a>
               </Button>
           </Box>
        </Box>
      </Box> */}
    </Box>
  )
}
