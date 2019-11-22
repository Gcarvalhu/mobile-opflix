import Login from './pages/signin';
import Cadastro from './pages/cadastro';
import Profile from './pages/profile';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Lancamentos from './pages/lancamentos';
import React from 'react'
import { Image } from 'react-native'

const TelaLogin = createStackNavigator({
    Sign: { screen: Login },
});
//aqui é aonde começa a navegação
const BarraNavegacao = createBottomTabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./img/baseline_person_black_18dp.png')} style={{ height: 30, width: 30 }} tintColor={tintColor} />
            )
        }
    },
    Lancamentos: {
        screen: Lancamentos,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image source={require('./img/baseline_movie_black_18dp.png')} style={{ height: 30, width: 30 }} tintColor={tintColor} />
            )
        }
    },
}, {
        initialRouteName: "Lancamentos",
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            activeTintColor:'white',
            inactiveTintColor:'black',
            activeBackgroundColor: '#B11EEB',
            inactiveBackgroundColor: '#A02BFF',
            
        }
    },
)

export default createAppContainer(createSwitchNavigator(
    {
        BarraNavegacao,
        TelaLogin,
        Cadastro,
    },
    {
        initialRouteName: 'TelaLogin'
    }
),
);