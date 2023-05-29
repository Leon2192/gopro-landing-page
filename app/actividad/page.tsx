'use client'

import { Button, Col, Grid, Text } from '@nextui-org/react'

import GlobalCard from '@/components/GlobalCard'
import InfoCard from '@/components/InfoCard'
import React from 'react'

const page = () => {
    return (
        <div>
            <Grid.Container gap={2} css={{
                marginTop: '33pz'
            }}>

                <Grid xs={12} sm={12}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={60} css={{ textAlign: "center", color: "white" }}>
                            Comprar por actividad
                        </Text>
                        <Text weight={"bold"} size={30} css={{ textAlign: "center", color: "white", padding: '22px' }}>
                            Tenemos cámaras, soportes y accesorios específicamente diseñados para tus actividades favoritas. Elige una de las opciones inferiores, crea tu equipo perfecto y consigue cada toma.
                        </Text>
                    </Col>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} css={{
                marginTop: '33px'
            }}>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Buceo'
                        imageURL='/buceo.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Viajes'
                        imageURL='/viajes.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Ciclismo'
                        imageURL='/ciclismo.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Senderismo'
                        imageURL='/senderismo.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Surf'
                        imageURL='/surf.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Motociclismo'
                        imageURL='/motociclismo.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Esquiar'
                        imageURL='/esquiar.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GlobalCard
                        label=''
                        title='Snowboard'
                        imageURL='/snowboard.webp'

                    />
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default page