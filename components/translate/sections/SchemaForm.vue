<template>
    <div class="key">
        <p>{{ section.sectionName }}</p>
        <p>{{ section.description }}</p>
        <p>{{ section.sectionValues }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema } from '@/client/types';

@Component( {} )
export default class SchemaForm extends Vue {
    @Prop() section: Schema;
}
</script>

<style scoped>
</style>
