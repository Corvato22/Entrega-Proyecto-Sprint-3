import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <Box bg='#232f3e' w='100%' h='410px' py='64px' display='flex' alignItems='center' justifyContent='space-between' flexDir='column'>

                <Box w='60%' display='flex' alignItems='top' justifyContent='space-around'>
                    <Box style={{ Text }} color='#FFFFFF'>
                        <Text fontWeight='bold' mb='10px'>Conócenos</Text>
                        <Text className='footer'>Trabajar en Amazon</Text>
                        <Text className='footer'>Información corporativa</Text>
                        <Text className='footer'>Departamento de prensa</Text>
                    </Box>
                    <Box color='#FFFFFF'>
                        <Text fontWeight='bold' mb='10px'>Gana dinero con nosotros</Text>
                        <Text className='footer'>Vender en Amazon</Text>
                        <Text className='footer'>Vender en Amazon Handmade</Text>
                        <Text className='footer'>Publica tu libro en Kindle</Text>
                        <Text className='footer'>Programa de afiliados</Text>
                        <Text className='footer'>Anuncia tus productos</Text>
                    </Box>
                    <Box color='#FFFFFF'>
                        <Text fontWeight='bold' mb='10px'>Podemos ayudarte</Text>
                        <Text className='footer'>Amazon y COVID-19</Text>
                        <Text className='footer'>Devolver o reemplazar productos</Text>
                        <Text className='footer'>Gestionar contenido y dispositivos</Text>
                        <Text className='footer'> Ayuda</Text>
                    </Box>
                    <Box color='#FFFFFF'>
                        <Text fontWeight='bold' mb='10px'>Métodos de pago</Text>
                        <Text className='footer'>Tarjetas de crédito y débito</Text>
                        <Text className='footer'>Tarjetas de regalo</Text>
                        <Text className='footer'>Meses sin intereses</Text>
                        <Text className='footer'>Amazon Cash</Text>
                        <Text className='footer'>Amazon Recargable</Text>
                    </Box>

                </Box>
                <Box w='100%' display='flex' alignItems='center' justifyContent='center'>
                    <Image w='130px' objectFit='cover' src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639024774/Amazonas/logo_to17rl.png' alt='Logo' _hover={{ transform: 'scale(0.98)', cursor: 'pointer' }} _active={{ transform: 'scale(0.95)' }} />
                </Box>
            </Box>

        </>
    )
}
