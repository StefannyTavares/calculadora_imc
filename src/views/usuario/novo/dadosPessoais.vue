<template>
    <div>
        <v-row>
            <v-col cols="8 mt-16" offset="2" id="principal">
                <v-card elevation="12">
                <v-toolbar> Cadastro Pessoais </v-toolbar>
                    <v-row>
                        <v-col cols="10 mt-3 pl-6">
                            <v-text-field 
                                v-model="nome"
                                label="Nome*"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder=""
                                :rules="nomePessoa"
                            />
                        </v-col>
                        <v-col cols="6 pl-6">
                            <v-text-field                               
                                v-model="dataNascimento" 
                                label="Data de nascimento" 
                                outlined
                                dense
                                persistent-placeholder
                            />
                        </v-col>

                        <v-col cols="5">
                            <v-select
                                v-model="genero"
                                :items="itemsGenero"
                                :rules="[(v) => !!v || 'Campo obrigatório']"
                                label="Gênero"
                                outlined
                                dense
                                persistent-placeholder
                            />
                        </v-col>

                        <v-col cols="5 pl-6">
                            <v-text-field
                                v-model="cpf"
                                label="CPF (apenas digitos)*"
                                :rules="itemsCpf"
                                dense
                                outlined
                                counter="14"
                                persistent-placeholder
                                placeholder="000.000.000-00"
                            />
                        </v-col>

                        <v-col cols="4">
                            <v-text-field
                                v-model="rg"
                                :rules="itemsRg"
                                :counter="7"
                                label="RG (apenas digitos)*"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="0000000"
                            />
                        </v-col>

                        <v-col cols="2">
                            <v-select
                                v-model="ufEmissor"
                                :rules="[(v) => !!v || 'Campo obrigatório']"
                                label="UF*"
                                outlined
                                dense
                                persistent-placeholder
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nome: '',
            cpf: '',
            ufEmissor: '',
            rg: '',
            genero: '',
            dataNascimento: '',
            nomePessoa: [(v) => !!v || 'O nome é obrigatório', (v) => v.length <= 100 || 'Digite o seu nome completo'],
            itemsRg: [(v) => !!v || 'O RG é obrigatório', (v) => v.length <= 7 || 'Digite apenas 7 dígitos'],
            itemsCpf: [(v) => !!v || 'O RG é obrigatório', (v) => v.length <= 11 || 'Digite apenas 7 dígitos'],
            itemsGenero: ['Masculino', 'Feminino', 'Outros'],
        }
    }
};
</script>

<style scoped>
</style>