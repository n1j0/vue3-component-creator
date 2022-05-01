---
to: "<%= folder %>/<%= h.changeCase.pascal(name) %>.test.js"
---
<%
    const namePascalCase = h.changeCase.pascal(name)
    const nameKebabCase = h.changeCase.kebab(name)
%>import { mount } from '@vue/test-utils'
import <%= namePascalCase %> from './<%= namePascalCase %>.vue'

describe('<%= namePascalCase %>', () => {
    it('has a data-qa attribute with value "<%= nameKebabCase %>"', () => {
        const wrapper = mount(<%= namePascalCase %>)
        // @TODO: write meaningful tests
        expect(true).toBe(false)
    })
})
