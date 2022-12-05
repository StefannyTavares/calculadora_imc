<template>
    <v-row>
        <v-col>
            <v-text-field
                v-model="model"
                :label="label"
                :outlined="outlined"
                :dense="dense"
                :hide-spin-buttons="hideSpinButtons"
                :placeholder="placeholder"
                :persistent-placeholder="persistentPlaceholder"
            />
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: {
        model: {
            type: String
        },
        label: {
            type: String,
        },
        outlined: Boolean,
        dense: Boolean,
        persistentPlaceholder: Boolean, 
        hideSpinButtons: Boolean, 
        placeholder: Boolean,
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>