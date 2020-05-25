import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  fullSize: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    borderColor: '#CCC',
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: '#EEE',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    flexDirection: 'row',
    elevation: 3,
  },
  content: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'black',
  },
  item: {
    flex: 1,
    width: '100%',
    height: 200,
    margin: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadButton: {
    elevation: 4,
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: 'white',
  },
})
