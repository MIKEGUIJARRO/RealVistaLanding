import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Subheading } from "./Subheading";

describe('Test <Subheading />', () => {
    const pContent = 'Subheading Content'

    it('renders p tag with custom class when variant is body1', () => {
        const { container } = render(<Subheading variant="subheading1">{pContent}</Subheading>)
        const p = container.querySelector('p')

        expect(p).not.toBeNull()
        expect(p).toHaveClass('text-xl')
        expect(screen.getByText(pContent)).not.toBeNull()
    })

    it('renders p tag with custom class when variant is body1', () => {
        const { container } = render(<Subheading variant="subheading2">{pContent}</Subheading>)
        const p = container.querySelector('p')

        expect(p).not.toBeNull()
        expect(p).toHaveClass('text-lg')
        expect(screen.getByText(pContent)).not.toBeNull()
    })
})