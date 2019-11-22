import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage, TextInput } from 'react-native';

class Cadastro extends Component {
    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",
        }
    }
    _cadastrarUsuario = async (event) => {
        event.preventDefault();

        await fetch('http://192.168.4.183:5000/api/Usuario', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: this.state.nome,
                email: this.state.email,
                senha: this.state.senha,
            }),

        })
            .then(response => response.json())
            .then(data => this._redirecionar(data.token))
            .catch(erro => console.log(erro))
    }

    _redirecionar = async (tokenRecebido) => {
        try {
            await AsyncStorage.setItem('@opflix:token', tokenRecebido);
            this.props.navigation.navigate('BarraNavegacao')
        } catch (error) {
            console.warn("deu erro brother")
        }
    }

    _irPraLogin = () => {
        try {
            this.props.navigation.navigate('TelaLogin')
        } catch (error) {
            console.warn("deu certo nao")
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.tituloLog}>Cadastre-se, é grátis!</Text>
                <TextInput style={styles.inputNome} type="text" placeholder="Insira seu nome" value={this.state.nome} onChangeText={nome => this.setState({ nome })} />
                <TextInput style={styles.inputEmail} type="text" placeholder="Email" value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput style={styles.inputSenha} secureTextEntry={true} placeholder="Senha(No mínimo 4 digitos ex:1234)" value={this.state.senha} onChangeText={senha => this.setState({ senha })} />
                <TouchableOpacity style={styles.botaoCadastro} onPress={this._cadastrarUsuario}>
                    <Text style={styles.cadastrar}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoLog2} onPress={this._irPraLogin}>
                    <Text style={styles.voltar} >Voltar ao Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tituloLog: {
        marginTop: 130,
        display: "flex",
        textAlign: "center",
        fontSize: 30,
    },
    inputNome: {
        marginTop: 60,
        display: "flex",
        textAlign: "center",
        backgroundColor: "#DCDCDC",
        width: 200,
        marginLeft: 100,
        borderRadius: 30,
    },
    inputEmail: {
        marginTop: 13,
        display: "flex",
        textAlign: "center",
        backgroundColor: "#DCDCDC",
        marginLeft: 100,
        width: 200,
        borderRadius: 30,
    },
    inputSenha: {
        marginTop: 13,
        display: "flex",
        textAlign: "center",
        backgroundColor: "#DCDCDC",
        marginLeft: 75,
        width: 250,
        borderRadius: 30,
    },
    botaoCadastro: {
        marginTop: 40,
        display: "flex",
        textAlign: "center",
        backgroundColor: "#A02BFF",
        borderRadius: 30,
        width: 170,
        height: 40,
        marginLeft: 115,
    },
    cadastrar: {
        display: "flex",
        textAlign: "center",
        fontSize: 25,
        color: "#fff"
    },
    botaoLog2: {
        marginTop: 12,
        display: "flex",
        textAlign: "center",
        backgroundColor: "black",
        borderRadius: 30,
        width: 250,
        height: 40,
        marginLeft: 77,
    },
    voltar: {
        display: "flex",
        textAlign: "center",
        fontSize: 25,
        color: "#fff"
    },
})
export default Cadastro;