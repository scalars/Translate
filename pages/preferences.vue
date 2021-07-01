<template>
    <div>
        <v-subheader>Interface Theme</v-subheader>
        <v-select
            v-model="theme"
            :value="theme"
            :items="themes"
            filled
            prepend-inner-icon="mdi-theme-light-dark"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component( { components: {} } )
export default class Preferences extends Vue {
    themes: string[] = ['Dark', 'Light'];
    theme: string = 'Dark';

    @Watch( 'theme' )
    onThemeChanged () {
        this.changeTheme();
    }

    changeTheme () {
        this.$vuetify.theme.dark = this.theme === 'Dark';
    }
}
</script>
