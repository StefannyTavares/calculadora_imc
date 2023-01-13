<template>
    <v-card color= "#c7c8cc">
        <v-toolbar color='#A98A76' class="cabecalho">CADASTRO</v-toolbar>
        <dados-pessoais />
        <dados-contato />
        <dados-usuario />
        <v-btn v-if="!isEdit" style="margin-top: 20px" class="botao" elevation="2" color="primary" @click="salvar()">Salvar </v-btn>
        <v-btn v-else style="margin-top: 20px" class="botao" elevation="2" color="warning" @click="editar()">Editar </v-btn>
        <v-btn :to="link" style="margin-top: 20px" class="botao2" color="error">Voltar</v-btn>
        <v-overlay :value="loading">
            <v-progress-circular indeterminate size="64" />
        </v-overlay>
    </v-card>
</template>

<script>
import DadosContato from './dadosContato.vue';
import DadosPessoais from './dadosPessoais.vue';
import DadosUsuario from './dadosUsuario.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import axios from 'axios';

    export default {
        name: 'CadastroUsuario',
        components: { DadosPessoais, DadosUsuario, DadosContato },
        data(){
            return{
                link: '/',
            }
        },

        computed: {
            ...mapGetters('usuario', ['dadosPessoais', 'loading']),
            idCadastro() {
                return parseInt(this.$route.params.id);
            },

            isEdit() {
                return !!this.$route.params.id
            },
        },

        methods: {
            ...mapActions('usuario', ['salvarUsuario', 'editarUsuario', 'fetchUfs']),
            ...mapMutations('usuario', ['mostraOverlay', 'paraOverlay', 'reset', 'editarDados']),

            async salvar() {
                this.mostraOverlay();
                await this.salvarUsuario();
                this.paraOverlay();
                this.$swal({
                    icon: 'success',
                    title: 'Cadastro de usuário',
                    text: 'Cadastro realizado com sucesso!',
                    timer: 1500,
                }).then(() => {
                    this.reset();
                });  
                    this.$router.push('/');
            },

            async editar() {
                await this.editarUsuario(this.idCadastro);
                this.$swal({
                    icon: 'success',
                    title: 'Cadastro de usuário',
                    text: 'Cadastro editado com sucesso!',
                    timer: 1500,
                }).then(() => {
                    this.reset();
                }); 
                    this.$router.push('/');
            },

            async buscaPessoa() {
                let resp = await axios.get(`http://localhost:8000/api/${this.idCadastro}/usuario`);
                this.editarDados(resp.data.usuario);
            },
        },

        async mounted() {
            if (this.idCadastro){
                await this.buscaPessoa();
            };
            this.fetchUfs()
        },

        beforeDestroy(){
            this.reset();
        },
    }
</script>

<style scoped>
.cabecalho{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.9rem;
    text-justify: auto;
    text-align: center;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.792);
    padding: 0px 550px;
    text-shadow: 0.1em 0.1em 0.6em rgba(0, 0, 0, 0.63)
}

.botao {
    margin: 10px 20px 10px 550px;
}

.botao2 {
    margin: 10px 10px;
}
</style>