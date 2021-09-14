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
            <template #[`item.json`]="{ item }">
                <UrlDisplay
                    :url="getJsonUrl(item)"
                />
            </template>
            <template #[`item.options`]="{ item }">
                <slot name="item-options" :item="item" />
            </template>
        </v-data-table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Language } from '@scalars/cli';
import Loading from '@/components/general/Loader.vue';
import GeneralButton from '@/components/general/GeneralButton.vue';
import UrlDisplay from '@/components/general/UrlDisplay.vue';

@Component( {
    components: { Loading, GeneralButton, UrlDisplay }
} )
export default class LanguagesTable extends Vue {
    @Prop( { required: true } ) languages: Language[];
    @Prop( { default: false } ) loading: boolean;
    @Prop( { default: '' } ) baseJsonUrl: string;
    search: string = '';
    rowsPerPage: number = 10;

    headers: any[] = [
        {
            text: 'Translation',
            align: 'start',
            value: 'namelanguage'
        },
        { text: 'ISO', value: 'isolanguage' },
        { text: 'JSON', value: 'json' },
        { text: 'Options', value: 'options' }
    ];

    getJsonUrl ( lang: Language ) {
        return `${this.baseJsonUrl}/${lang.isolanguage?.toLowerCase()}.json`;
    }
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
        padding: 0;
        max-width: 220px;
    }
}
</style>
