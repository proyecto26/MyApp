import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231E32',
  },
  header: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  photo: {
    height: 260,
  },
  imageGalleryFooter: {
    padding: 10,
    height: 100,
    flexDirection: 'row',
  },
  imageGalleryButtonContainer: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    padding: 5,
  },
  imageGalleryButton: {
    padding: 10,
    backgroundColor: 'gray',
  },
})
