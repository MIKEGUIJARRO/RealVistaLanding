import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react'

type BodyVariants = 'body1' | 'body2';
type BodyTags = 'p';

const variantsMapping: Record<BodyVariants, BodyTags> = {
    body1: 'p',
    body2: 'p'
};

interface BodyProps extends HTMLAttributes<HTMLElement> {
    variant: BodyVariants;
    children: ReactNode;
}

export const Body: FunctionComponent<BodyProps> = ({ variant, children, className, ...restProps }) => {

    const Component = variantsMapping[variant];

    let classTypo = '';

    if (variant === 'body1') {
        classTypo = classTypo + 'text-base'
    } else if (variant === 'body2') {
        classTypo = classTypo + 'text-sm'
    }

    return (
        <Component className={`font-normal ${classTypo} ${className ? className : ''}`} {...restProps}>
            {children}
        </Component>
    )
}
