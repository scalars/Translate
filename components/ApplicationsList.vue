<template>
    <div class="applications-list-container">
        <ApplicationCard
            v-for="application in applications"
            :key="application.id"
            :application="application"
            @selectApplication="selectApplication"
            @deleteApplication="selectApplication"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ApplicationCard from '@/components/ApplicationCard.vue';
import { Application } from '@/client/types';

@Component( {
    components: { ApplicationCard }
} )
export default class ApplicationsList extends Vue {
    @Prop( { default () { return []; } } ) applications: Application[];

    selectApplication ( application: Application ) {
        this.$store.commit( 'sessionStorage/setApplication', application );
        this.$router.push( { name: 'translations' } );
    }
}
</script>

<style lang="scss" scoped>
.applications-list-container {
    padding: 30px 0;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 15px;
    @include mobile {
        grid-template-columns: auto;
    }
}
</style>
