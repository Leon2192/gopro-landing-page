'use client'

import { Container, Grid } from '@nextui-org/react'

import InfoCard from '@/components/InfoCard'
import React from 'react'

const productos = [
    {
        nombre: 'Producto 1',
        link: '/accesorios.png',
        label: 'Etiqueta'
    },
    {
        nombre: 'Producto 2',
        link: '/accesorios.png',
        label: 'Etiqueta'
    },
    {
        nombre: 'Producto 3',
        link: '/accesorios.png',
        label: 'Etiqueta'
    },
    {
        nombre: 'Producto 4',
        link: '/accesorios.png',
        label: 'Etiqueta'
    },
    {
        nombre: 'Producto 5',
        link: '/accesorios.png',
        label: 'Etiqueta'
    },

]

const page = () => {
    return (
        <div>
            <Container xl css={{ width: "100%" }}>
                <Grid.Container gap={2}>
                    {productos.map((producto) => {
                        return (
                            <Grid xs={12} sm={4} key={producto.nombre}>
                                <InfoCard
                                    label={producto.label}
                                    title={producto.nombre}
                                    imageURL={producto.link}

                                />
                            </Grid>
                        )
                    })}

                </Grid.Container>
            </Container>
        </div >
    )
}

export default page