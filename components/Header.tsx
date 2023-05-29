'use client'

import { BsFacebook, BsFillCartFill, BsInstagram, BsYoutube } from 'react-icons/bs'

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@nextui-org/react'
import React from 'react'

const Header = () => {
  return (
    <div>
      {/*Navbar */}
      <Navbar variant={"static"}>
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
            width={130}
            height={50}
            src="/logonuevo.png"
            alt="Default Image"
            objectFit="cover"
          />
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
    </div>
  )
}

export default Header