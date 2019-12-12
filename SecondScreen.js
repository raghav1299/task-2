import React from 'react';  
import { StyleSheet, View, Text, Button, AsyncStorage} from 'react-native';  
  
export default class SecondScreen extends React.Component { 

    
    
    displayData = async ()=>{  
        try{  
          let count1 = await AsyncStorage.getItem('count');
          console.log(count1)
          alert(count1)
        }  
        catch(error){  
          alert(error)  
        }  
      }  

    render() {  
    
        const { navigation } = this.props;  
        this.displayData();  
       
          
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
                <Text style={styles.textStyle}>{this.count1}</Text>  
                   <View style={styles.buttonStyle}>  
                <Button  
                    title="Go back"  
                    onPress={() => this.props.navigation.goBack()}  
                />  
                </View>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    textStyle: {  
        fontSize: 23,  
        textAlign: 'center',  
        color: 'red',  
    },  
  
    buttonStyle:{  
        width: "50%",  
        marginTop: 100,   
    }  
});  


















