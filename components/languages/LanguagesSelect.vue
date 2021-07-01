<template>
    <v-select
        v-model="inputValue"
        :items="languages"
        return-object
        :multiple="multiple"
        :disabled="disabled"
        chips
        deletable-chips
        filled
        :item-text="getLanguageLabel"
        :label="label"
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
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Watch } from 'nuxt-property-decorator';
import GeneralButton from '@/components/general/GeneralButton.vue';
import { Language } from '@/client/types';

@Component( {
    components: { GeneralButton }
} )
export default class LanguagesSelect extends Vue {
    @Model( 'updateValue', { required: true } ) model: Language[];
    @Prop( {} ) languages: Language[];
    @Prop( { type: Boolean, default: false } ) multiple: boolean;
    @Prop( { type: Boolean, default: false } ) disabled: boolean;
    @Prop( { default: 'Languages' } ) label: string;
    inputValue: Language | Language[] | null = null;

    @Watch( 'inputValue' )
    onInputValueChanged () {
        this.$emit( 'updateValue', this.inputValue );
    }

    @Watch( 'model' )
    onModelChanged () {
        this.inputValue = this.model;
    }

    mounted () {
        this.inputValue = this.model;
    }

    getLanguageLabel ( language: Language ) {
        return `${language.isolanguage} | ${language.namelanguage} | ${language.nativename}`;
    }
}
</script>

<style lang="scss" scoped>
</style>
