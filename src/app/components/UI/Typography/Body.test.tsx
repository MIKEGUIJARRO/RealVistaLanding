import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Body } from "./Body";

describe('Test <Body />', () => {
    const bodyContent = 'Body Content'
    it('renders p tag with custom class when variant is body1', () => {
        const { container } = render(<Body variant="body1">{bodyContent}</Body>)
        const p = container.querySelector('p')
        expect(p).not.toBeNull()
        expect(p).toHaveClass('text-base')
    })

    it('renders p tag with custom class when variant is body2', () => {
        const { container } = render(<Body variant="body2">{bodyContent}</Body>)
        const p = container.querySelector('p')
        expect(p).not.toBeNull()
        expect(p).toHaveClass('text-sm')
    })
})