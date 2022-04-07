/*
* @jest-environment jsdom
*/
import { shallowMount } from '@vue/test-utils'
import Message from '../Message'

describe('Message Component', () => {
  test('1', () => {
    const wrapper = shallowMount(Message)

    //findAll은 wrapperArray랑 짝꿍
    const wrapperArray = wrapper.findAll('div > *') // div 태그 아래 모든 태그

    expect(wrapperArray.length).toBe(3)
    expect(wrapperArray.at(0).text()).toBe('1')
    expect(wrapperArray.at(1).text()).toBe('2')
    expect(wrapperArray.at(2).text()).toBe('3')
  })
})
