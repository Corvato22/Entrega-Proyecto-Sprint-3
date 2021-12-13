import React, { useEffect } from 'react'
import {
    Box,
    Image,
    Text,
    Grid,
    Spinner
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAsync } from '../actions/actionsProducts';
import { Link } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const Home = () => {

    const { products } = useSelector(store => store.product);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProductsAsync())
        // eslint-disable-next-line
    }, [])

    const endPoint = "este_seria_el_uid"

    return (
        <>
            <NavBar />
            <Box bgImage="url('https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639205856/Amazonas/images/hero_jmo2uf.jpg')"
                w='100%'
                h='400px'
                bgSize='cover'
                bgPosition='center'
                bgRepeat='no-repeat'
            >
            </Box>
            {
                products.length === 0 ?

                    <Box w='100%' h='400px' display='flex' alignItems='center' justifyContent='center'>
                        <Spinner
                            thickness='5px'
                            speed='2s'
                            emptyColor='gray.200'
                            color='#febd69'
                            size='xl'
                        />
                    </Box>
                    :
                    <Grid my='30px' justifyItems='center' templateColumns='repeat(5, 1fr)' gap={1}>{
                        products.map((e, i) => (
                            <Link key={i} to={`/detail/${endPoint}`}>
                                <Box key={i} maxW='300px' minW='300px'>
                                    <Box w='300px' h='300px' display='flex' alignItems='center' justifyContent='center' mb='10px'>
                                        <Image maxW='300px' maxH='300px' src={e.images.img_1} alt={"e.name"} _hover={{ cursor: "pointer" }} />
                                    </Box>
                                    <Text color='#007185' _hover={{ cursor: "pointer", color: "#C7511F" }}>
                                        {e.name}
                                    </Text>
                                    <Box fontWeight='light' my='10px' color='#C7511F'>
                                        <Box as='span' fontSize='11px' position='relative' top='-3px'>
                                            US$
                                        </Box>
                                        <Box as='span' fontSize='18px'>
                                            {e.price}
                                        </Box>
                                    </Box>
                                </Box>
                            </Link>
                        ))
                    }
                    </Grid>
            }
            <Footer />
        </>
    )
}