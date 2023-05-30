'use client'

import { BsCameraFill, BsFillCameraVideoFill, BsFilm } from 'react-icons/bs'
import { Button, Col, Grid, Text } from '@nextui-org/react'

import { AiTwotoneCamera } from 'react-icons/ai'
import { GiClick } from 'react-icons/gi'
import { GrConnect } from 'react-icons/gr'
import InfoCard from '@/components/InfoCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            { /*Displaying Product Cards */}
            <Grid.Container gap={2} css={{
                marginTop: '33pz'
            }}>

                <Grid xs={12} sm={12}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={50} css={{ textAlign: "center", color: "white" }}>
                            Tus mejores tomas en un único lugar.
                        </Text>
                        <Text weight={"bold"} size={30} css={{ textAlign: "center", color: "white" }}>
                            Aprovecha al máximo tus fotos y vídeos favoritos y no vuelvas a perderlos de vista.
                        </Text>
                        <Text weight={"bold"} size={20} css={{ textAlign: "center", color: "white", marginBottom: '30px' }}>
                            Descarga Quik hoy mismo.
                        </Text>
                        <Col css={{ display: "flex", justifyContent: 'space-around', marginBottom: '30px' }}>
                            <Text weight={"bold"} size={20} css={{ textAlign: "center", color: "white" }}>
                                Más pequeña. Más sencilla. El mismo rendimiento.
                            </Text>
                        </Col>
                        <Col css={{ display: "flex", justifyContent: "center" }}>
                            <Link href='https://www.shopnow.com.ar/listado/camaras-accesorios/'>
                                <Button
                                    size="md"
                                    shadow
                                    color="gradient"
                                    css={{ width: "50%", marginTop: "10px" }}
                                >
                                    Ver productos
                                </Button>
                            </Link>
                        </Col>
                    </Col>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} css={{
                marginTop: '33pz'
            }}>
                <Grid xs={12} sm={6}>
                    <InfoCard
                        label=''
                        title=''
                        imageURL='/phonebanner.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6} css={{
                    alignItems: 'center'
                }}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={40} css={{ textAlign: "center", color: "white" }}>
                            Importa fotos y vídeos de tu teléfono, de tu GoPro o de cualquier otra cámara.¹
                        </Text>
                        <Col css={{ display: "flex", justifyContent: "center" }}>
                            <Link href='https://www.shopnow.com.ar/listado/camaras-accesorios/'>
                                <Button
                                    size="md"
                                    shadow
                                    color="gradient"
                                    css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                                >
                                    Comparar
                                </Button>
                            </Link>
                        </Col>
                    </Col>
                </Grid>
            </Grid.Container>

            <Grid.Container gap={2} css={{
                marginTop: '33pz'
            }}>
                <Grid xs={12} sm={6} css={{
                    alignItems: 'center'
                }}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={40} css={{ textAlign: "center", color: "white" }}>
                            La copia de seguridad ilimitada en la nube guarda tus recuerdos preferidos con un 100 % de calidad.²
                        </Text>
                        <Col css={{ display: "flex", justifyContent: "center" }}>
                            <Link href='https://www.shopnow.com.ar/listado/camaras-accesorios/'>
                                <Button
                                    size="md"
                                    shadow
                                    color="gradient"
                                    css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                                >
                                    Comparar
                                </Button>
                            </Link>
                        </Col>
                    </Col>
                </Grid>
                <Grid xs={12} sm={6}>
                    <InfoCard
                        label=''
                        title=''
                        imageURL='/phonebanner2.webp'

                    />
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default page