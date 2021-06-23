<template>
    <v-tooltip :disabled="!iconMode || !text" :right="rightTooltip" :top="topTooltip" :left="leftTooltip" :bottom="bottomTooltip || defaultSide">
        <template #activator="{ on }">
            <v-btn
                :class="showAsIcon ? '' : color"
                :loading="loading"
                :disabled="disabled"
                :plain="plain"
                :icon="showAsIcon"
                :width="width"
                v-on="on"
                @click="$emit('click')"
            >
                <v-icon
                    v-if="icon"
                    :color="showAsIcon ? color : ''"
                    :style="{ paddingRight: !iconMode ? '5px' : '' }"
                >
                    {{ icon }}
                </v-icon>
                {{ showAsIcon ? '' : text }}
            </v-btn>
        </template>
        <span>{{ text }}</span>
    </v-tooltip>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
@Component( {} )
export default class GeneralButton extends Vue {
    @Prop( { type: String, default: '' } ) text: string;
    @Prop( { type: String, default: '' } ) color: string;
    @Prop( { type: String, default: '' } ) icon: string;
    @Prop( { type: String, default: '' } ) width: string;
    @Prop( { type: Boolean, default: false } ) disabled: boolean;
    @Prop( { type: Boolean, default: false } ) plain: boolean;
    @Prop( { type: Boolean, default: false } ) loading: boolean;
    @Prop( { type: Boolean, default: true } ) responsive: boolean;
    @Prop( { type: Boolean, default: false } ) iconMode: boolean;
    @Prop( { type: Boolean, default: false } ) leftTooltip: boolean;
    @Prop( { type: Boolean, default: false } ) rightTooltip: boolean;
    @Prop( { type: Boolean, default: false } ) topTooltip: boolean;
    @Prop( { type: Boolean, default: false } ) bottomTooltip: boolean;

    get showAsIcon () {
        return ( this.responsive && this.$vuetify.breakpoint.smAndDown ) || this.iconMode;
    }

    get defaultSide (): boolean {
        return !( this.rightTooltip || this.leftTooltip || this.topTooltip || this.bottomTooltip );
    }
}
</script>
