import { mount } from '@vue/test-utils'
import YourComponentName from './YourComponentName.vue'

describe('YourComponentName', () => {
    it('has a data-qa attribute with value "your-component-name"', () => {
        const wrapper = mount(YourComponentName)
        // @TODO: write meaningful tests
        expect(true).toBe(false)
    })
})
