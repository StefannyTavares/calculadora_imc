<template>
    <div>
        <v-row>
            <v-col cols="4" id="principal">
                <v-card-text>
                    <v-img class="img" src="../../assets/logo.png"/>
                    <v-row>
                        <v-col cols="8" offset="2" class="input">
                            <v-text-field   
                                v-model="login"
                                label="Login"
                                outlined
                                dense
                                placeholder="Admin"
                                persistent-placeholder
                                prepend-icon="mdi-account"
                                :rules="[(v) => !!v || 'Campo Obrigatório', (v) => v.length >= 4]"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="8" offset="2">
                            <v-text-field
                                v-model="senha"
                                label="Senha"
                                outlined
                                dense
                                placeholder="Admin"
                                hint="Mínimo 6 caracters"
                                persistent-placeholder
                                prepend-icon="mdi-lock"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                @click:append="show1 = !show1"
                                :rules="[(v) => !!v || 'Campo Obrigatório', (v) => v.length >= 6]"
                                counter="6"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12 text-center">
                            <v-btn class="primary" @click="verificarLogin()">Entrar</v-btn>
                            
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12 text-center">
                            <v-btn text :to="link">Novo cadastro</v-btn>
                        </v-col>
                     </v-row>
                    <v-row>
                        <v-col cols="12 text-center">
                            <a href="#">Esqueceu a senha?</a>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-col>

            <v-col cols="8 pa-7" class="secundario">
                <span>
                    Cálculo IMC - Saiba o que é IMC, calcule online e saiba 
                    se vocé está acima do seu peso ideal.
                </span>
            </v-col>
        </v-row>
    </div>
</template>



<script>
export default {
    data() {
        return {
            show1: false,
            login: '',
            senha: '',
            verificacao: [
                {id: 1, nome: 'Admin', senha: 'Admini'},
                {id: 2, nome: 'admin', senha: 'admini'},
                {id: 3, nome: 'admin1', senha: 'admini1'},
                {id: 4, nome: 'admin2', senha: 'admini2'},
                {id: 5, nome: 'admin3', senha: 'admini3'},
            ], 
            link:'/usuario/novo'     
        };
    },
    methods: {
        verificarLogin(){
            debugger
            let verificacaoLog = this.verificacao.filter((filtro) => filtro.nome == this.login );

            if (verificacaoLog[0]){
                if ( this.login == verificacaoLog[0].nome){
                    this.$router.push('/conteudo'); 
                }
            }else{
                return alert ('Login incorreto!');
            }
        }
    }
};
</script>

<style scoped>
#principal {
    background-color: #c7c8cc;
    height: 643px;
    padding: 0px !important;
}

.secundario {
    background-image: url(https://images.pexels.com/photos/5383194/pexels-photo-5383194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
}

.img {
    margin: 50px 0px 20px 150px;
    width: 100px;
    height: 100px;
    text-align: center !important;
    justify-content: center;
}
</style>