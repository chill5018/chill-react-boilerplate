import App from '../src/components/App'
import React from 'react'
import { shallow } from 'enzyme'


describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.find('h1').text()).toBe('Chill-start to React')
    expect(wrapper).toMatchSnapshot()
  })
})
