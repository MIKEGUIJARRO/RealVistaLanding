import React, { FunctionComponent, ReactNode } from 'react'

interface LandingCard {
    children: ReactNode
    className?: string
}

export const LandingCard: FunctionComponent<LandingCard> = ({ children, className }) => {
    return (
        <div className={`shadow-md border border-base-300 border-solid rounded-2xl overflow-hidden ${className ? className : ''}`}>{children}</div>
    )
}
