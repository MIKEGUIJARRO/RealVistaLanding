import React, { FunctionComponent, ReactNode } from 'react'
import navbarSafari from '../assets/navbar_safari.svg'
import { LandingCard } from './LandingCard'

interface MockupBrowserProps {
    children: ReactNode
}

export const MockupBrowser: FunctionComponent<MockupBrowserProps> = ({ children }) => {
    return (
        <LandingCard>
            <div className="">
                <img className='w-full h-auto' src={navbarSafari.src} />
                <div>
                    {children}
                </div>
            </div>
        </LandingCard>
    )
}
