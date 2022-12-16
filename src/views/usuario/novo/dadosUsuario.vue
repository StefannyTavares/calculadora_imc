<template>
    <div>
        <v-row>
            <v-col cols="8 mt-8" offset="2" id="principal">
                <v-card elevation="12">
                <v-toolbar> Cadastro Usuário </v-toolbar>
                    <v-row>
                        <v-col cols="5 mt-5 pl-15">
                            <v-text-field 
                                v-model="dadosUsuario.usuario"
                                label="Usuário" 
                                required
                                outlined 
                                dense 
                                placeholder="Admin"
                                persistent-placeholder
                                :rules="nomePessoa"
                            />
                        </v-col>
                        <v-col cols="3 mt-5 pl-5">
                            <v-text-field 
                                v-model="dadosUsuario.senha"
                                label="Senha" 
                                required
                                outlined 
                                dense 
                                placeholder="******"
                                persistent-placeholder
                                counter=""
                                :rules="senhaPessoa"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1" 
                            />
                        </v-col>
                        <v-col cols="3 mt-5">
                            <v-text-field 
                                v-model="confirmacaoSenha"
                                label="Confirmação senha" 
                                required
                                outlined 
                                dense 
                                placeholder="******"
                                persistent-placeholder
                                counter=""
                                :rules="senhaPessoa"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1" 
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return{
            confirmacaoSenha: '',
            show1: false,
            nomePessoa: [(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 100 || 'Digite o seu usuário'],
            senhaPessoa: [(v) => !!v || 'Campo Obrigatório', (v) => v.length >= 6 || 'No mínimo 6 dígitos'],
        }
    },

    computed: {
        ...mapGetters('usuario', ['dadosUsuario']),
    },
};
</script>

<style scoped>
</style>