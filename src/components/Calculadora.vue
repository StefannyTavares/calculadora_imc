<template>
    <div>
        <v-row>
            <v-col cols="5" id="principal">
                    <v-toolbar class="titulo">
                        <v-toolbar-title>Calculadora IMC</v-toolbar-title>
                    </v-toolbar>
                    <p class="paragrafo">
                        Coloque os seus dados na calculadora e calcule o seu
                        IMC:
                    </p>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12 text-center">
                                <v-btn class="botaoSexoM"
                                    ><v-icon>mdi-gender-female</v-icon>
                                    Mulher
                                    </v-btn
                                >
                                <v-btn class="botaoSexoH"
                                    >
                                    <v-icon>mdi-gender-male</v-icon>
                                    Homem</v-btn
                                >
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <v-text-field
                                    label="Idade"
                                    outlined
                                    persistent-placeholder
                                    placeholder="Ex: 25"
                                    dense
                                    hide-spin-buttons
                                />
                            </v-col>
                            <v-col class="span"><span>anos</span></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <v-text-field
                                    v-model="altura"
                                    label="Altura"
                                    outlined
                                    persistent-placeholder
                                    placeholder="Ex: 160"
                                    dense
                                />
                            </v-col>
                            <v-col class="span"><span>cm</span></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <v-text-field
                                    v-model="peso"
                                    label="Peso"
                                    outlined
                                    persistent-placeholder
                                    placeholder="Ex: 62.5"
                                    dense
                                />
                            </v-col>
                            <v-col class="span"><span>kg</span></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12 text-center">
                                <v-btn color="primary" @click="calcular()"
                                    >Calcular</v-btn
                                >
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <v-text-field
                                    v-model="imc"
                                    label="Resultado"
                                    outlined
                                    persistent-placeholder
                                    placeholder=""
                                    dense
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
            </v-col>

            <v-col cols="7" class="secundario">
                <v-row>
                    <v-col >
                        <h2>Como interpretar o resultado de IMC</h2>
                    </v-col>
                </v-row>
                <p> Depois de obter o resultado de IMC, deve-se interpretar o valor utilizando a seguinte tabela:</p>
                  <v-col cols="8" offset="2">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        IMC (kg/m2)
                                    </th>
                                    <th class="text-left">
                                        Classificação
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="item in tabela"
                                    :key="item.name"
                                    >
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.classificacao }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imc: "",
            altura: "",
            peso: "",
            tabela: [
                {
                    name: 'Menor que 18,5',
                    classificacao: 'Magreza',
                },
                {
                    name: '18,5 a 24,9',
                    classificacao: 'Normal',
                },
                {
                    name: '25 a 29,9',
                    classificacao: 'Sobrepeso',
                },
                {
                    name: '30 a 34,9',
                    classificacao: 'Obesidade grau I',
                },
                {
                    name: '35 a 39,9',
                    classificacao: 'Obesidade grau II',
                },
                {
                    name: 'Maior que 40',
                    classificacao: 'Obesidade grau III',
                },
            ],
        };
    },
    methods: {
        calcular() {
            this.imc = (this.peso / (this.altura * this.altura)) * 10000;
            return this.imc;
        },
    },
    //imc.toFixed(2)
};
</script>

<style scoped>
.titulo {
    background-color: #a98a76 !important;
    padding: 10px;
    font-size: 30px;
    font-weight: bolder;
}

#principal {
    background-color: #c7c8cc;
    height: 643px;
    padding: 0px !important;
}

.secundario {
    background-image: url(https://images.pexels.com/photos/5383194/pexels-photo-5383194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
}

.span {
    padding: 30px 0px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
}

.paragrafo {
    padding: 20px 26px;
}

.botaoSexoH {
    color: #404040;
    transition: color .3s ease;
    background-color: #D7F4FF;
    border: 1px solid #40B0DC;
}

.botaoSexoM {
    color: #404040;
    transition: color .3s ease;
    background-color: #D7F4FF;
    border: 1px solid #EF557D;
    margin-right: 5px;
}
</style>