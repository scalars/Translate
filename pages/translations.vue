<template>
    <div class="language">
        <v-container fluid>
            <v-row>
                <v-col>
                    <div>Schema</div>
                </v-col>
                <v-divider vertical />
                <v-col>
                    <div>Translations</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component(
    {
        layout: 'application',
        components: {}
    }
)
export default class TranslationsPage extends Vue {
    get application () {
        return this.$store.getters['sessionStorage/getApplication'];
    }
}
</script>

<style lang="scss" scoped>
</style>
