import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet, TouchableHighlight, View, Text, ListRenderItem } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

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
      <TouchableHighlight key={`${item.email}`} style={styles.card} onPress={() => onItemPress(item)}>
        <Transition appear={'top'} shared='item' delay>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{ item.email }</Text>
          </View>
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
    backgroundColor: '#593693'
  },
  content: {
    backgroundColor: '#593693'
  },
  card: {
    flex: 1,
    width: '100%',
    height: 50,
    margin: 10,
    padding: 10,
    backgroundColor: '#ECECEC',
    borderColor: '#CCC',
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: '#EEE',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    flexDirection: 'row',
    elevation: 3,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 18,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  text: {
    color: 'black'
  }
})

export default UserListScreen
