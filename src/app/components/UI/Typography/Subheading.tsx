import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react'

type SubheadingVariants = 'subheading1' | 'subheading2';
type SubheadingTags = 'p';

const variantsMapping: Record<SubheadingVariants, SubheadingTags> = {
    subheading1: 'p',
    subheading2: 'p'
};

interface SubheadingProps extends HTMLAttributes<HTMLElement> {
    variant: SubheadingVariants;
    children: ReactNode;
}

export const Subheading: FunctionComponent<SubheadingProps> = ({ variant, children, className, ...restProps }) => {

    const Component = variantsMapping[variant];

    let classTypo = '';

    if (variant === 'subheading1') {
        classTypo = classTypo + 'text-xl'
    } else if (variant === 'subheading2') {
        classTypo = classTypo + 'text-lg'
    }

    return (
        <Component className={`font-semibold ${classTypo} ${className}`} {...restProps}>
            {children}
        </Component>
    )
}
