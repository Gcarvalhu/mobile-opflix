import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Image, StyleSheet } from 'react-native';
import jwt from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            foto: "",
            nome: "",
            email: "",
            token: "",
        }
    }


    componentDidMount() {
        this._retornarToken();
    }

    _retornarToken = async () => {
        let tokenBuscadoDoStorage = await AsyncStorage.getItem('@opflix:token');
        this.setState({ foto: jwt(tokenBuscadoDoStorage).foto })
        this.setState({ nome: jwt(tokenBuscadoDoStorage).nome })
        this.setState({ email: jwt(tokenBuscadoDoStorage).email })
    }

    _logout = () => {
        AsyncStorage.removeItem('@opflix:token');
        this.props.navigation.navigate("TelaLogin")
    }
    render() {
        return (
            <View>
                <Image source={{ uri: this.state.foto }} style={styles.fotoPerfil} />
                <Text  style={styles.nomeUser}>{this.state.nome}</Text>
                <Text  style={styles.emailUser}>{this.state.email}</Text>
                <TouchableOpacity style={styles.botaoSair} onPress={this._logout}>
                    <Text style={styles.sair} >Sair </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    fotoPerfil: {
        display: "flex",
        marginTop: 30,
        marginLeft:108,
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    nomeUser: {
        fontSize: 25,
        display: "flex",
        textAlign: "center",
    },
    emailUser: {
        fontSize: 20,
        display: "flex",
        textAlign: "center",
    },
    botaoSair: {
        height: 40,
        width:100,
        marginTop: 150,
        marginLeft: 160,
        backgroundColor:"#A02BFF",
        borderRadius: 80,
    } ,
    sair: {
        fontSize: 25,
        color: "#fff",
        display: "flex",
        textAlign: "center",
    }
})
export default Profile;