<template>
    <v-app>
        <v-content id="principal">
            <v-container fluid style="margin-top: 80px">
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card>
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>Calculadora IMC</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="6" offset="3">
                                        <v-text-field
                                            label="Idade"
                                            outlined
                                            persistent-placeholder
                                            placeholder="Ex: 25"
                                            dense
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6" offset="3">
                                        <v-text-field
                                            label="Altura"
                                            outlined
                                            persistent-placeholder
                                            placeholder="Ex: 160"
                                            dense
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6" offset="3">
                                        <v-text-field
                                            label="Peso"
                                            outlined
                                            persistent-placeholder
                                            placeholder="Ex: 62"
                                            dense
                                        />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="5" offset="4">
                                        <v-btn color="primary">Calcular</v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#principal{
   background-image: url(https://images.pexels.com/photos/5383194/pexels-photo-5383194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
   background-size: cover;
}
</style>