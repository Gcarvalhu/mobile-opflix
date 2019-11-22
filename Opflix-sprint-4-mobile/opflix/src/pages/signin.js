import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, TextInput, StyleSheet } from 'react-native';

class Login extends Component {

    static navigationOptions = {
        header : null
    }

    constructor() {
        super();
        this.state = {
            email: "Helena@gmail.com",
            senha: "3344"
        }
    }

    _fazerLogin = async () => {
        await fetch('http://192.168.4.183:5000/api/Login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha
            }),
        })
            .then(resposta => resposta.json())
            .then(data => this._redirecionar(data.token))
            .catch(erro => console.warn(erro));
    }
    _redirecionar = async (tokenRecebido) => {
        if (tokenRecebido != null) {
            try {
                await AsyncStorage.setItem('@opflix:token', tokenRecebido);
                this.props.navigation.navigate('BarraNavegacao')
            } catch (error) {
                console.warn("deu erro brother")
            }
        }
    }
    _irPraCadastro = () => {
        try {
            this.props.navigation.navigate('Cadastro')            
        } catch (error) {
            console.warn("deu certo nao")
        }
    }
    render() {
        return (
            <View>
                <Text style={styles.tituloLog}>Faça aqui seu Login</Text>
                <TextInput style={styles.inputEmail} placeholder="email" onChangeText={email => this.setState({ email })} value={this.state.email} />
                <TextInput style={styles.inputSenha} secureTextEntry={true} placeholder="senha" onChangeText={senha => this.setState({ senha })} value={this.state.senha} />
                <TouchableOpacity style={styles.botaoLogin} onPress={this._fazerLogin}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoLog2} onPress={this._irPraCadastro}>
                    <Text style={styles.cadastreSe} >Ou então cadastre-se</Text>
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
        inputEmail: {
            marginTop: 60,
            display: "flex",
            textAlign: "center",
            backgroundColor:"#DCDCDC",
            width: 200,
            marginLeft: 100,
            borderRadius:30,
        },
        inputSenha: {
            marginTop: 13,
            display: "flex",
            textAlign: "center",
            backgroundColor:"#DCDCDC",
            marginLeft: 100,
            width: 200,
            borderRadius:30,
        },
        botaoLogin: {
            marginTop: 40,
            display: "flex",
            textAlign: "center",
            backgroundColor:"#A02BFF",
            borderRadius:30,
            width: 100,
            height:40,
            marginLeft: 155,
        },
        login: {
            display: "flex",
            textAlign: "center",
            fontSize: 25,
            color: "#fff"
        },
        botaoLog2 : {
            marginTop: 12,
            display: "flex",
            textAlign: "center",
            backgroundColor:"black",
            borderRadius:30,
            width: 300,
            height:40,
            marginLeft: 60,
        },
        cadastreSe: {
            display: "flex",
            textAlign: "center",
            fontSize: 25,
            color: "#fff"
        },
    })
export default Login;