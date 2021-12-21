import React, { useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify'
import { Box, Divider, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsAsync } from '../actions/actionsProducts'

export const Detail = () => {


    const { products } = useSelector(store => store.product);

    console.log('products', products)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsAsync())
        // eslint-disable-next-line
    }, [])

    const paramsCategory = useParams()
    const idProduct = paramsCategory

    // eslint-disable-next-line
    let product = products.find(e => e.id == idProduct.id)

    let image_1 = product.images.img_1
    let image_2 = product.images.img_2
    let image_3 = product.images.img_3


    return (
        <>
            <NavBar />
            <Box w='100px' mt='30px' ml='30px'>
                <Link to='/'>
                    <Text w='100px' fontSize='12px' _hover={{ cursor: "pointer", textDecoration: "underline" }}><FontAwesomeIcon icon={faChevronLeft} /> Volver al inicio</Text>
                </Link>
            </Box>
            <Box my='60px' px='5%' display="flex" alignItems='top' justifyContent='space-around' w='100%' h='800px'>

                <Box w='480px' h='480px' color='#0F1111'>
                    <ReactImageMagnify  {...{
                        smallImage: {
                            isFluidWidth: true,
                            src: image_1,
                        },
                        largeImage: {
                            src: image_1,
                            width: 700,
                            height: 700
                        },
                        lensStyle: {
                            background: '#00bfff1c',
                        },
                        shouldUsePositiveSpaceLens: true
                    }} />
                </Box>

                <Box w='660px' color='#0F1111'>

                    <Text fontSize='24px' fontWeight='semi-bold'>
                        {product.name}
                    </Text>

                    <Divider opacity='1' mb='10px' />

                    <Box as='span' fontSize='14px' color='#565959'>
                        Precio: <Box as='span' fontSize='18px' color='#C7511F'>US$ {product.price}</Box>
                    </Box>

                    <Text fontSize='16px' fontWeight='bold' my='20px'>Acerca de este artículo</Text>
                    <UnorderedList fontSize='14px'>
                        <ListItem>{product.about.about_1}</ListItem>
                        <ListItem>{product.about.about_2}</ListItem>
                        <ListItem>{product.about.about_3}</ListItem>
                        <ListItem>{product.about.about_4}</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
