import React, { Component } from 'react';
import { View, Text, AsyncStorage, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { } from 'react-native-gesture-handler';

class Lancamentos extends Component {
    // static navigationOptions = {
    //     tabBarIcon : () => {
    //         <Image source={{url :'../img/baseline_movie_black_18dp.png'}} style={styles.iconeL}/>
    //     }
    // }
    constructor() {
        super();
        this.state = {
            lista: [],
            tokena: "",
        }
    }

    componentDidMount() {
        this._pegarToken();
        this._listarLancamentos();
    }
    _listarLancamentos = async () => {
        await fetch('http://192.168.4.183:5000/api/Lancamentos', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + await AsyncStorage.getItem('@opflix:token'),
            }
        })
            .then(re => re.json())
            .then(response => this.setState({ lista: response }))
            .catch(erro => console.warn(erro))
    }
    _pegarToken = async () => {
        try {
            let token = await AsyncStorage.getItem('@opflix:token');
            console.warn(token)
            this.setState({ tokena: token })
        } catch (error) {
            console.warn("deu erro véi")
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    {/* <View> */}
                    <Text style={styles.tituloFilme}>Suspense</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 1 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />
                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Ação</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 2 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Aventura</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 3 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Fantasia</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 4 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Terror</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 5 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Sci-fi</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 6 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Drama</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 7 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Documentario</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 8 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Comédia</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 9 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />
                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Comédia romântica</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 10 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Romance</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 11 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme}>Musical</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 12 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    <Text style={styles.tituloFilme} >Filme Policial</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.lista.filter(item => { return item.idCategoria === 13 })}
                        keyExtractor={item => item.idLanc}
                        renderItem={({ item }) => (
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.fotoLanc }}
                                />

                            </View>
                        )}
                    />
                    {/* </View> */}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 250,
        margin: 4,
        marginTop: 15,
        marginBottom:15,
    },
    tituloFilme: {
        paddingLeft:5,
        paddingTop: 13,
        fontSize: 18,
        backgroundColor: "#9B52EB",
        height: 50,
    },
    iconeL: {
        height: 10,
        width: 10,
    }
})
export default Lancamentos;