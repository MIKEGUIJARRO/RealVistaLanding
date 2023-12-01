import { render, screen } from "@testing-library/react"
import { Heading } from "./Heading"

describe('Test <Heading />', () => {
    const hTitle = 'title'
    it('renders h1 tag when variant is h1', () => {
        render(<Heading variant="h1">{hTitle}</Heading>)
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('renders h1 tag when variant is h1', () => {
        render(<Heading variant="h2">{hTitle}</Heading>)
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('renders h1 tag when variant is h1', () => {
        render(<Heading variant="h3">{hTitle}</Heading>)
        expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    it('renders h1 tag when variant is h1', () => {
        render(<Heading variant="h4">{hTitle}</Heading>)
        expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument()
    })

    it('renders h1 tag when variant is h1', () => {
        render(<Heading variant="h5">{hTitle}</Heading>)
        expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument()
    })

    it('renders h1 tag when variant is h1', () => {
        render(<Heading variant="h6">{hTitle}</Heading>)
        expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument()
    })

})