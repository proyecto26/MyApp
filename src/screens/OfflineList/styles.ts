import { StyleSheet } from 'react-native'

const container = StyleSheet.absoluteFill

export default StyleSheet.create({
  container: Object.assign({}, container, {
    backgroundColor: '#231E32',
  }),
  header: {
    backgroundColor: '#453AA4',
  },
  content: {
    backgroundColor: '#231E32',
  },
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
  photo: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: 'black',
  },
  footer: {
    overflow: 'hidden',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    bottom: 0,
    width: '100%',
    backgroundColor: '#453AA4',
    textAlign: 'center',
  },
  netInfo: {
    width: 100,
    position: 'absolute',
    right: 10,
    marginTop: 0,
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
  deleteButton: {
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
