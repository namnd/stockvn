import React from 'react'
import renderer from 'react-test-renderer'
import App from '../../src/components/App'

describe('App.tsx', () => {
    it('renders correctly', () => {
        const component = renderer.create(<App />)

        expect(component.root.findByProps({ className: 'app'}).children).toEqual(['Hello'])
    })
})
