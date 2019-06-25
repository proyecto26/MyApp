import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet } from 'react-native'

import { CustomListContainer } from '../containers'
import { useUserList } from '../hooks'

const UserListScreen = () => {

  const items = useUserList()

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={StyleSheet.absoluteFill}>
      <CustomListContainer items={items} style={styles.content} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#593693'
  },
})

export default UserListScreen
