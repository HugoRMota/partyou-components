<template>
    <teleport to="head">
        <title>{{ title }}</title>
        <meta 
            v-for="(tag, index) in tags"
            :key="index"
            :name="tag.name"
            :content="tag.content"
        >
    </teleport>
</template>

<script>
export default {
    name: 'py-meta',
    
    props: {
        title: {
            type: String,
            default: 'Partyou'
        },
        tags: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>