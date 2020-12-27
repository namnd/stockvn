import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../../src/components/Header'

describe('Header.tsx', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Header />)

        expect(component.root.findByProps({ className: 'app'}).children).toEqual(['This is header'])
    })
})
