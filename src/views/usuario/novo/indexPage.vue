<template>
    <div>
        <v-card>
            <v-card-title> Usuários </v-card-title>
            <v-data-table
                :headers="headers"
                :items="buscaPessoa"
                :items-per-page="5"
                class="elevation-1"
            >
                <template v-slot:item.cidade="{ item }">
                    <v-simple-table>
                        {{ item.cidade }}/{{ item.uf }}
                    </v-simple-table>
                </template>
                <template v-slot:item.acoes="{ item }">
                    <v-btn
                        :to="linkEdicao(item)"
                        color="yellow"
                        class="pequeno"
                    >
                        <v-icon small> mdi-pencil </v-icon>
                    </v-btn>
                    <v-btn color="red" class="pequeno" @click="remover(item)">
                        <v-icon small> mdi-delete </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            headers: [
                {
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                { text: "Nome", value: "nome" },
                { text: "Gênero", value: "genero" },
                { text: "Cidade/UF", value: "cidade" },
                { text: "E-mail", value: "email" },
                { text: "Status", value: "status" },
                { text: "Ações", value: "acoes" },
            ],
            buscaPessoa: [],
        };
    },

    methods: {
        async buscaUsuario() {
            let resp = await axios.get(`http://localhost:8000/api/usuario`);
            this.buscaPessoa = resp.data.usuarios;
        },
        
        linkEdicao(objPessoa) {
            return `/usuario/edit/${objPessoa.id}`;
        },

        remover(objPessoa){
            this.$swal({
                icon: 'question',
                title: 'Remoção',
                text: 'Deseja remover?',
                showDenyButton: true,
                confirmButtonText: 'Sim',
                 denyButtonText: 'Não',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`http://localhost:8000/api/usuario/${objPessoa.id}`);
                    this.$swal('Excluído com sucesso!').then(() =>{
                        this.buscaUsuario();
                    });
                }
            });
        }
    },

    async mounted() {
        await this.buscaUsuario();
    },
};
</script>

<style scoped>
.v-card__title {
    flex-direction: column;
}

.botao {
    margin-left: 10px;
}

.v-btn:not(.v-btn--round).v-size--default {
    min-width: 40px;
}
</style>