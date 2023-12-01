import React from 'react'

import { HiMiniCubeTransparent } from 'react-icons/hi2'
import { Body } from './components/UI/Typography/Body'
import { Heading } from './components/UI/Typography/Heading'
import { MockupBrowser } from './components/MockupBrowser'
import { Subheading } from './components/UI/Typography/Subheading'
import { LandingCard } from './components/LandingCard'
import { PriceCard } from './components/PriceCard'
import buildspaceLogo from '../app/assets/buildspace.svg'
import tecLogo from '../app/assets//tec.svg'
import house from '../app/assets/house.png'
import property_ss from '../app/assets/property_ss.png'
import benefits from '../app/assets/benefits.png'


export default function Home() {
  const link = 'https://forms.fillout.com/t/uqrDLVdQpWus'
  return (
    <div className='' id='hero'>
      {/* Navbar */}
      <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
        <div className='container m-auto px-16'>
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href='#virtual_tour'>Recorrido Virtual</a></li>
                <li><a href='#results'>Resultados</a></li>
                <li><a href='#prices'>Precios</a></li>
              </ul>
            </div>
            <a href='#hero' className="btn btn-ghost text-md">RealVista</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href='#virtual_tour'>Recorrido Virtual</a></li>
              <li><a href='#results'>Resultados</a></li>
              <li><a href='#prices'>Precios</a></li>
            </ul>
          </div>
          <div className="navbar-end flex justify-end">
            <a href={link} target='_blank' className="btn">Cotiza tu recorrido</a>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-16 pt-24'>
        {/* Header */}
        <div className='space-y-24'>
          <div className='flex flex-col justify-center items-center space-y-8'>
            <div className='inline-flex justify-center items-center px-8 py-4 bg-orange-100 text-orange-600 rounded-full space-x-2'>
              <HiMiniCubeTransparent size={'24'} />
              <Body variant='body1' className='text-center'>Agenda el scan de tu propiedad y acelera tu proceso de venta</Body>
            </div>
            <div className='max-w-2xl w-full text-center m-auto'>
              <Heading variant='h1'>Creamos recorridos virtuales y hacemos que tu propiedad sea accesible para todos</Heading>
            </div>
            <div className='text-center'>
              <a href={link} target='_blank' className='btn btn-primary'>
                <span>Cotiza tu recorrido</span>
              </a>
            </div>
          </div>
          {/* Browser - Video */}
          <MockupBrowser>
            <video className='aspect-video' controls={false} autoPlay={true} muted={true} loop={true}>
              <source src='https://res.cloudinary.com/dzvqqr5hv/video/upload/v1701416532/walkthrough_ewypr2.mp4' type="video/mp4" />
            </video>
          </MockupBrowser>
        </div>

        {/* Wall of love */}
        <div className='space-y-8 text-center pt-40'>
          <Subheading variant='subheading1'>
            Ellos confian en nosotros
          </Subheading>
          <div className="flex justify-center space-x-8" style={{ filter: 'brightness(0%)' }}>
            <img src={tecLogo.src} />
            <img src={buildspaceLogo.src} />
          </div>
        </div>

        {/* Recorrido */}
        <div className='space-y-8 pt-40' id='virtual_tour'>
          <div>
            <Subheading variant='subheading1' className='text-cyan-600'>Recorrido Virtual</Subheading>
            <Heading variant='h2' className='pt-4 mb-2'>Una solución para la era digital</Heading>
            <Body variant='body1' className='max-w-3xl'>Te ayudamos a digitalizar tu propiedad, generar contenido para redes sociales y compartirlo con tus clientes de una manera sencilla.</Body>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-3 lg:col-span-2 order-1'>
              <LandingCard className='w-full h-full min-h-[120px]'>
                <div className='bg-gradient-to-tr from-gray-200 to-gray-100 inset-0 p-8'>
                  <div className='w-full h-full flex flex-col md:flex-row md:space-x-16'>
                    <div className='flex-1 shrink'>
                      <img src={benefits.src} className=' w-full h-auto' />
                    </div>
                    <div className='flex-1 flex flex-col justify-between pt-8 lg:py-8 space-y-2 text-center md:text-start'>
                      <Subheading variant='subheading1'>Vende más rápido</Subheading>
                      <Subheading variant='subheading1'>Atrae más clientes calificados</Subheading>
                      <Subheading variant='subheading1'>Ahorra tiempo en ventas físicas</Subheading>
                      <Subheading variant='subheading1'>Incrementa las vistas de tu propiedad</Subheading>
                    </div>
                  </div>
                </div>
              </LandingCard >
            </div>
            <div className='rounded-2xl col-span-3 lg:order-3 lg:col-span-2 order-2 pb-8 lg:pb-0'>Beneficios de nuestro servicio</div>
            <div className='col-span-3 lg:col-span-1 min-h-[200px] order-3 lg:order-2'>
              <LandingCard className='relative w-full h-full bg-gradient-to-tr from-sky-300 to-cyan-300 flex justify-center items-center p-8'>
                <img src={house.src} className='w-full h-auto' />
              </LandingCard>
            </div>
            <div className='rounded-2xl col-span-3 lg:col-span-1 order-4'>Alcanza a mas clientes con menos esfuerzo</div>
          </div>
        </div>

        <div className='space-y-8 pt-40' id='results'>
          <div>
            <Heading variant='h2' className='pt-4 mb-2'>Recorridos que dan resultados</Heading>
            <Body variant='body1' className='max-w-3xl'>Una vez que escanemos tu propiedad, lo subimos a nuestra plataforma para que lo compartas con tus clientes.</Body>
          </div>
          <MockupBrowser>
            <div className='aspect-video'>
              <img src={property_ss.src} />
            </div>
          </MockupBrowser>
        </div>



        {/* Extra */}
        {/*  <div className='space-y-8 pt-40'>
                    <div>
                        <Subheading variant='subheading1' className='text-purple-500'>Contenido extra</Subheading>
                        <Heading variant='h2' className='pt-4 mb-2'>Caracteristicas extra</Heading>
                        <Body variant='body1' className='max-w-3xl'>Utiliza inteligencia artificial para ayudarte a crear una publicación inmobiliaria completa en segundos, enfatizar elementos del recorrido virtual y resumir el tour en un parrafo.</Body>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <LandingCard className='col-span-2 bg-gradient-to-tr from-gray-200 to-gray-100'>
                            <div className='h-full flex justify-center items-center p-8'>
                                <img src={domain} className='rounded-2xl object-cover' />
                            </div>
                        </LandingCard>
                        <div className='aspect-square bg-gradient-to-tr from-cyan-300 to-cyan-500 col-span-1 rounded-2xl  flex justify-center items-center p-8'>
                        </div>
                        <div className='rounded-2xl col-span-1'>Dominio personalizado</div>
                    </div>
                </div> */}

        {/* Prices */}
        <div className='space-y-8 pt-40' id='prices'>
          <div>
            <Subheading variant='subheading1' className='text-blue-500'>Costos de nuestro servicio</Subheading>
            <Heading variant='h2' className='pt-4 mb-2'>Precios simples y transparentes</Heading>
            <Body variant='body1' className='max-w-3xl'>Sin riesgos, cancela en cualquier momento.</Body>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
            <PriceCard
              title='Básico'
              description='Perfecto para propiedades individuales'
              price='3,500'
              purchaseLink={link}
              benefits={[
                'Hasta 150m2',
                'Tour virtual',
                'Etiquetas Interactivas',
                'Paquete de fotos 2D',
                'Paquete de fotos 360',
                '1 mes de hospedaje gratis'
              ]}
            />
            <PriceCard
              title='Mediano'
              description='Ideal para propiedades mas grandes'
              price='4,000'
              purchaseLink={link}
              benefits={[
                '151 a 250m2',
                'Tour virtual',
                'Etiquetas Interactivas',
                'Paquete de fotos 2D',
                'Paquete de fotos 360',
                '1 mes de hospedaje gratis'
              ]}
            />
            <PriceCard
              title='Grande'
              description='Perfecto para propiedades'
              price='5,000'
              purchaseLink={link}
              benefits={[
                '251 a 500m2',
                'Tour virtual',
                'Etiquetas Interactivas',
                'Paquete de fotos 2D',
                'Paquete de fotos 360',
                '1 mes de hospedaje gratis'
              ]}
            />

          </div>
        </div>
        <div className='space-y-8 pt-40 pb-40'>
          <div className='flex flex-col justify-start items-center text-center'>
            <div className='max-w-lg space-y-4'>
              <Heading variant='h2' className='pt-4 mb-2'>¿Lista para comenzar a digitalizar tus propiedades?</Heading>
              <a target='_blank' href={link} className='btn btn-primary'>Cotiza tu recorrido</a>
            </div>
          </div>

        </div>

      </div>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <aside>
          <p className="font-bold">
            RealVista. <br />Somos el futuro de la industria inmobiliaria
          </p>
          <p>Copyright © 2023 - Todos los derechos reservados</p>
        </aside>
      </footer>
    </div>
  )
}
