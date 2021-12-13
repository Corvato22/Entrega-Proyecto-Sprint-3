import React from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { Box, Divider, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

export const Detail = () => {

    let image = 'https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639215469/Amazonas/products-images/PC_3_1_hfsjfs.jpg'

    return (
        <>
            <NavBar />
            <Box w='100px' mt='30px' ml='30px'>
                <Link to='/'>
                    <Text w='100px' fontSize='12px' _hover={{ cursor: "pointer", textDecoration: "underline" }}><FontAwesomeIcon icon={faChevronLeft} /> Volver al inicio</Text>
                </Link>
            </Box>
            <Box my='60px' px='5%' display="flex" alignItems='top' justifyContent='space-around' w='100%' h='800px'>

                <Box w='660px' h='660px' color='#0F1111'>
                    <ReactImageMagnify  {...{
                        smallImage: {
                            isFluidWidth: true,
                            src: image,
                        },
                        largeImage: {
                            src: image,
                            width: 1315,
                            height: 1505.58
                        },
                        lensStyle: {
                            background: '#00bfff1c',
                        },
                        shouldUsePositiveSpaceLens: true
                    }} />
                </Box>

                <Box w='660px' color='#0F1111'>

                    <Text fontSize='24px' fontWeight='semi-bold'>
                        Canon EOS R6 - Cámara sin Espejo de Marco Completo + Lente RF24-105mm F4 L IS USM
                    </Text>

                    <Divider opacity='1' mb='10px' />

                    <Box as='span' fontSize='14px' color='#565959'>
                        Precio: <Box as='span' fontSize='18px' color='#C7511F'>US$26.99</Box>
                    </Box>

                    <Text fontSize='16px' fontWeight='bold' my='20px'>Acerca de este artículo</Text>
                    <UnorderedList fontSize='14px'>
                        <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci delectus quas quasi dolorem culpa quod, ipsam enim doloremque consequatur quibusdam aliquam nostrum hic similique asperiores unde quia dignissimos alias rerum atque amet animi repudiandae molestiae dolorum reiciendis? Quibusdam cumque nobis eius iste accusantium blanditiis asperiores nesciunt obcaecati saepe, nostrum quasi.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci delectus quas quasi dolorem culpa quod, ipsam enim doloremque consequatur quibusdam aliquam nostrum hic similique asperiores unde quia dignissimos alias rerum atque amet animi repudiandae molestiae dolorum reiciendis? Quibusdam cumque nobis eius iste accusantium blanditiis asperiores nesciunt obcaecati saepe, nostrum quasi.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci delectus quas quasi dolorem culpa quod, ipsam enim doloremque consequatur quibusdam aliquam nostrum hic similique asperiores unde quia dignissimos alias rerum atque amet animi repudiandae molestiae dolorum reiciendis? Quibusdam cumque nobis eius iste accusantium blanditiis asperiores nesciunt obcaecati saepe, nostrum quasi.</ListItem>
                        <ListItem>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci delectus quas quasi dolorem culpa quod, ipsam enim doloremque consequatur quibusdam aliquam nostrum hic similique asperiores unde quia dignissimos alias rerum atque amet animi repudiandae molestiae dolorum reiciendis? Quibusdam cumque nobis eius iste accusantium blanditiis asperiores nesciunt obcaecati saepe, nostrum quasi.</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
