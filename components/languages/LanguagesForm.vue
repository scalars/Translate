<template>
    <div class="languages-form-container">
        <v-form class="languages-form">
            <LanguagesSelect
                v-model="selectedLanguages"
                :languages="languages"
                :disabled="loading"
                multiple
            />
        </v-form>
        <GeneralButton
            :width="$vuetify.breakpoint.smAndDown ? '' : '200px'"
            :loading="loading"
            text="Save"
            @click="saveLanguages"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import GeneralButton from '@/components/general/GeneralButton.vue';
import LanguagesSelect from '@/components/languages/LanguagesSelect.vue';
import { Language } from '@/client/types';

@Component( {
    components: { GeneralButton, LanguagesSelect }
} )
export default class LanguagesForm extends Vue {
    @Prop( { required: true } ) languages: Language[];
    @Prop( {} ) addedLanguages: Language[];
    @Prop( { default: false } ) loading: boolean;
    selectedLanguages: Language[] = [];

    beforeMount () {
        this.selectedLanguages = this.addedLanguages || [];
    }

    saveLanguages () {
        this.$emit( 'saveLanguages', this.selectedLanguages );
    }
}
</script>

<style lang="scss" scoped>
.languages-form-container {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    padding: 15px;
    .languages-form {
        width: 100%;
        margin-bottom: 15px;
    }
}
</style>
