<template>
    <v-card
        hover
        :width="$vuetify.breakpoint.smAndDown ? '100%' : '300px'"
        style="margin: auto; display: flex; justify-content: center; align-items: center; flex-flow: column;"
    >
        <v-card-title class="text-h5" @click="selectApplication">
            {{ application.name }}
        </v-card-title>

        <div style="display: flex">
            <v-chip
                v-if="!application.languages || application.languages.length === 0"
            >
                NONE
            </v-chip>
            <v-chip
                v-for="(lang, index) in application.languages.slice(0,4)"
                :key="index"
                :class="{ 'mx-1': true, 'primary': lang.isolanguage === application.defaultLanguage }"
            >
                {{ lang.isolanguage }}
            </v-chip>
            <v-chip
                v-if="application.languages.length > 4"
            >
                ...
            </v-chip>
        </div>

        <v-card-actions>
            <GeneralButton
                icon-mode
                icon="mdi-eye"
                :text="'Show Application'"
                @click="selectApplication"
            />
            <GeneralButton
                icon-mode
                icon="mdi-pencil"
                :text="'Edit Application'"
                @click="editApplication"
            />
            <GeneralButton
                icon-mode
                icon="mdi-delete"
                :text="'Delete Application'"
                @click="deleteApplication"
            />
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Application } from '@scalars/cli';
import GeneralButton from '@/components/general/GeneralButton.vue';

@Component( {
    components: { GeneralButton }
} )

export default class ApplicationCard extends Vue {
    @Prop( { default () { return {}; } } ) application: Application;

    selectApplication () {
        this.$emit( 'selectApplication', this.application );
    }

    editApplication () {
        this.$emit( 'editApplication', this.application );
    }

    deleteApplication () {
        this.$emit( 'deleteApplication', this.application );
    }
}
</script>

<style lang="scss" scoped>
</style>
