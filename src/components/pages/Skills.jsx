import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function Skills() {
  return (
    <Box mt='150px'  id="skills" >
    <Heading  mb="50px"><span style={{borderBottom:"2px solid black"}}>Skills</span></Heading>
      
        <Box boxShadow="md" rounded="md" bg="white" w="80%" m="auto"  p="2%">
            <Heading mb="20px" borderBottom={"1px solid grey"}>Frontend</Heading>
            <Box display={"flex"} flexWrap="wrap" gap="2%" justifyContent="space-around"
            alignItems='center' >
              
              <Box boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                <Box display={"flex"}  justifyContent="space-around" mb='10px'
                  alignItems='center'>
                  <Image w="40px" h="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReS9CVYrAYYlrIpB6zJi1XTNPlrjMwWfefzabj3IqO_w&s" />
                </Box>
                <Box>
                  <Text  >
                      React
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                <Box>
                  <Image w="40px" h="40px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///92Srx0R7tuPblzRbtxQrpqNbdsObhtO7hvP7n9/P5pNLf59/zp4/Tu6faokNPk3fHBsd/VyumTdMmIZMTHuOKXecvOweV8Ur+5p9vy7vimjdLc0+2sltWafcx+VsC1odmBWsGNbMawm9efhM/e1u6EXsK9rN3Gt+KMacbSxuiQcMjLvuSiiNBlLbWnCGYEAAAOFElEQVR4nO1daXuqPBM+hCyExX23bnWvev7/z3u1fSQDJBBCrJz34v7WKjghk9ln+POnQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgwf8nQt9/NwkvQudrfbtsJg7GzmTTX1+jdxNkFa3TyGUeIRgh5w6EMHEZ7x9b7ybMDlrTDePYyQJzdjiF7yavMsaflCPJ8n6AXK/9b2/k0PFkuwdB6O7fPZLXiafePrBG1v43eXW/Yjrr+1nj+N3UGmBBddf3AOv/a9vYmfAS63tsI/l4N82lMFUyKMJ3IMmniHbfTXUJ9JlsbYQzis+j5XL0uaISFUnb76ZbF7MNySwPu95qftrHh82Phkvsphbp9t9Jtj5aJL072KWj6yzzRX98psmv8ssb6C2Njps6ZIR9XlXuRGeUPLD/whI7KRlDgluuybJPCl0++i1CTRElrRhM51nuTGGbUJze/DfINEcraWV7Ax2Tc58Qq6zWSsOfwAUiT5PY2QoK36DOqv8MKSUbbb/IH4ALEamvAbdwwQLdZZlL4RJxbdXiF4VHsJyB4q/AWWSnF1FYETMo9r1F2auhGvUKBfBb0Ae7wHelL98DWxbXUitCHsUHgxscwRJpzzp9leFDj4gYcdlFMAGa2KavOha88g6E4Ba6qvT30ArAITT188aAT4lV8ixgCThsY3wXwKf8aJE6C+gAMRN0jG8TidsgxyJ5FgAePqkSi5gL08a7WqPOAiJ4gKpYlTPPBrO/APDRV7O4tuJO1JzbrWMmtrCqIpuJk0hq5AsfhSJjXxXvdRObyOvjRW1ic6b64QHi1K1NMqMjmNSrTpQw4Otjfy9ixrKhxHpCnLK61DSAk2PDEBGBArcmHsYHYFIbskGwRF2kaTumCJf3eyUQrnBdLDcRQfTscJW4Ia1Fhh9IUmJHMgim4LXwEoW6Jzc7d/yIpSkuFZF8FT5j/eVWtWf+gx8r/XocROHcM1tW1lmc7BqEFYHkG9i6p3AwLMmuSgDHcG3rnl/xQaxDLEOYkZ61nFEr5gs7GrYahPKydgz/+MJXscb5xhAeKzKJcysg3DFu76aGALrLIkMJ1qdvF6ZC0OQIhWg43U6/StSRtv8+E9/s7cEaEYPyFPo+XDvU5YR7dHPUtupa16XnEVQHdTEQgkZuJZ+8uHgB8VJWT689YcQd2qHTHCISTKWidJSscKPlEqedrT0la4hQhByo7PPPdA0mK50btkBlFbTyvdVbtsiUvp3tyqGTa5V+0MwCLUU6fg8iMCYL/a1kZbRoMrjjfOnv5u3t8drrhHWJqElxjQNjOOv+fsjqaB8dM3c8KoUJIdz1GHMGy/o2CZ2EZ5FNqs2zhbRyfDcJBZv2NarfdgLfaZv5cFOmWP9R7eUyNOrWbDOnOd5h6OatRwHMqdP+qNFWrkVYbJr+LJRJUq29ZPj2dmPtCRFvyBrepiv83kqGtvVg13XeCkv2lGR28tNS7K4S8ri0rKTJAHvO9O3mgZA0khW2dbWFEoiz+ZvbE7t5kTaFxsfBDyhlzLt7jjh3qwkrroV/JYZihRKnQWq1kWe0I5xFnd71uO2vXOZmulDABX8Xb+RVYbXJcn09mTSlWbbzo/H64sqbhb/vLTkCv4VefhJF4j2pmw2i4c5hip5h7rxLQeZ7TzIPOD8/1ZluGJF6JGz0HlZtAWEi/cIlKW2CYhc/Wk+YTAgT/pZCNxDFCOTfOHrxNiLO9XR4p03S7WHf+/+WbQRlaAqhPtsSxh+uIHOO2hT6ww3Lyh2C3tBOA6KJ6thtp7udb7slY7v7Ec0wKwrW1cg1gChDs1+jFe2CzD66n7/CqVexmFyzrTJaywyvYvILPsf8r/Dney/JzAh0PtNd4UiVPrCG2YGjc/wXCJi+qKb3Y5WOFQSvTQx38J1vaBxm8AUXvSwQ2vVSIqd04LwMxt8trWwf/0PUTYB/Wka4TE2g8F6X/D4Gaamy+JUCpp6T3MZyzY0lsP3v1OHP+F9jERN+ZQGTv6O/scRFLFZECXYLlJ6/5EefGCcnMLivYNQFKCQVzoxgH0WO1BZmm4Sj4tovPt3CthEhzea/V0m4Szgq1iUqbIB0EIr/D5IzL+9QXicOI7OrFxNtzA7B8UEE7ST2aobUVEC1Edg0haPEAt0LWMsh/lFb5Zc52CemUlisRQmdxI0TmTQRFbakL8I8Voigb2xxOMEASmqa9CJAGbRb+QdnpyUiHE8WSl83gsEqbKvubQuN3yDdnSb2160YSgnb9CekiAhbqVi+A0Wea0egJioOWGYVIgEFbB0T9Fw4HkM54CxBjpW+9kQjukR+gYcqCffqY5oKIJOJYolD+EUbRxHm46Ujx0T0XpLr1sYVtIP/xxIql3MtQnwOqS7e9uCJydlehDIcJPtcCy1A9RNcFT++gIfOKvOp0HcOkVstoPHTXNYMZFkLqvA5ofZC5k/1B1fQfDxRlBCIile0MvyZvTQnjlWzvzpwwkHFGBh4WoHKeegBy82QZ27ydGqgSh6ugQJzK2UYu+JOObMqnKq1574iTaquL4WHp9I4QkG7kmP+JGQNM4q8R4rCDTXxEeDTKtXgQ3EK8zp0QIbGrGa/J5Gk349VbUOAaSpVNlGoOjf3PIOqBKOTqFphzvPywck1748CXU35owRAuMZInCqqGhx8Vl9zEiLCXJwKCVc06ReMb3ENohkz1TnMyxmLfh2Ey//kN0LRh14Us4eiwgvD0mWxjiKBn/e0RADFWEmJYGjxKAE4g8fBGG3apTx+RTFqkGvKC5fANC8UU63RzBmlDGdEPFwiVCS3aQq0qyhYMh2iEf+qTh/gMmtYugd9GSe3S/OZT5wiw3kVQpIyDUpbEnGIXe1YkUznKyx9gUXFWQBxjbNeJHQhOUqIafvEp0x5EUJFrAdGjBn18Y2ejMO12kBCmbAooR3TZXBYI00wqJbci/WN0sJPQlpumW8LAXylzBp3pbH9w1jam7QMx1pYM4Gt0NqepmpMbCF2vbXWb+a2tBQhtqRklZUSrOVlz5pjyU5gC11y0X15ScymJtMJrk+KNUtlDnKzRC8S7oMFeiW6v0TEXd4emIs4DqqXGJQKGkd3/BewaUqZ7qIR2UDUxD+qV2UxU7gHWhFNaNKUmhcWxvpCT+An8IwvaXJ4qFqhzgMCY7JLFuaIWO261HUPPM+V5k+quFRnD7dASJUMg8QjGw0c/af41g0uTeSSRuMcQh4tm0mOXVgDdfGkGOX42RAjeSV6sSz1oXOY7y9lEctDgyifU3IPh/JmtWJ9uAT8zcumy2Lj2SAEFu+h5qWKVq5Cm2YKRBRyygYHYh/RID707FvSnme5lRk1fF1wVQ/K4PLpQLGH5cduxhOgdP1nXxJsKfzdRM7JIFUWB6MNyj93zxVq+3idLJ8WjVxL1kAYpDsXFSRNfK1+Ve5HqkwS0SLldoACODCImMXBE4OCpZjDS1gLyXd1cafIok28EYOblKrFTpeBxu89pX+p/V9T97vfDmE32BYJxk+4QKMJvWK4m4HVJkJLQZnj4Q+XK4/y1ehaeFViB81qG0W0zKAdQtRwl744zK1ret5/kFggNUqQi7yeSaAmruF+ybzbMPnyMsNp/CAUZRATBrPv7FcdtiYJMzYvyZR3l2rdECKpZ78h5iP56ivkmD3Ddd5gDg2IeKtp9kqFY9I2QMSwmEroJrNWGlFF4tp9fc8uFQ8wnTAP3Bmz8l2RoEPI4jSO1iplohuX3+nVUeQAjCcpdBH0cU2/IzgwrS0GJSCmxVggY2ZranG4TEesqOkCYZDddAg/KCCwVI7bQ+mAlXk9OnxviHH3BUgm6CUS8hHugnQ7oXkJbBcwQ9nojgCo23MKPaFCDHl6AxE3LrdPvBilQpEpzAjxanNGOoNMzBgj41smXOcqE5VhFAWZ03MXC8vsW5Cr9C2fgUDWzlFKAY6zuenxKFzOhsSrvOK4D1SqslpaDzMYKUKu2Vm84mwYDrEKIxThAh2v4pSeYeL0UAOGGK+8bBCO6ySxVRjABQaVB2bskn1/h3Kq3x86kvUhWqF9MJpAjncr9Ac8sUlYWYht9eVDJB/iQVCFAvtuQmRZeUdymIr0Em+rJZ3D4SA72+J7A29ZO16XM1rnxKnh1dp0npilp1URtisSOa3hksu2785WE8m13b+HoQZrzObJORLWXuTdcjLzKRi+jVU72brOJ1Qx9ol4ssKXBb3LaTYa5y8ymqd4wrMXQArl77yf7KZf+1ZcTOrPOr3u4oyYKx2F9LiG7iSPxb/8uGnY8y7K4Zez6zk9fIjZ7Hb2R7I0PcLcZYxyNFkdVvd9pczjqsU9VhCMZPTPgGzEnKHR9CtKbmbra3Gg6SlZKLDcWn2katJ/BsuqP/4GYUvp/nyltQnmHvOc8629WK+37d3Zuf+ZfW5kYn1ee5SZMlICiAdzOf8tFCXe6DGG9w4sfXSI7l4x5XTqquotCoCZasjj7GA0IvNlA9xmS6oe/6cC4qyvomf/12SBmC5eN6Y2GgWl9hFxOpjm2Ae9vtQoyF/f8rUDMVsLkg6WqVZHXHY4FlETtbnm/b5BWP/1k6L8rz51C4hCjwFtapsgeb9x8f1+gF2++KXpu+F1iRhXjB7FxPNWt1MZUsJhn0s0Qmp53mX8q2OiO93dJGCPGasY/QATzhl1++ueQdwk7C0mgSt/ag+OcHfXd8xqDTvj6WJ3OQ8Oh8PgPGpPh/sqZMx6090Bs8djuyvCn9H0d6sJD9qnt7+OxSLC2ce4u27flpfP/m2xPvUi+9nLBg0aNGjQoEGDBg0aNGjQoEGDBg0aNGjQoEEd8T8UoK7Qmn7DPwAAAABJRU5ErkJggg==" />
                </Box>
                <Box>
                  <Text>
                      Redux
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                <Box display={"flex"}  justifyContent="space-around"
                   alignItems='center'>
                  <Image w="40px" h="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXhjVqtRd6tiqcsSQ7rD6VF7NxI-3VvoR0w&s" />
                </Box>
                <Box>
                  <Text>
                      Javascript
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                <Box display={"flex"}  justifyContent="space-around" alignItems='center'>
                  <Image w="40px" h="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRUGXR_pLaNtbB7Uw9fKjJBWu42VCTQHy-3pAvBp1vC9yiVdH602-e7mRrLDCkKyojKg&usqp=CAU" />
                </Box>
                <Box>
                  <Text>
                      HTML
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                <Box display={"flex"}  justifyContent="space-around" alignItems='center'>
                  <Image w="40px" h="40px" src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" />
                </Box>
                <Box>
                  <Text>
                    CSS
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                <Box display={"flex"}  justifyContent="space-around" alignItems='center'>
                  <Image w="40px" h="40px" src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" />
                </Box>
                <Box>
                  <Text>
                    Chakra UI
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                <Box display={"flex"}  justifyContent="space-around" alignItems='center'>
                  <Image w="40px" h="40px" src="https://storage.googleapis.com/blog-images-backup/1*0ei2MOQxAzF7krm-v60wnQ.jpeg" />
                </Box>
                <Box>
                  <Text>
                    Typesript
                  </Text>
                </Box>
              </Box>
              <Box></Box>
            </Box>
        </Box>
        <Box boxShadow="md" rounded="md" bg="white"  w="80%" m="auto"  p="2%" mt="30px">
            <Heading mb="20px" borderBottom={"1px solid grey"} >Backend</Heading>
            <Box display="flex" flexWrap='wrap' gap='10%' justifyContent="center"
                alignItems='center'>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>

                <Box display={"flex"}  justifyContent="space-around" alignItems='center' _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>
                  <Image w="40px" h="40px" src="data:image/png;base64,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" />
                </Box>
                <Box>
                  <Text>
                      NodeJs
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>

                <Box display={"flex"}  justifyContent="space-around" alignItems='center' >
                  <Image w="40px" h="40px" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" />
                </Box>
                <Box>
                  <Text>
                      Express
                  </Text>
                </Box>
              </Box>
              <Box  boxShadow="md" rounded="md" bg="white" p="3%" _hover={{cursor:"pointer",boxShadow:"dark-lg"}}>

                <Box display={"flex"}  justifyContent="space-around" alignItems='center'>
                  <Image w="40px" h="40px" src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png" />
                </Box>
                <Box>
                  <Text>
                      Mongodb
                  </Text>
                </Box>
              </Box>
            </Box>
        </Box>
     
    </Box>
  )
}
