<template>
    <div class="url-display-container">
        <GeneralButton
            :text="`Copy URL`"
            icon="mdi-content-copy"
            icon-mode
            @click="copyUrl"
        />
        <a class="url-link" target="_blank" rel.noopener :href="url">
            <GeneralButton
                :text="`Open URL`"
                icon="mdi-open-in-new"
                icon-mode
            />
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import GeneralButton from '@/components/general/GeneralButton.vue';

@Component( { components: { GeneralButton } } )
export default class UrlDisplay extends Vue {
    @Prop( { required: true } ) url: any;

    get icons () {
        return this.$store.state.theme.icons;
    }

    copyUrl () {
        const el = document.createElement( 'textarea' );
        el.value = this.url;
        document.body.appendChild( el );
        el.select();
        document.execCommand( 'copy' );
        document.body.removeChild( el );
    }
}

</script>

<style lang="scss" scoped>
.url-display-container {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: "----";
    .url-link {
        text-decoration: none;
        margin: 0 5px;
    }
}
</style>
