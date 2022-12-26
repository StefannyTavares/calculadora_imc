<template>
    <div>
        <v-row>
            <v-col cols="8 mt-8" offset="2" id="principal">
                <v-card elevation="12">
                    <v-toolbar> Endereço </v-toolbar>
                    <v-row>
                        <v-col cols="4 mt-5 pl-15">
                            <v-text-field
                                v-model="dadosContato.logradouro"
                                label="Logradouro"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="South Claredon Drive"
                                :rules="regra.endereco"
                            />
                        </v-col>
                        <v-col cols="2 mt-5">
                            <v-text-field
                                v-model="dadosContato.numero"
                                label="Número"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="0"
                                :rules="regra.number"
                            />
                        </v-col>
                        <v-col cols="5 mt-5 pr-6">
                            <v-text-field
                                v-model="dadosContato.complemento"
                                label="Complemento"
                                outlined
                                dense
                                persistent-placeholder
                                :rules="regra.complement"
                            />
                        </v-col>
                        <v-col cols="3 pl-15">
                            <v-text-field
                                v-model="dadosContato.bairro"
                                label="Bairro"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="New Street"
                                :rules="regra.neighborhood"
                            />
                        </v-col>

                        <v-col cols="2">
                            <v-text-field
                                v-model="dadosContato.cep"
                                label="CEP"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="00000-000"
                                v-mask="'#####-###'"
                                :rules="regra.estate"
                            />
                        </v-col>

                        <v-col cols="2">
                            <v-select
                                v-model="dadosContato.uf"
                                label="UF*"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder=""
                                :rules="regra.estate"
                                :items="listaUfs"
                                return-object
                                item-value="id"
                                item-text="uf"
                            />
                        </v-col>

                        <v-col cols="4 pr-6">
                            <v-select
                                v-model="dadosContato.cidade"
                                label="Cidade"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder=""
                                :rules="regra.city"
                                :items="listaCidades"
                                return-object
                                item-value="nome"
                                item-text="nome"
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="8 mt-5" offset="2" id="principal">
                <v-card elevation="12">
                    <v-toolbar> Contato </v-toolbar>
                    <v-row>
                        <v-col cols="3 mt-5 pl-15">
                            <v-text-field
                                v-model="dadosContato.telefone"
                                label="Telefone"
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="(000) 00000-0000"
                                v-mask="'(###)#####-####'"
                                :rules="regra.estate"
                            />
                        </v-col>

                        <v-col cols="4 mt-5">
                            <v-text-field
                                v-model="dadosContato.email"
                                label="E-mail*"
                                :rules="regra.emailRules"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="usuario@usuario.com"
                            />
                        </v-col>

                        <v-col cols="4 mt-5 pl-15">
                            <v-text-field
                                v-model="dadosContato.email2"
                                label="E-mail*"
                                :rules="regra.emailRules"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="usuario@usuario.com"
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "DadosContato",

    computed: {
        ...mapGetters('usuario', ['dadosContato', 'listaUfs', 'listaCidades']),
    },

    data() {
        return {
            regra: {
                endereco: [
                    (v) => !!v || "Campo Obrigatório",
                    (v) => v.length <= 150 || "Máximo 150 dígitos",
                ],
                number: [
                    (v) => !!v || "Campo Obrigatório",
                    (v) => v.length <= 6 || "Máximo 6 dígitos",
                ],
                complement: [(v) => v.length <= 150 || "Máximo 150 dígitos"],
                neighborhood: [
                    (v) => !!v || "Campo Obrigatório",
                    (v) => v.length <= 100 || "Máximo 100 dígitos",
                ],
                estate: [(v) => !!v || "Campo Obrigatório"],
                city: [(v) => !!v || "Campo Obrigatório"],
                emailRules: [
                    (v) => !!v || "Campo obrigatório",
                    (v) => /.+@.+/.test(v) || "E-mail inválido",
                ],
            },
        };
    },

    methods: {
        ...mapActions('usuario', ['fetchCidades']),
    },

    watch: {
        async 'dadosContato.uf'() {
            debugger
            await this.fetchCidades(this.dadosContato.uf.id);
        },
    },
};
</script>

<style scoped></style>
