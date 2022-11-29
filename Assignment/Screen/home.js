import react from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity, Alert } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

export default function Home({navigation}) {

    signOut = () => {
    
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.navigate('Login');
       
          }

    return (
        <LinearGradient colors={['#009EFF', '#00E7FF',]} style={styles.linearGradient}>

            <Text style={{ color: '#fff', fontSize: 20 }}>This is Home</Text>
            <View style={{width:220,height:100,justifyContent:'center',alignItems:'center',marginTop:50}}>
            <LinearGradient colors={['#009EFF', '#00E7FF',]} style={{ width: '100%', borderRadius: 25 }}>
                <TouchableOpacity onPress={signOut}
                    style={styles.button}
                >
                    <Text style={{ color: '#fff' }}>Sign Out</Text>
                </TouchableOpacity>

            </LinearGradient>
            </View>
        </LinearGradient>
    );
} var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },button: {
        alignItems: "center",
        justifyContent:'center',
        height:40,
        width:'100%',
        borderRadius:25,
       
        color:'#fff'
        
      },
})