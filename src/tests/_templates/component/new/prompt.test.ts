const cliPrompt = require('../../../../_templates/component/new/prompt')

describe('Prompt', () => {
    it('exports two cli steps', () => {
        expect(cliPrompt).toHaveProperty('length', 2)
    })

    it('asks for component name in first step', () => {
        expect(cliPrompt[0]).toHaveProperty('type', 'input')
        expect(cliPrompt[0]).toHaveProperty('name', 'name')
    })

    it('asks for folder in second step', () => {
        expect(cliPrompt[1]).toHaveProperty('type', 'input')
        expect(cliPrompt[1]).toHaveProperty('name', 'folder')
    })
})
