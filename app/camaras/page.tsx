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
                marginTop: '33px'
            }}>
                <Grid xs={12} sm={6}>
                    <InfoCard
                        label=''
                        title=''
                        imageURL='/motobanner.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={50} css={{ textAlign: "center", color: "white" }}>
                            HERO 11 Black
                        </Text>
                        <Text weight={"bold"} size={40} css={{ textAlign: "center", color: "white" }}>
                            Más pequeña. Más sencilla. El mismo rendimiento.
                        </Text>
                        <Text weight={"bold"} size={20} css={{ textAlign: "center", color: "white", marginBottom: '30px' }}>
                            La potencia de la HERO11 Black, ahora más pequeña, ligera y sencilla.
                        </Text>
                        <Col css={{ display: "flex", justifyContent: 'space-around', marginBottom: '30px' }}>
                            <BsFilm size={'4em'} />
                            <GiClick size={'4em'} />
                            <BsFillCameraVideoFill size={'4em'} />
                            <BsCameraFill size={'4em'} />
                        </Col>
                        <br />
                        <Col css={{ display: "flex", justifyContent: 'space-around', marginBottom: '30px' }}>
                            <GrConnect size={'4em'} />
                            <AiTwotoneCamera size={'4em'} />
                        </Col>

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
                                    css={{ width: "25%", marginTop: "10px" }}
                                >
                                    Comprar HERO11 Black MIni
                                </Button>
                            </Link>
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
            <br />
            {/*banner2 */}
            <Grid.Container gap={2}>
                <Grid xs={12} sm={6}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={50} css={{ textAlign: "center", color: "white" }}>
                            HERO 11 Black
                        </Text>
                        <Text weight={"bold"} size={40} css={{ textAlign: "center", color: "white" }}>
                            Más pequeña. Más sencilla. El mismo rendimiento.
                        </Text>
                        <Text weight={"bold"} size={20} css={{ textAlign: "center", color: "white", marginBottom: '30px' }}>
                            La potencia de la HERO11 Black, ahora más pequeña, ligera y sencilla.
                        </Text>
                        <Col css={{ display: "flex", justifyContent: 'space-around', marginBottom: '30px' }}>
                            <BsFilm size={'4em'} />
                            <GiClick size={'4em'} />
                            <BsFillCameraVideoFill size={'4em'} />
                            <BsCameraFill size={'4em'} />
                        </Col>
                        <br />
                        <Col css={{ display: "flex", justifyContent: 'space-around', marginBottom: '30px' }}>
                            <GrConnect size={'4em'} />
                            <AiTwotoneCamera size={'4em'} />
                        </Col>

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
                                    css={{ width: "25%", marginTop: "10px" }}
                                >
                                    Comprar HERO11 Black Mini
                                </Button>
                            </Link>
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
                        imageURL='/waterbanner.webp'

                    />
                </Grid>
            </Grid.Container>
            <br />
            {/*banner3*/}
            <Grid.Container gap={2}>
                <Grid xs={12} sm={6}>
                    <InfoCard
                        label=''
                        title=''
                        imageURL='/snowbanner.webp'

                    />
                </Grid>
                <Grid xs={12} sm={6}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={50} css={{ textAlign: "center", color: "white" }}>
                            HERO 11 Black
                        </Text>
                        <Text weight={"bold"} size={40} css={{ textAlign: "center", color: "white" }}>
                            Más pequeña. Más sencilla. El mismo rendimiento.
                        </Text>
                        <Text weight={"bold"} size={20} css={{ textAlign: "center", color: "white", marginBottom: '30px' }}>
                            La potencia de la HERO11 Black, ahora más pequeña, ligera y sencilla.
                        </Text>
                        <Col css={{ display: "flex", justifyContent: 'space-around', marginBottom: '30px' }}>
                            <BsFilm size={'4em'} />
                            <GiClick size={'4em'} />
                            <BsFillCameraVideoFill size={'4em'} />
                            <BsCameraFill size={'4em'} />
                        </Col>
                        <br />
                        <Col css={{ display: "flex", justifyContent: 'space-around', marginBottom: '30px' }}>
                            <GrConnect size={'4em'} />
                            <AiTwotoneCamera size={'4em'} />
                        </Col>

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
                                    css={{ width: "25%", marginTop: "10px" }}
                                >
                                    Comprar HERO11 Black MIni
                                </Button>
                            </Link>
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
            <Grid.Container gap={2}>
                <Grid xs={12} sm={12}>
                    <Col css={{ width: "100%" }}>
                        <Text weight={"bold"} size={20} css={{ textAlign: "center", color: "white", padding: '77px' }}>
                            Consigue la toma con las mejores cámaras deportivas de acción de GoPro.

                            Los mejores aventureros necesitan las mejores cámaras para capturar la esencia de sus hazañas. Tanto si practicas surf de grandes olas como si fotografías animales salvajes, tu cámara debe ser tan resistente como tú, pero sin que suponga un lastre.

                            Cámaras de acción sumergible para cada excursión

                            Si estás buceando con tiburones, atravesando un río en un kayak o haciendo rafting, necesitas una cámara de acción sumergible de confianza. GoPro te ofrece cámaras de acción HD con resolución 4K de gran nitidez que te permiten capturar contenido nítido de tus hazañas. De hecho, no es solo en las actividades de alta intensidad cuando las mejores cámaras de GoPro destacan. Si estás grabando tu excursión enológica, bajando en una tirolina, practicando snowboard o, simplemente, guardando recuerdos de una barbacoa tras tu última aventura, puedes vivir aventuras y capturarlas al mismo tiempo con tu GoPro.

                            Funciones de la mejor cámara de deportes

                            La cámara de deportes de acción que elijas debe ser ligera para que no suponga una carga. Es importante que la fijes a tu ropa o equipo para que puedas centrarte en el momento y dejar que tu GoPro capture contenido impactante. Una cámara de acción con estabilización de imagen garantiza que tu vídeo no salga movido incluso cuando te tiemble el pulso. ¿No te gustan las aventuras? Usa tu GoPro para crear contenido digno de un premio mientras practicas senderismo en solitario por un bosque de tu zona. No importa adónde te lleve la vida, GoPro siempre te acompaña para compartir el momento.

                            Elige la mejor cámara de deportes de acción para tus aventuras.

                            Compara nuestras cámaras de aventura, como la nueva GoPro HERO11 Black, y elige la que mejor te vaya para todas tus increíbles aventuras, tanto dentro como fuera del agua. Usa nuestra herramienta de comparación de GoPro para comparar hasta 3 modelos de cámara y sus funciones, modos, diseño y dimensiones.

                            ¹Se requiere una suscripción a GoPro.

                            ²Suscripción a GoPro disponible en determinados territorios. Se puede cancelar en cualquier momento. Consulta los términos y condiciones para obtener más información.

                            ³Los vídeos de 360° se capturan con una resolución de 6K y se combinan a 5,6K.

                            4Pesa 60 g con la cubierta de lente incluida que proporciona protección adicional.

                            5La tensión del cable de conexión del obturador de la cámara no debe superar los 5 V. Una tensión excesiva podría causar daños permanentes en la cámara
                        </Text>

                    </Col>
                </Grid>
            </Grid.Container>
        </div>
    )
}

export default page