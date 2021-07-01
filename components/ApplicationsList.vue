<template>
    <div class="applications-list-container">
        <Loading
            v-if="loading"
        />
        <ApplicationCard
            v-for="application in applications"
            v-else
            :key="application.id"
            :application="application"
            @selectApplication="selectApplication"
            @editApplication="editApplication"
            @deleteApplication="deleteApplication"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ApplicationCard from '@/components/ApplicationCard.vue';
import Loading from '@/components/general/Loader.vue';
import { Application } from '@/client/types';

@Component( {
    components: { ApplicationCard, Loading }
} )
export default class ApplicationsList extends Vue {
    @Prop( { default () { return []; } } ) applications: Application[];
    @Prop( { type: Boolean, default: false } ) loading: boolean;

    selectApplication ( application: Application ) {
        this.$emit( 'selectApplication', application );
    }

    editApplication ( application: Application ) {
        this.$emit( 'editApplication', application );
    }

    deleteApplication ( application: Application ) {
        this.$emit( 'deleteApplication', application );
    }
}
</script>

<style lang="scss" scoped>
.applications-list-container {
    width: 100%;
    padding: 30px 0;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px;
    @include mobile {
        grid-template-columns: auto;
        padding: 15px 0;
    }
}
</style>
