<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="altura"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :hide-spin-buttons="hideSpinButtons"
                :placeholder="placeholder"
                :persistent-placeholder="persistentPlaceholder"
                :rules="[(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 4]"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
        },
        outlined: Boolean,
        dense: Boolean,
        persistentPlaceholder: Boolean,
        hideSpinButtons: Boolean,
        placeholder: [Boolean, String],
        rules: Boolean,
    },
    data() {
        return {
            altura: '',
        };
    },

    watch: {
        altura(novoValor) {
            this.$emit("input", novoValor);
        },
    },
};
</script>

<style scoped>
</style>