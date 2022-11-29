import react from "react";
import { View,Text,StyleSheet,TextInput  } from "react-native";

export default function InputText ({viewLabel,
    valuData,
    valueSet,
    txtEntry,
    autoCap,
    autoCorrect,
}) {

    
    return(
        <View>
             <TextInput style={styles.text}
               placeholder={viewLabel}
               placeholderTextColor="#ffffff"
               value={valuData}
               onChangeText={valueSet}
               secureTextEntry={txtEntry}
               autoCapitalize={autoCap}
               autoCorrect={autoCorrect} />
                
        </View>
    );
} const styles=StyleSheet.create({

    text:{
        height:40,width:220,marginTop:20,borderColor:'#00FFF6',borderWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0
    }
}) 
