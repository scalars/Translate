<template>
    <div class="schema-item-container">
        <h2 @click="selectSection()">
            {{ schema.sectionName }}
        </h2>
        <div class="schema-item-actions">
            <GeneralButton
                icon-mode
                icon="mdi-book-open-page-variant"
                @click="selectSection()"
            />
            <GeneralButton
                icon-mode
                icon="mdi-pencil"
                @click="editSection()"
            />
            <GeneralButton
                icon-mode
                icon="mdi-delete"
                @click="deleteSection()"
            />
        </div>
        <Modal :show-modal="show" @hide="show=false">
            <SchemaForm
                :section="schema"
            />
        </Modal>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Schema } from '@/client/types';
import GeneralButton from '@/components/general/GeneralButton.vue';
import SchemaForm from '@/components/translate/sections/SchemaForm.vue';
import Modal from '@/components/general/Modal.vue';

@Component(
    {
        layout: 'application',
        name: 'SchemaDisplay',
        components: {
            GeneralButton,
            SchemaForm,
            Modal
        }
    }
)
export default class SchemaItem extends Vue {
    @Prop( { required: true } ) schema: Schema;
    show:boolean = false;

    selectSection () {
        console.log( 'selecting' );
        console.log( this.schema );
        this.show = true;
    }

    editSection () {
        console.log( 'editing' );
        console.log( this.schema );
    }

    deleteSection () {
        console.log( 'deleting' );
        console.log( this.schema );
    }
}
</script>

<style lang="scss" scoped>
.schema-item-container {
    display: flex;
    .schema-item-actions {
        display: flex;
    }
}
</style>
