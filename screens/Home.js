import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/senailogoBranco.png')}/>
      <View style={styles.containerButton}>
      <Pressable style={({pressed}) => [
          styles.Button,
          {backgroundColor :pressed ? '#E8E8E8' : 'white'}
        ] }>
        <Text style={styles.Buttontext}>
          Saiba Mais
        </Text>
      </Pressable>
      <Pressable style={({pressed}) => [
          styles.Button,
          {backgroundColor :pressed ? '#E8E8E8' : 'white'}
        ] }>
        <Text style={styles.Buttontext}>
          Contato
        </Text>
      </Pressable>
    </View>
     <View  style={styles.containerButton}>
        <Pressable style={({pressed}) => [
          styles.Button,
          {backgroundColor :pressed ? '#E8E8E8' : 'white'}
        ] }>
          <Text style={styles.Buttontext}>
            Portais
          </Text>
        </Pressable>
         <Pressable style={({pressed}) => [
          styles.Button,
          {backgroundColor :pressed ? '#E8E8E8' : 'white'}
        ] }>
          <Text style={styles.Buttontext}>
           Calendario
          </Text>
        </Pressable>
      </View>
      <StatusBar style='dark'/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D51CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#ffffff',
    fontFamily: 'ui-rounded',
         

  },
  Action:{
    paddingVertical: 24,
    paddingHorizontal:24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius:32,
    borderWidth: 2,
    borderColor:'#144480',
  },
  logo:{
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 10,
    bottom: 200, 
    width:300,
  },
  containerButton:{
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 10,

  },
  Button:{
    bottom: 100,
    backgroundColor:'#ffff',
    borderRadius: 22,
    padding: 10,
    alignItems:'center',
    width:'40%',
  },
  Buttontext:{
    textAlign: 'center',
    color: '#021123',
    fontSize: 19,
  }

});
