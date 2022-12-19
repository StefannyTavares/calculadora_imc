import axios from "axios";

let state = () => ({
    dadosPessoais: {
        nome: '',
        nascimento: '',
        genero: '',
        cpf: '',
        rg: '', 
        ufEmissor: '',
    },

    dadosContato: {
        logradouro: '',
        numero: '', 
        complemento: '',
        bairro: '',
        cep: '',
        uf: '',
        cidade: '',
        telefone: '',
        email: '',
        email2: '',
    },

    dadosUsuario: {
        usuario: '',
        senha: '',
    },

    api: {
        estados: [],
        cidades: [],
    },

    overlay: false,

});

const getters = {
    dadosPessoais: (state) => {
        return state.dadosPessoais;
    },

    dadosContato: (state) => {
        return state.dadosContato;
    },

    dadosUsuario: (state) => {
        return state.dadosUsuario;
    },

    listaUfs: (state) => {
        return state.api.estados.map((estado) => ({
            id: estado.id,
            uf: estado.uf,
        }))
    },

    listaCidades: (state) => {
        return state.api.cidades.map((cidade) => ({
            id: cidade.id,
            nome: cidade.nome,
        }))
    },
    
    loading: (state) => {
        return state.overlay;
    },
};

const mutations = {
    reset(state) {
        state.dadosPessoais.nome = '';
        state.dadosPessoais.dataNascimento = '';
        state.dadosPessoais.genero = '';
        state.dadosPessoais.cpf = '';
        state.dadosPessoais.rg = '';
        state.dadosPessoais.ufEmissor = '';

        state.dadosContato.logradouro = '';
        state.dadosContato.numero = '';
        state.dadosContato.complemento = '';
        state.dadosContato.bairro = '';
        state.dadosContato.cep = '';
        state.dadosContato.uf = '';
        state.dadosContato.cidade = '';
        state.dadosContato.telefone = '';
        state.dadosContato.email = '';
        state.dadosContato.email2 = '';

        state.dadosUsuario.usuario = '';
        state.dadosUsuario.senha = '';
        state.dadosUsuario.confirmacaoSenha = '';
    },

    mostraOverlay(state){
        state.overlay = true;
    },

    paraOverlay(state){
        state.overlay = false;
    },
}

const actions = {
    
    async fetchUfs({state}) {
        let resp = await axios.get('http://localhost:8000/api/estado');
         return state.api.estados = resp.data.estados;
    },

    async fetchCidades({state}, city= 4){
        let resp = await axios.get(`http://localhost:8000/api/${city}/cidades`)
        state.api.cidades = resp.data.cidades;
    },

    async salvarUsuario ({state}){
        const payload = {
            pessoa: {
                nome: state.dadosPessoais.nome,
                nascimento: state.dadosPessoais.nascimento,
                genero: state.dadosPessoais.genero,
                cpf: state.dadosPessoais.cpf,
                rg: state.dadosPessoais.rg,
                ufEmissor: state.dadosPessoais.ufEmissor.id,
            },

            contato: {
                logradouro: state.dadosContato.logradouro,
                numero: state.dadosContato.numero,
                complemento: state.dadosContato.complemento,
                bairro: state.dadosContato.bairro,
                cep: state.dadosContato.cep,
                uf: state.dadosContato.uf.id,
                cidade: state.dadosContato.cidade.id,
                telefone: state.dadosContato.telefone,
                email: state.dadosContato.email,
                email2: state.dadosContato.email2,
            },

            usuario: {
                usuario: state.dadosUsuario.usuario,
                senha: state.dadosUsuario.senha,
            },
        };
        return await axios.post('http://localhost:8000/api/usuario', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};