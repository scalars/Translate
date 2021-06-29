<template>
    <v-toolbar dense :elevation="elevation" :class="`${color} ${fontColor}--text`">
        <slot name="start">
            <v-toolbar-title v-if="title">
                {{ title }}
            </v-toolbar-title>
        </slot>
        <v-spacer v-if="$slots.content" />
        <div v-if="$slots.content" class="content">
            <slot name="content" />
        </div>
        <v-spacer v-if="$slots.end" />
        <slot name="end" />
    </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component
class Toolbar extends Vue {
    @Prop( { type: String, default: '' } ) color: string;
    @Prop( { type: String, default: '' } ) fontColor: string;
    @Prop( { type: String, default: '' } ) title: string;
    @Prop( { type: String, default: '0' } ) elevation: string;
}
export default Toolbar;
</script>
<style lang="scss" scoped>
    .content {
        display: flex;
        flex-flow: row;
        max-width: 40%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
</style>
