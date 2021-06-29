<template>
    <div class="idioms">
        <Loading v-if="loading" />
        <v-data-table
            v-else
            :headers="headers"
            :items="languages"
            :items-per-page="rowsPerPage"
            :search="search"
            :hide-default-footer="languages.length <= rowsPerPage"
        >
            <template #top>
                <div class="table-top-container">
                    <v-text-field
                        v-model="search"
                        class="search-input"
                        :append-icon="'mdi-magnify'"
                        :label="'Search'"
                        single-line
                        hide-details
                    />
                    <slot name="general-options" />
                </div>
            </template>
            <template #[`item.options`]="{ item }">
                <slot name="item-options" :item="item" />
            </template>
        </v-data-table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Loading from '@/components/general/Loader.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';
import { Language } from '@/client/types';

@Component( {
    components: { Loading, GeneralButton }
} )
export default class LanguagesTable extends Vue {
    @Prop( { required: true } ) languages: Language[];
    @Prop( { default: false } ) loading: boolean;
    search: string = '';
    rowsPerPage: number = 10;

    headers: any[] = [
        {
            text: 'Translation',
            align: 'start',
            value: 'namelanguage'
        },
        { text: 'ISO 639-1', value: 'isolanguage' },
        { text: 'Options', value: 'options' }
    ];
}
</script>

<style lang="scss" scoped>
.table-top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    .search-input {
        margin: 0;
        max-width: 250px;
    }
}
</style>
