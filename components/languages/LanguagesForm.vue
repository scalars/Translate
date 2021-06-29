<template>
    <div class="languages-form-container">
        <v-form class="languages-form">
            <v-select
                v-model="selectedLanguages"
                :items="languages"
                return-object
                multiple
                :readonly="loading"
                chips
                deletable-chips
                :item-text="getLanguageLabel"
                label="Languages"
            >
                <!--                TODO Evaluate if this alternative looks better -->
                <!--                <template #item="{item}">-->
                <!--                    <v-avatar size="22" class="mx-1">-->
                <!--                        <v-img-->
                <!--                            :src="item.flag"-->
                <!--                        />-->
                <!--                    </v-avatar>-->
                <!--                    <div class="ml-2 mr-2">-->
                <!--                        {{ getLanguageLabel( item ) }}-->
                <!--                    </div>-->
                <!--                </template>-->
            </v-select>
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
import { Language } from '@/client/types';

@Component( {
    components: { GeneralButton }
} )
export default class LanguagesForm extends Vue {
    @Prop( { required: true } ) languages: Language[];
    @Prop( {} ) addedLanguages: Language[];
    @Prop( { default: false } ) loading: boolean;
    selectedLanguages: Language[] = [];

    beforeMount () {
        this.selectedLanguages = this.addedLanguages || [];
    }

    getLanguageLabel ( language: Language ) {
        return `${language.isolanguage} | ${language.namelanguage} | ${language.nativename}`;
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
