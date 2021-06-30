<template>
    <div class="section-values-input-container">
        <div class="section-values-header">
            <v-subheader>Section Values</v-subheader>
            <GeneralButton
                icon-mode
                text="Add Section Value"
                icon="mdi-plus"
                @click="addSectionValue"
            />
        </div>
        <div
            v-for="sectionValue in inputValue"
            :key="sectionValue.id"
            class="section-value"
        >
            <v-text-field
                v-model="sectionValue.key"
                label="Name"
                filled
                full-width
                :rules="[rules.required, rules.validSectionName]"
                @input="sendChanges"
            />
            <v-textarea
                v-model="sectionValue.suggestion"
                filled
                label="Suggestion"
                full-width
                rows="1"
                auto-grow
                @input="sendChanges"
            />
            <GeneralButton
                class="mt-2"
                icon-mode
                text="Delete Section Value"
                icon="mdi-delete"
                @click="deleteSectionValue(sectionValue)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Model, Prop } from 'nuxt-property-decorator';
import GeneralButton from '@/components/general/GeneralButton.vue';
import { uuid } from 'vue-uuid';
interface SectionValue {
    id: string,
    key: string,
    suggestion: string
}

@Component( { components: { GeneralButton } } )
export default class SectionValuesInput extends Vue {
    @Model( 'updateValue', { required: true } ) model: SectionValue[];
    @Prop( {} ) rules: any;
    inputValue: SectionValue[] = [];

    @Watch( 'inputValue', { immediate: true } )
    onInputValueChanged () {
        this.sendChanges();
    }

    beforeMount () {
        this.inputValue = this.model;
    }

    sendChanges () {
        this.$emit( 'updateValue', this.inputValue );
    }

    addSectionValue () {
        const newSectionValue: SectionValue = {
            id: uuid.v1(),
            key: '',
            suggestion: ''
        };
        if ( !this.inputValue ) { this.inputValue = []; }
        this.inputValue.push( newSectionValue );
    }

    deleteSectionValue ( label: SectionValue ) {
        const labelIndex = this.inputValue.findIndex( ( currentSectionValue: SectionValue ) => currentSectionValue.id === label.id );
        if ( labelIndex >= 0 ) {
            this.inputValue.splice( labelIndex, 1 );
        }
    }
}
</script>
<style lang="scss" scoped>
.section-values-input-container {
    width: 100%;
    .section-values-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .section-value {
        display: flex;
        gap: 15px;
        width: 100%;
        margin: 15px 0;
        @include mobile {
            flex-flow: column;
            justify-content: center;
            margin: 30px 0;
        }
    }
}
</style>
