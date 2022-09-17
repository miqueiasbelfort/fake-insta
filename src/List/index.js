import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"

class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            feed: this.props.data
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.viewPerfil}>
                    <Image 
                        source={{uri: this.state.feed.imgperfil}}
                        style={styles.fotoPerfil}
                    />
                    <Text style={styles.userName}>{this.state.feed.nome}</Text>
                </View>
                <Image
                    resizeMode="cover"
                    source={{uri: this.state.feed.imgPublicacao}}
                    style={styles.publication}
                />
                <View style={styles.likeBtn}>
                    <TouchableOpacity>
                        <Image
                            source={require('../img/like.png')}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSend}>
                        <Image
                            source={require('../img/send.png')}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>

            </View>
        )
    }
}
export default List

const styles = StyleSheet.create({
    container: {

    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
    },
    publication: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    likeBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike:{
        width: 33,
        height: 33,
    },
    btnSend: {
        paddingLeft: 5,
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5,
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    }
})