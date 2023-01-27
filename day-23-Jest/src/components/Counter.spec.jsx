import { render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('<Counter/>', () => {
  it('should init with counter zero', () => {
    render(<Counter initialCount={0} />)

    const value = screen.getByText('Count: 0')

    expect(value).toBeInTheDocument()
    // screen.debug()
  })
})
