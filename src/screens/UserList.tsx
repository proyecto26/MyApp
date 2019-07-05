import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet, TouchableHighlight, View, Image, ListRenderItem } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import { View as AnimatableView } from 'react-native-animatable'

import { NavigationService } from '../services'
import { CustomListContainer } from '../containers'
import { useUserList } from '../hooks'
import { User } from '../models'

const UserListScreen = () => {

  const items = useUserList()

  const onItemPress = (item: any) => {
    NavigationService.navigate('details', { item })
  }

  const renderItem: ListRenderItem<any> = ({ item }: { item: User }) => {
    return (
      <TouchableHighlight key={item.email} style={styles.card} onPress={() => onItemPress(item)}>
        <Transition shared={item.email}>
          <AnimatableView useNativeDriver delay={2000} animation="pulse" easing="ease-out" style={styles.photo}>
            <Image style={{ flex: 1 }} resizeMode='contain' source={{ uri: 'https://picsum.photos/200' }} />
          </AnimatableView>
        </Transition>
      </TouchableHighlight>
    )
  }

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={[StyleSheet.absoluteFill, styles.container]}>
      <CustomListContainer 
        items={items}
        style={styles.content}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#231E32'
  },
  content: {
    backgroundColor: '#231E32'
  },
  card: {
    flex: 1,
    width: '100%',
    height: 200,
    margin: 10,
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
    backgroundColor: 'green'
  },
  text: {
    color: 'black'
  }
})

export default UserListScreen
