import { StyleSheet } from 'react-native'

const container = StyleSheet.absoluteFill

export default StyleSheet.create({
  container: Object.assign({}, container, {
    backgroundColor: '#231E32',
    paddingBottom: 60,
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
})
