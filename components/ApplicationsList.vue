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
        this.$store.commit( 'sessionStorage/application', application );
        this.$router.push( { name: 'translations' } );
    }
}
</script>

<style scoped>
.applications-list-container {
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;
}
</style>
