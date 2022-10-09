import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

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

  },

  containerList: {
    width: '100%',
  },

  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
  },

  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },

  emptyListContent: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  }

});