import { render, screen } from '@testing-library/react'
import HomePage from '../page'

describe("Home Page", () => {
    it("renders home page", () => {
        render(<HomePage/>)
    
        expect(screen.getByText(/Eve/i)).toBeInTheDocument()
    });
})