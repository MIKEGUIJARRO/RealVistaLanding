import React, { FunctionComponent } from 'react'
import { HiCheckCircle } from 'react-icons/hi2'
import { LandingCard } from './LandingCard'
import { Subheading } from './UI/Typography/Subheading'
import { Heading } from './UI/Typography/Heading'

interface PriceCardProperties {
    title: string
    description: string
    price: string
    benefits: string[]
    purchaseLink: string
}

export const PriceCard: FunctionComponent<PriceCardProperties> = ({ title, description, price, benefits, purchaseLink }) => {
    return (
        <LandingCard className='bg-white p-8 space-y-8'>
            <div className='space-y-2'>
                <Heading variant='h4'>{title}</Heading>
                <div className='flex flex-col xl:flex-row space-x-1 items-start xl:items-end justify-start '>
                    <Heading variant='h2' className='font-extrabold'>${price}</Heading>
                    <Subheading variant='subheading2' className='text-gray-500'>/ Propiedad</Subheading>
                </div>
            </div>

            <ul className='pl-4 space-y-2'>
                {benefits.map((benefit) => (
                    <li key={title + benefit + price} className='flex items-center justify-start space-x-4'>
                        <HiCheckCircle className='text-green-500' size='28' />
                        <span>{benefit}</span></li>
                ))}
            </ul>
            <a target='_blank' href={purchaseLink} className='btn btn-primary w-full'>Empieza ahora</a>
        </LandingCard>
    )
}
