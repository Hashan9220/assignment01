import react ,{useState} from "react";
import auth from '@react-native-firebase/auth';
import { View,Text,StyleSheet,Image,KeyboardAvoidingView,TouchableOpacity,Alert } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import InputText from "../component/InputText";
import { ScrollView } from "react-native-gesture-handler";


export default function Login ({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
console.log("login");
userLogin = () => {

  auth()
      .signInWithEmailAndPassword(email, password)
     
      .then(() => {
          console.log('User Loging Successful....');
          navigation.navigate('Home');
          
      })
      .catch(error => {
          Alert.alert(
              "WRONG",
              "Please Enter Valied Details0",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
        
      })    
    }


return(
        <LinearGradient colors={['#009EFF', '#00E7FF', ]} style={styles.linearGradient}>

        <View style={{alignItems:'center',justifyContent:'center',height:250,width:'100%'}}> 
         <View style={{alignItems:'center',justifyContent:'center',height:'20%',width:'80%',margin:'5%',}}>
        <Image style={{width:100,height:100,marginLeft:20}} source={require('../assent/user.png')}/>
        <Text style={{fontSize:25,fontWeight:'bold',marginTop:10,color:'#fff',}}>Sign In</Text>
       </View>
       </View>
     <ScrollView style={{flex:1,}}>
       <View style={{alignItems:'center',padding:20,height:'100%',width:'100%',borderWidth:1,borderColor:'#009EFF',borderRadius:25,}}>
      <InputText viewLabel=" Email"
            valuData={email}
            valueSet={text => setEmail(text)}
            // txtEntry={true}
            />
      <InputText viewLabel=" Password" valuData={password}  valueSet={text => setPassword(text)}
       txtEntry={true}/>

      <View style={{width:220,height:100,justifyContent:'center',alignItems:'center',}}>
      <LinearGradient colors={['#009EFF', '#00E7FF', ]} style={{width:'100%',borderRadius:25}}>
  <TouchableOpacity   onPress={userLogin}
  style={styles.button}
  >
  <Text style={{color:'#fff'}}>Sign In</Text>
</TouchableOpacity>

</LinearGradient>

      </View>
      
      
    <View style={{flexDirection:'row'}}>
      <Text  style={{color:'#fff'}}>Create an account?</Text>
      <Text  onPress={() => navigation.navigate("SignUp")}> SignUp</Text>
    </View>
        
       </View>
       </ScrollView>
     
       </LinearGradient>
    );
}
var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    container: {
        flex: 1,
        justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      },
      button: {
        alignItems: "center",
        justifyContent:'center',
        height:40,
        width:'100%',
        borderRadius:25,
       
        color:'#fff'
        
      },
});