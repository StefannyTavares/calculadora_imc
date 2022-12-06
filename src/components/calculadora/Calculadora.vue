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
                                <v-btn @click="genderChange('F')" class="botaoSexoF" :class="[femininoSelecionado ? 'btn-select' : '']"
                                    ><v-icon>mdi-gender-female</v-icon>
                                    Mulher
                                    </v-btn
                                >
                                <v-btn @click="genderChange('M')" class="botaoSexoM" :class="[!femininoSelecionado ? 'btn-select' : '']"
                                    >
                                    <v-icon>mdi-gender-male</v-icon>
                                    Homem</v-btn
                                >
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <input-idade
                                    label="Idade"
                                    outlined
                                    persistent-placeholder
                                    placeholder="Ex: 25"
                                    dense
                                    hide-spin-buttons
                                    rules
                                />
                            </v-col>
                            <v-col class="span"><span>anos</span></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <input-altura
                                    v-model="altura"
                                    label="Altura"
                                    outlined
                                    persistent-placeholder
                                    placeholder="Ex: 160"
                                    dense
                                    rules
                                />
                            </v-col>
                            <v-col class="span"><span>cm</span></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4" offset="4">
                                <input-peso
                                    v-model="peso"
                                    label="Peso"
                                    outlined
                                    persistent-placeholder
                                    placeholder="Ex: 62.5"
                                    dense 
                                    rules
                                />
                            </v-col>
                            <v-col class="span"><span>kg</span></v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12 text-center">
                                <v-btn color="primary" @click="calcular()"
                                    >Calcular</v-btn
                                >
                                <v-btn color="error" @click="limpar()"
                                    >Limpar</v-btn
                                >
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="10" offset="1">
                                <p class="text-center">
                                    {{ imc }} 
                                </p>
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
                        <v-col cols="12 text-center">
                                <v-btn color="primary" :to="link"
                                    >Voltar</v-btn
                                >
                            </v-col>
                    </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import InputAltura from '../shared/InputAltura.vue';
import InputIdade from '../shared/InputIdade.vue';
import InputPeso from '../shared/InputPeso.vue';

export default {
    name: 'Calculadora',
    components: {
        InputIdade, InputAltura,
        InputPeso,
    },
    data() {
        InputAltura
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
            femininoSelecionado: true,
            link: '/',
        };
    },
    methods: {
        calcular() {
            if (this.peso == '' || this.altura == ''){
                return this.imc = `Preencha os campos adequadamente!`;
            }else{
                this.imc = (this.peso / (this.altura * this.altura)) * 10000;
                if (this.imc <= 18.5){
                    this.imc = `Seu IMC é ${this.imc.toFixed(2)} - Está abaixo do recomendado`
                } else if (this.imc >= 18.6 && this.imc <= 24.9){
                    this.imc =`Seu IMC é ${this.imc.toFixed(2)} - Está ideal para a sua altura.`
                } else if (this.imc >= 25.0 && this.imc <= 29.9){
                    this.imc =`Seu IMC é ${this.imc.toFixed(2)} - Está considerado sobrepeso.`
                }else if (this.imc >= 30.0 && this.imc <= 34.9){
                    this.imc =`Seu IMC é ${this.imc.toFixed(2)} - Está considerado obesidade grau I.`
                }else if (this.imc >= 35.0 && this.imc <= 39.9){
                    this.imc =`Seu IMC é ${this.imc.toFixed(2)} - Está considerado obesidade grau II.`
                }else{
                    this.imc =`Seu IMC é ${this.imc.toFixed(2)} - Está considerado obesidade grau III.`
                }
            }

        },
        
        limpar(){
            this.imc= "";
            this.altura= "";
            this.peso= "";
        },

        genderChange(genero) {
            this.femininoSelecionado = genero === 'F' 
        }
    },
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

.botaoSexoM {
    color: #404040;
    transition: color .3s ease;
    background-color: #D7F4FF;
}

.botaoSexoF {
    color: #404040;
    transition: color .3s ease;
    background-color: #D7F4FF;
    margin-right: 5px;
}

.btn-select {
    background-color: #a8e2f8 !important;
    border: 1px solid #40B0DC;
}
</style>