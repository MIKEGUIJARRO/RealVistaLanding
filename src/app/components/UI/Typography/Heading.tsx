import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react'

type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const variantsMapping: Record<HeadingVariants, HeadingTags> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
};

interface HeadingProps extends HTMLAttributes<HTMLElement> {
    variant: HeadingVariants;
    children: ReactNode;
}

export const Heading: FunctionComponent<HeadingProps> = ({ variant, children, className, ...restProps }) => {

    const Component = variantsMapping[variant];

    let classTypo = '';

    if (variant === 'h1') {
        classTypo = classTypo + 'text-5xl'
    } else if (variant === 'h2') {
        classTypo = classTypo + 'text-4xl'
    } else if (variant === 'h3') {
        classTypo = classTypo + 'text-3xl'
    } else if (variant === 'h4') {
        classTypo = classTypo + 'text-2xl'
    } else if (variant === 'h5') {
        classTypo = classTypo + 'text-xl'
    } else if (variant === 'h6') {
        classTypo = classTypo + 'text-lg'
    }

    return (
        <Component className={`font-bold ${classTypo} ${className}`} {...restProps}>
            {children}
        </Component>
    )
}
