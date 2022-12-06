<template>
    <div>
        <v-row>
            <v-col cols="6" class="cor">
                    <v-toolbar class="tituloPrincipal">
                        <v-toolbar-title>Calculadora de IMC (e peso ideal)</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <h2 class="titulo">O que é IMC</h2>
                        <p class="paragrafo"> 
                            IMC é a sigla de Índice de Massa Corporal, 
                            um parâmetro que é utilizado para avaliar se o 
                            peso está dentro do valor ideal para a altura. 
                            <br>
                            Isso significa que, a partir do resultado do IMC 
                            é possível saber se a pessoa está acima ou abaixo 
                            do peso recomendado e também diagnosticar problemas 
                            de saúde como obesidade ou desnutrição.
                            <br>
                            O IMC pode ser utilizado em crianças, adolescentes, 
                            adultos ou idosos. 
                        </p>
                        <v-img class="img" src="../../assets/imc.webp" alt=""/>
                        <v-row>
                            <v-col cols="12 text-center">
                                <v-btn :to="link" class="primary botao">Calcular IMC</v-btn>
                                <v-btn :to="link2" class="error">Voltar</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
            </v-col>

            <v-col cols="6" class="cor">
                <v-card-text>
                    <h2 class="titulo">Como calcular IMC</h2>
                    <p class="paragrafo">
                        O IMC é calculado dividindo o peso (em kg) 
                        pela altura ao quadrado (em m), de acordo com a 
                        seguinte fórmula: IMC = peso / (altura x altura).
                        <br>
                        O resultado de IMC é dado em kg/m2.
                    </p>

                    <h2 class="titulo">Por que é importante saber o IMC?</h2>
                        <p class="paragrafo">
                            Saber o IMC é importante para verificar se o peso 
                            está de acordo com a altura da pessoa, 
                            além de ser importante para saber se existe 
                            risco de desenvolver alguma doença. 
                            <br>
                            No caso das crianças, o IMC é importante 
                            para saber se o desenvolvimento está de acordo 
                            com o esperado.
                            <br>
                            Além disso, sabendo o IMC, é possível também 
                            verificar qual o peso ideal e, assim, saber se 
                            a pessoa está acima ou abaixo do peso recomendado 
                            para a sua altura.
                        </p>
                    <h2 class="titulo">O que fazer para melhorar o IMC?</h2>
                    <p class="paragrafo">
                        Para melhorar o IMC, é importante verificar se está acima ou 
                        abaixo do peso considerado normal. Quando o IMC está na faixa 
                        de magreza, é importante consultar um nutricionista que fará uma 
                        avaliação completa, indicando um plano alimentar personalizado 
                        que priorize o ganho de peso de forma saudável. 
                        <br>
                        Por outro lado, quando o IMC está na faixa do sobrepeso 
                        ou da obesidade, o nutricionista 
                        pode recomendar uma alimentação com redução de calorias. 
                        <br>
                        Além da dieta, normalmente também se recomenda a prática 
                        de atividade física regular, que ajudará a acelerar o 
                        metabolismo e facilitar a perda de peso, o que 
                        influencia diretamente no IMC.
                    </p>
                </v-card-text>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
       data (){
        return{
            link: '/calculadora',
            link2: '/login',
        }
       } 
    }
</script>

<style scoped>
*{
    overflow: none !important;
}

.tituloPrincipal {
    background-color: #a98a76 !important;
    padding: 10px;
    font-size: 30px;
    font-weight: bolder;
}

.cor {
    background-color: #c7c8cc;
    height: 643px;
    padding: 0px !important;
    border-width: 1px;
    border-style: solid;
    border-color: black;

}

.paragrafo {
    padding: 20px 26px;
    text-align: justify;
    text-justify: inter-cluster;
}

.titulo{
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.365);
    font-size: 1.5em;
}

.v-btn{
    margin-top: 30px;
}

.botao{
    margin-right: 5px;
}

</style>