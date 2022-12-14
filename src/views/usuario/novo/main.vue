<template>
    <v-card color= "#c7c8cc">
        <v-toolbar color='#A98A76'>Novo Cadastro</v-toolbar>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn style="margin-top: 20px" color="primary" @click="salvar()">Salvar </v-btn>
        <v-btn style="margin-top: 20px" color="warning" @click="editar()">Editar </v-btn>
        <v-btn :to="link" style="margin-top: 20px" color="error">Voltar</v-btn>
    </v-card>
</template>

<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';
import {mapActions} from 'vuex';

    export default {
        name: 'CadastroUsuario',
         components: { DadosPessoais, DadosUsuario, DadosContato },
        data(){
            return{
                link: '/login',
            }
        },

        methods: {
            ...mapActions('usuario', ['salvarUsuario']),

            async salvar(){
                await this.salvarUsuario();
                this.$swal({
                    icon: 'sucess',
                    title: 'Cadastro de usuário',
                    text: 'Cadastro realizado com sucesso!',
                })
            }
        }
    }
</script>

<style scoped>

</style>