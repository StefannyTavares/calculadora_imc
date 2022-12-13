<template>
    <div>
        <v-row>
            <v-col cols="8 mt-16" offset="2" id="principal">
                <v-card elevation="12">
                    <v-toolbar> Cadastro Pessoais </v-toolbar>
                    <v-row>
                        <v-col cols="11 mt-3 pl-6">
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
                            <v-menu
                                ref="menu1"
                                v-model="menu1"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="dateFormatted"
                                        outlined
                                        dense
                                        label="Data Nascimento"
                                        hint="DD/MM/YYYY"
                                        persistent-placeholder
                                        append-icon="mdi-calendar"
                                        v-bind="attrs"
                                        @blur="date = parseDate(dateFormatted)"
                                        v-on="on"
                                        :rules="itemsDataNasc"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="date"
                                    no-title
                                    @input="menu1 = false"
                                    locale="pt-br"
                                ></v-date-picker>
                            </v-menu>
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
    data() {
        return {
            date: '',
            dateFormatted: '',
            menu1: false,
            nome: "",
            cpf: "",
            ufEmissor: "",
            rg: "",
            genero: "",
            dataNascimento: "",
            nomePessoa: [
                (v) => !!v || "O campo é obrigatório",
                (v) => v.length <= 100 || "Digite o seu nome completo",
            ],
            itemsRg: [
                (v) => !!v || "O campo é obrigatório",
                (v) => v.length <= 7 || "Digite apenas 7 dígitos",
            ],
            itemsCpf: [
                (v) => !!v || "O campo é obrigatório",
                (v) => v.length <= 11 || "Digite apenas 7 dígitos",
            ],
            itemsGenero: ["Masculino", "Feminino", "Outros"],
            itemsDataNasc: [                
                (v) => !!v || "O campo é obrigatório",
                (v) => v.length <= 7 || "Digite apenas 7 dígitos",
            ],
        };
    },

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
};
</script>

<style scoped>
</style>