import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch, faSortDown, faBars } from '@fortawesome/free-solid-svg-icons'

import {
    Box,
    Image,
    Flex,
    Text,
    InputGroup,
    Input,
    InputRightElement,
    Button
} from '@chakra-ui/react'

export const NavBar = () => {
    return (
        <>
            <Flex bg='#131921' w='100%' h='64px' py='12px' px='24px' color='white' justify='space-between'>
                <Image w='130px' objectFit='cover' src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639024774/Amazonas/logo_to17rl.png' alt='Logo' _hover={{ transform: 'scale(0.98)', cursor: 'pointer' }} _active={{ transform: 'scale(0.95)' }} />

                <Box w='137px' minW='75px' mx='25px' color='white' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <Text fontSize='12px'> Enviar a</Text>
                    <Text fontSize='14px' fontWeight='bold'> <FontAwesomeIcon icon={faMapMarkerAlt} /> Colombia</Text>
                </Box>

                <InputGroup size='md' minW='255px'>
                    <Input
                        bg='white' pr='4.5rem' color='black' focusBorderColor='#febd69' />
                    <InputRightElement width='20%' justifyContent='flex-end'>
                        <Button
                            bg='#febd69'
                            color='black'
                            h='100%'
                            size='sm'
                            borderLeftRadius="0"
                            _hover={{ background: "#f3a847", color: "black", }} _active={{ transform: 'scale(0.90)' }}>
                            <FontAwesomeIcon icon={faSearch} style={{ width: '16px', height: '16px' }} />
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Box w='110px' minW='110px' mx='25px' color='white' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }} >
                    <Text fontSize='12px'>Hola, identifícate</Text>
                    <Text fontSize='14px' fontWeight='bold'>Cuenta y Listas <FontAwesomeIcon icon={faSortDown} /></Text>
                </Box>

                <Box w='72px' minW='74px' mx='25px' color='white'>
                    <Text fontSize='12px'>Devoluciones</Text>
                    <Text fontSize='14px' fontWeight='bold'>Y Pedidos</Text>
                </Box>

                <Box
                    as='button'
                    mx='25px'
                    color='white'
                    display='flex'
                    alignItems='flex-end'
                    _hover={{ transform: 'scale(0.97)' }}
                    _active={{ transform: 'scale(0.90)' }}
                >
                    <Image h='37px' objectFit='cover' src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639032403/Amazonas/images/shoping-cart_npz1am.svg' alt='Shopping Cart' />
                    <Text fontSize='14px'>Carrito</Text>
                </Box>
            </Flex>

            <Flex bg='#242F3E' w='100%' h='40px' py='8px' px='24px' color='white' align='center'>
                <Box display='flex' alignItems='center' mr='32px' w='55px' minW='55px' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <FontAwesomeIcon style={{ fontSize: '20px', marginRight: '10px' }} icon={faBars} />
                    <Text align='center' fontWeight='bold' fontSize='12px'>Todo</Text>
                </Box>
                <Box display='flex' alignItems='center' mr='32px' w='97px' minW='97px' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <Text align='center' fontWeight='bold' fontSize='12px'>Tarjetas de regalo</Text>
                </Box>
                <Box display='flex' alignItems='center' mr='32px' w='32px' minW='32px' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <Text align='center' fontWeight='bold' fontSize='12px'>Prime</Text>
                </Box>
                <Box display='flex' alignItems='center' mr='32px' w='96px' minW='96px' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <Text align='center' fontWeight='bold' fontSize='12px'>Los más vendidos</Text>
                </Box>
                <Box display='flex' alignItems='center' mr='32px' w='92px' minW='92px' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <Text align='center' fontWeight='bold' fontSize='12px'>Amazonas Basics</Text>
                </Box>
                <Box display='flex' alignItems='center' mr='32px' w='107px' minW='107px' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <Text align='center' fontWeight='bold' fontSize='12px'>Cómputo y tabletas </Text>
                </Box>
                <Box display='flex' alignItems='center' mr='32px' w='100px' minW='100px' _hover={{ transform: 'scale(0.97)', cursor: 'pointer' }} _active={{ transform: 'scale(0.90)' }}>
                    <Text align='center' fontWeight='bold' fontSize='12px'>Los más regalados</Text>
                </Box>
            </Flex>
        </>
    )
}
