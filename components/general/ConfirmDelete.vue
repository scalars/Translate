<template>
    <div class="confirm-delete-container">
        <div class="confirm-content">
            <v-icon
                class="confirm-icon"
                large
                color="error"
            >
                {{ 'mdi-danger' }}
            </v-icon>
            <div class="confirm-text">
                {{ `Deleting '${itemName}', ${confirmText}` }}
            </div>
        </div>
        <v-divider />
        <GeneralButton
            :text="'Confirmar'"
            color="error"
            :loading="loading"
            @click="$emit('confirm')"
        />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import GeneralButton from '~/components/general/GeneralButton.vue';

@Component( { components: { GeneralButton } } )
export default class ConfirmDelete extends Vue {
    @Prop( { default: false } ) loading: boolean;
    @Prop() itemName: string;
    @Prop() confirmText: string;

    get icons () {
        return this.$store.state.theme.icons;
    }
}
</script>
<style scoped lang="scss">
.confirm-delete-container {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    .confirm-content {
        width: 100%;
        display: flex;
        margin-bottom: 20px;
        .confirm-icon {
            margin: 10px;
        }
        .confirm-text {
            width: 100%;
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            font-weight: bold;
            text-align: center;
        }
    }
}

</style>
