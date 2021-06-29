<template>
    <v-sheet class="loading primary--text" :height="height" :width="width">
        <v-progress-circular
            indeterminate
            rounded
        />
    </v-sheet>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
@Component
export default class Loading extends Vue {
    @Prop( { type: String, default: '100%' } ) height: string;
    @Prop( { type: String, default: '100%' } ) width: string;
}
</script>
<style lang="scss" scoped>
.loading {
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
