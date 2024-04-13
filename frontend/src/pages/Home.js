import React, { useState } from 'react'
import { Container, Box,Text } from '@chakra-ui/react'
import './home.css'

const Home = () => {
    const [login,setLogin] = useState(true);
  return (
    <div className='home'>
        <Container w="100%" h="100vh" d="flex" justifyContent={'center'} alignItems={'center'}>
            <Box
                d="flex"
                justifyContent="center"
                w="100%"
                p={3}
                color={'grey'}
            >
                <Text color={'white'}>hoi</Text>
            </Box>
            {login?
            <>
            <h3>e-mail</h3>
            <input placeholder='Enter e-mail' />
            <h3>password</h3>
            <input placeholder='Enter Password' /></>
            :
            <>
            <h3>name</h3>
            <input placeholder='Enter name'/>
            <h3>e-mail</h3>
            <input placeholder='Enter e-mail' />
            <h3>password</h3>
            <input placeholder='Enter Password' />
            <h3>confirm password</h3>
            <input placeholder='re-enter password'/>
            </>
            }
        </Container>
    </div>
  )
}

export default Home