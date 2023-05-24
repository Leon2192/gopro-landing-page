"use client";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  BsFacebook,
  BsFillCartFill,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import {
  Button,
  Col,
  Container,
  Grid,
  Navbar,
  NextUIProvider,
  Text,
  createTheme,
} from "@nextui-org/react";

import Footer from "@/components/Footer";
import Image from "next/image";
import InfoCard from '@/components/InfoCard';
import Slider from "react-slick";
import { useState } from "react";

;

const darkTheme = createTheme({ type: "dark" });

export default function Home() {
  const [showCategories, setShowCategories] = useState(false);
  const [showProductos, setShowProductos] = useState(false);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const productos = [
    {
      nombre: "Camaras",
      url: "/camera.webp",
    },
    {
      nombre: "Memorias",
      url: "/memorias.png",
    },
    {
      nombre: "Accesorios",
      url: "/accesorios.png",
    },
    {
      nombre: "Baterias",
      url: "/baterias.png",
    },
    {
      nombre: "Soporte",
      url: "/soporte.png",
    },
  ];

  const actividades = [
    {
      nombre: "Viajes",
      url: "/actividades/viajes.jpeg",
    },
    {
      nombre: "Montana",
      url: "/actividades/montania.jpeg",
    },
    {
      nombre: "Familia",
      url: "/actividades/familia.jpeg",
    },
    {
      nombre: "Surf ",
      url: "/actividades/surf.jpg",
    },
    {
      nombre: "Buceo",
      url: "/actividades/buceo.jpeg",
    },
    {
      nombre: "Extremo",
      url: "/actividades/extremo.jpeg",
    },
    {
      nombre: "Nieve",
      url: "/actividades/snowboarding.jpeg",
    },
    {
      nombre: "Bici",
      url: "/actividades/bici.jpeg",
    },
    {
      nombre: "Moto",
      url: "/actividades/moto.jpg",
    },
  ];

  return (
    <NextUIProvider theme={darkTheme}>
      <Container xl css={{ width: "100%" }}>
        {/*Navbar */}
        <Navbar isCompact variant={"static"}>
          <Navbar.Content hideIn="md">
            <Navbar.Link href="#"> +54 11 2682 1502 (WhatsApp)</Navbar.Link>
            <Navbar.Link href="#productos">
              {" "}
              +54 11 6034 4860 (WhatsApp 2)
            </Navbar.Link>
            <Navbar.Link href="#footer"> hola@gopro.com.ar</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Item>
              <BsInstagram />
            </Navbar.Item>
            <Navbar.Item>
              <BsFacebook />
            </Navbar.Item>
            <Navbar.Item>
              <BsYoutube />
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>

        <Navbar isCompact variant={"static"}>
          <Navbar.Brand>
            <Image
              width={175}
              height={50}
              src="/logo.png"
              alt="Default Image"
              objectFit="cover"
            />
          </Navbar.Brand>

          <Navbar.Content hideIn="md">

            <Navbar.Link href="#">
              {/* 
                <a
                className="enlace"
                href=""
                onMouseEnter={() => setShowProductos(true)}
                onMouseLeave={() => setShowProductos(false)}
              >
                Productos
              </a>
  */}
              <h4
                onMouseEnter={() => setShowProductos(true)}
                onMouseLeave={() => setShowProductos(false)}
              >Productos</h4>
            </Navbar.Link>


            <Navbar.Link href="#productos">
              {/*
              <a
                className="enlace"
                href=""
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                Por actividad
              </a>
             */}
              <h4
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >Por actividad</h4>
            </Navbar.Link>
            <Navbar.Link href="#footer">
              <h4>Manuales</h4>
            </Navbar.Link>
            <Navbar.Link href="#footer">
              <h4>Contacto</h4>
            </Navbar.Link>
          </Navbar.Content>

          <Navbar.Content>
            <Navbar.Link href="#">Ingresar</Navbar.Link>
            <Navbar.Item>
              <BsFillCartFill />
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>

        {showProductos ? (
          <div className="productos-navbar">
            {productos.map((producto) => (
              <img
                key={producto.nombre}
                src={producto.url}
                width={120}
                height={100}
                alt=""
              />
            ))}
          </div>
        ) : null}

        {showCategories ? (
          <nav className="imagenes-hover">
            {actividades.map((actividad) => (
              <ul key={actividad.nombre}>
                <img
                  key={actividad.nombre}
                  src={actividad.url}
                  width={175}
                  height={50}
                  alt=""
                />
              </ul>
            ))}
          </nav>
        ) : null}

        {/*Jumbotron */}
        <div className="banner-inicial">
          <Grid.Container
            justify="flex-start"
            css={{
              height: "900px",
              width: "100%",
              backgroundImage: "url(/bannerinicial.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Grid xs={12} sm={6} alignItems="center">
              <Col css={{ width: "100%" }}>
                <Text weight={"bold"} size={50} css={{ textAlign: "center", color: "#283618" }}>
                  HERO 11
                </Text>
                <Text weight={"bold"} size={50} css={{ textAlign: "center", color: "#283618" }}>
                  Resistente, versátil y lista
                  para llevar la diversión al aire libre.
                </Text>
                <Text weight={"bold"} size={30} css={{ textAlign: "center", color: "#283618" }}>
                  $399.99  $499.99
                </Text>
                <Col css={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="md"
                    shadow
                    color="gradient"
                    css={{ width: "25%", marginTop: "10px" }}
                  >
                    Agregar al carrito
                  </Button>
                  <Button
                    size="md"
                    shadow
                    color="gradient"
                    css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                  >
                    Conoce mas
                  </Button>
                </Col>
              </Col>
            </Grid>
          </Grid.Container>
        </div>

        { /* <Carousel /> */}

        <div className="container-slider">
          <h4 className='compra-carousel-title'>Comprar por actividad</h4>
          <Slider {...settings}>
            {actividades.map((item) => (
              <div key={item.nombre} className="card-contain">
                <div className="card-actividades">
                  <img className='img-actividades' width={275} height={275} src={item.url} alt="imagen" />
                </div>
              </div>

            ))}
          </Slider>
        </div>


        { /*Displaying Product Cards */}
        <Grid.Container gap={2}>
          <Grid xs={12} sm={4}>
            <InfoCard
              label='Camara'
              title='HERO 9 Black'
              imageURL='/accesorios.png'

            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label='Soporte'
              title='Soporte B9'
              imageURL='/soporte.png'

            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label='Camara'
              title='HERO 11 Black'
              imageURL='/hero111.png'

            />
          </Grid>
        </Grid.Container>
        <Grid.Container
          id="productos"
          justify="flex-start"
          css={{
            height: "800px",
            width: "100%",
            backgroundImage: "url(/gopro.gif)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid xs={12} sm={6} alignItems="center">
            <Col css={{ width: "100%" }}>
              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                HERO10
              </Text>
              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                $ 265.499 *
              </Text>

              <Text weight={"bold"} size={20} css={{ textAlign: "center" }}>
                * Oferta en efectivo – Precio de lista: $ 294.999
              </Text>

              <Text weight={"bold"} size={30} css={{ textAlign: "center" }}>
                12 cuotas fijas de $ 41.249,88 cada una
              </Text>

              <Col css={{ display: "flex", justifyContent: "center" }}>
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px" }}
                >
                  Agregar al carrito
                </Button>
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                >
                  Conoce mas
                </Button>
              </Col>
            </Col>
          </Grid>
        </Grid.Container>

        <Grid.Container
          justify="flex-start"
          css={{
            height: "700px",
            width: "100%",
            backgroundImage: "url(/bannerhero9.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid xs={12} sm={6} alignItems="center">
            <Col css={{ width: "100%" }}>
              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                HERO9 Black
              </Text>

              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                $ 224.999 *
              </Text>
              <Text weight={"bold"} size={20} css={{ textAlign: "center" }}>
                * Oferta en efectivo – Precio de lista: $ 249.999
              </Text>
              <Text weight={"bold"} size={30} css={{ textAlign: "center" }}>
                12 cuotas fijas de $ 31.249,88 cada una
              </Text>

              <Col css={{ display: "flex", justifyContent: "center" }}>
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px" }}
                >
                  Agregar al carrito
                </Button>
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                >
                  Conoce mas
                </Button>
              </Col>
            </Col>
          </Grid>
        </Grid.Container>
        <div className='sandisk-banner'>
          <Grid.Container
            justify="flex-start"
            css={{
              height: "500px",
              width: "100%",
              backgroundImage: "url(/sandisk.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Grid xs={12} sm={6} alignItems="center">
              <Col css={{ width: "100%" }}></Col>
            </Grid>
          </Grid.Container>

          <Grid.Container
            justify="flex-end"
            css={{
              height: "700px",
              width: "100%",
              backgroundImage: "url(/banner9.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Grid xs={12} sm={6} alignItems="center">
              <Col css={{ width: "100%" }}>
                <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                  MAX
                </Text>
                <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                  $ 296.999 *
                </Text>
                <Text weight={"bold"} size={30} css={{ textAlign: "center" }}>
                  * Oferta en efectivo – Precio de lista: $ 329.999
                </Text>
                <Text weight={"bold"} size={40} css={{ textAlign: "center" }}>
                  12 cuotas fijas de $ 41.249,88 cada una
                </Text>
                <Col css={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="md"
                    shadow
                    color="gradient"
                    css={{ width: "25%", marginTop: "10px" }}
                  >
                    Agregar al carrito
                  </Button>
                  <Button
                    size="md"
                    shadow
                    color="gradient"
                    css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                  >
                    Conoce mas
                  </Button>
                </Col>
              </Col>
            </Grid>
          </Grid.Container>

        </div>

        <Grid.Container
          justify="flex-start"
          css={{
            height: "700px",
            width: "100%",
            backgroundImage: "url(/bannerhero08.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Grid xs={12} sm={6} alignItems="center">
            <Col css={{ width: "100%" }}>
              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                HERO8 Black
              </Text>
              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                $ 206.999 *
              </Text>
              <Text weight={"bold"} size={20} css={{ textAlign: "center" }}>
                * Oferta en efectivo – Precio de lista: $ 229.999
              </Text>
              <Text weight={"bold"} size={30} css={{ textAlign: "center" }}>
                12 cuotas fijas de $ 28.749,88 cada una
              </Text>
              <Col css={{ display: "flex", justifyContent: "center" }}>
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px" }}
                >
                  Agregar al carrito
                </Button>
                <Button
                  size="md"
                  shadow
                  color="gradient"
                  css={{ width: "25%", marginTop: "10px", marginLeft: "$5" }}
                >
                  Conoce mas
                </Button>
              </Col>
            </Col>
          </Grid>
        </Grid.Container>

        <Grid.Container
          justify="center"
          css={{
            height: "500px",
            width: "100%",
            backgroundImage: "url(/bannerultimo.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid xs={12} sm={6} alignItems="center">
            <Col css={{ width: "100%" }}>
              <Text weight={"bold"} size={50} css={{ textAlign: "center" }}>
                COMPARAR CAMARAS
              </Text>
              <Button
                size="md"
                shadow
                color="gradient"
                css={{ width: "100%", marginTop: "10px" }}
              >
                Mas informacion
              </Button>
            </Col>
          </Grid>
        </Grid.Container>

        {/*Footer */}
        <Footer />
      </Container>
    </NextUIProvider>
  );
}
