<template>
    <v-dialog
        :key="modalId"
        v-model="active"
        style="height: 100%;"
        :width="width"
        :max-width="maxWidth"
        :persistent="persistent"
    >
        <v-card>
            <Toolbar
                v-if="withHeader"
                :title="title"
                elevation="4"
                :color="color"
                :font-color="fontColor"
            >
                <template #content>
                    <slot name="add" />
                </template>
                <template #end>
                    <GeneralButton
                        icon-mode
                        icon="mdi-close"
                        :text="'Close'"
                        @click="active = false"
                    />
                </template>
            </Toolbar>
            <v-card-text class="modal-content">
                <slot />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">

import { Component, Model, Prop, Vue, Watch } from 'nuxt-property-decorator';
import Toolbar from '@/components/general/Toolbar.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';
@Component( { components: { GeneralButton, Toolbar } } )
class Modal extends Vue {
    @Model( 'updateValue', { required: true } ) model: boolean;
    @Prop( { type: String, default: 'modal' } ) modalId: string;
    @Prop( { type: String, default: '' } ) color: string;
    @Prop( { type: String, default: '' } ) fontColor: string;
    @Prop( { type: String, default: 'Modal' } ) title: string;
    @Prop( { type: String, default: '800' } ) width: string;
    @Prop( { type: String, default: '800' } ) maxWidth: string;
    @Prop( { type: Boolean, default: false } ) persistent: boolean;
    @Prop( { type: Boolean, default: true } ) withHeader: boolean;
    active: boolean = false;
    mounted () {
        this.active = this.model;
    }

    @Watch( 'active' )
    onActiveChanged () {
        this.$emit( 'updateValue', this.active );
    }

    @Watch( 'model' )
    onShowModalChanged ( value: boolean ) {
        this.active = value;
    }

    get icons () {
        return this.$store.state.theme.icons;
    }

    // hidding ( value: boolean ) {
    //     if ( !value ) {
    //         this.$emit( 'hide' );
    //     }
    // }
}

export default Modal;

</script>
<style lang="scss" scoped>
    .modal-content {
        max-height: calc(70vh);
        overflow-y: auto;
        padding: 20px 24px 20px!important;
    }
</style>
