<template>
    <v-card color= "#c7c8cc">
        <v-toolbar color='#A98A76'>Novo Cadastro</v-toolbar>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn style="margin-top: 20px" color="primary" @click="salvar()">Salvar </v-btn>
        <v-btn style="margin-top: 20px" color="warning" @click="editar()">Editar </v-btn>
        <v-btn style="margin-top: 20px"  color="error">Voltar</v-btn>
    </v-card>
</template>

<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';

    export default {
        name: 'CadastroUsuario',
         components: { DadosPessoais, DadosUsuario, DadosContato },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>