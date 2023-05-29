'use client'

import { BsFacebook, BsFillCartFill, BsInstagram, BsYoutube } from 'react-icons/bs'
import { Container, Navbar } from '@nextui-org/react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <Container xl css={{
      width: '100%'
    }}>
      {/*Navbar */}
      {
        <Navbar variant={"static"}>
          <Navbar.Content hideIn="md">
            <Navbar.Link href="#"> </Navbar.Link>
            <Navbar.Link href="#productos">
              {" "}

            </Navbar.Link>
            <Navbar.Link href="#footer"> </Navbar.Link>
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
        </Navbar>}

      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Link href={'/'}>
            <Image
              width={190}
              height={50}
              src="/logoprueba.png"
              alt="Default Image"
              objectFit="cover"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">

          <Link href={'/camaras'} style={{
            color: 'white'
          }}>
            Camaras
          </Link>

          <Link href={'/aplicaciones'} style={{
            color: 'white'
          }}>
            Aplicaciones
          </Link>

          <Link href={'/accesorios'} style={{
            color: 'white'
          }}>
            Accesorios
          </Link>
          <Link href={'/accesorios'} style={{
            color: 'white'
          }}>
            Complementos de ocio
          </Link>
          <Link href={'/actividad'} style={{
            color: 'white'
          }}>
            Compras por actividad
          </Link>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Link href="#">Ingresar</Navbar.Link>
          <Navbar.Item>
            <BsFillCartFill />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Container>
  )
}

export default Header