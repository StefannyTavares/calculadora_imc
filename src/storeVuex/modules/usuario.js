//import axios from 'axios';

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
    }
});

const actions = {
    
    async listaUf ({state}) {
        let resp = await axios.get('http://localhost:8000/api/estado');
        state.api.estados = resp.data.estados;
    },

    async listaCidades({state}){
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
                uf: state.dadosContato.uf,
                cidade: state.dadosContato.cidade,
                telefone: state.dadosContato.telefone,
                email: state.dadosContato.email,
                email2: state.dadosContato.email2,
            },

            usuario: {
                usuario: state.dadosUsuario.usuario,
                senha: state.dadosUsuario.senha,
            }
        }
    }


}