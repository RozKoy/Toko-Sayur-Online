import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'white',
    overflow: 'auto',
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerLogIn: {
    alignItems: 'center',
    marginTop: '5%',
  },
  logo: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  
  content: {
    margin: "auto",
    marginTop: 20,
    width: '80%',
  },
  input: {
    backgroundColor: '#D6E4E8',
    width: '100%',
    padding: 10,
    margin: 5,
    borderRadius:10,
  },
  backButton: {
    width: 'fit-content',
    marginTop: 10,
    marginLeft: 10,
  },
  button_1: {
    margin: 'auto',
    color : '#ffff',
    fontSize: 18,
    padding: 5,
    marginTop: 15,
    marginBottom: 5,
    fontWeight : "Bold",
    width: '60%',
    textAlign: "center",
    backgroundColor: "#447055",
    borderRadius: 10,
  },
  button_2: {
    backgroundColor: "#C3DCB7",
    color : '#black',
    textAlign: "center",
    fontWeight : "Bold",
    fontSize: 18,
    margin: 'auto',
    padding: 5,
    marginBottom: 10,
    width: '60%',
    borderRadius: 10,
  },
  password: {
    textAlign: 'center',
    textDecorationLine: "underline",
    color: "#BFBFBF"
  },

  kategori: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 0,
    width: 'min-content',
  },
  items: {
    width:'95%',
    shadowColor: '#0D986A',
    shadowRadius: 5,
    shadowOpacity: 0.25,
    borderRadius:10,
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  text:{
    textAlign: 'center',
    fontSize:12,
    fontWeight:'medium',
    color:'#0D986A',
  },
  buy:{
    margin: 'auto',
    marginTop:5,
    width: 80,
    padding: 5,
    backgroundColor:'#0D986A',
    borderRadius:10,
    textAlign:'center',
    color:'white',
  },

  footer: {
    width:'100%',
    backgroundColor:'#fff',
    flexDirection:'row', 
    justifyContent:'space-between',
    padding: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowRadius: 10,
  },
});