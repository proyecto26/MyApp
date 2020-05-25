import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  fullSize: { flex: 1 },
  header: {
    height: 100,
    marginHorizontal: 20,
  },
  pic: {
    padding: 10,
    resizeMode: 'contain',
    borderColor: 'black',
    borderWidth: 1,
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  subtitle: {
    marginLeft: 20,
    color: 'rgba(0, 0, 0, .87)',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginVertical: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  icon: {
    marginHorizontal: 10,
  },
})
