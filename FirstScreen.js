import React from 'react';  
import { StyleSheet, View, TouchableOpacity, Text, Platform, AsyncStorage} from 'react-native';  
  
export default class FirstScreen extends React.Component {  
  
    constructor(props) {   
        super(props);  
        this.state = {  
            counter: 0, 
        };  
    }    


    saveData =  () =>{ 
        const { navigate } = this.props.navigation; 
        this.state.counter +=1;
        // console.log(this.state.counter);
        let c=this.state.counter;
        console.log(c);
        // AsyncStorage.setItem('count',this.state.counter);
        
        try {
         AsyncStorage.setItem('count',c.toString());
          } catch (error) {

          }

        this.props.navigation.navigate('Second');
      }  

  
    render() {  
        // const { navigate } = this.props.navigation;  
        return (       
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
            <TouchableOpacity onPress={this.saveData}> 
        <Text style={styles.buttonStyle}>Click</Text> 
        </TouchableOpacity>  
        </View>  
          
    );  
    }  
}  
const styles = StyleSheet.create({   

    buttonStyle:{  
        fontSize: 50,  
        marginTop: 100,   
    }  
});  