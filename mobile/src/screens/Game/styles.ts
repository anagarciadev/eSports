import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },

  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop:32,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 72,
    justifyContent:'space-between',
  },

  logo: {
    width: 72,
    height: 40,

  },

  right: {
    width: 20,
    height: 20,

  }
});