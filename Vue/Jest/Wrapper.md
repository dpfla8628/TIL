```vue
// 테스트에서 컴포넌트를 연결할 때 mount 사용
import { mount } from '@vue/test-utils'
import Foo from './Foo.vue'

const wrapper = mount(Foo)

expect(wrapper.attributes().id).toBe('foo')
expect(wrapper.attributes('id')).toBe('foo')

expect(wrapper.classes()).toContain('bar')
expect(wrapper.classes('bar')).toBe(true)

expect(wrapper.contains('p')).toBe(true)
expect(wrapper.contains(Bar)).toBe(true)

wrapper.vm.$emit('foo')
wrapper.vm.$emit('foo', 123)
//{foo: [[], [123]]}
await wrapper.vm.$nextTick() // Wait until $emits have been handled
expect(wrapper.emitted().foo).toBeTruthy()
expect(wrapper.emitted().foo.length).toBe(2)
expect(wrapper.emitted().foo[1]).toEqual([123])

expect(wrapper.exists()).toBe(true)
expect(wrapper.find('does-not-exist').exists()).toBe(false)

const div = wrapper.findAll('div').at(0) // Returns: {WrapperArray}
expect(div.is('div')).toBe(true)

expect(wrapper.is('div')).toBe(true)

```
