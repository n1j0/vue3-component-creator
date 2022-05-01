---
to: "./<%= h.changeCase.pascal(name) %>.vue"
---
<%
    const namePascalCase = h.changeCase.pascal(name)
    const nameKebabCase = h.changeCase.kebab(name)
%><script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: '<%= namePascalCase %>',
    setup() {
        return {
            // @TODO: return data for template
        }
    },
})
</script>

<template>
    <div class="<%= nameKebabCase %>" data-qa="<%= nameKebabCase %>">
        <!-- @TODO: add your template code here -->
    </div>
</template>

<style scoped>
.<%= nameKebabCase %> {
    // @TODO: add styles or remove style block if not needed
}
</style>




