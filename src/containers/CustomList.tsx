import React, { useState } from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  LayoutChangeEvent,
  ListRenderItem
} from 'react-native'

interface Props {
  items: any[],
  style: object | any[],
  renderItem: ListRenderItem<any>
}

const CustomListContainer: React.SFC<Props> = ({ items, style, renderItem }) => {

  const itemWidth = 150
  const [numColumns, setNumColumns] = useState(2)

  const onLayout = (event: LayoutChangeEvent) => { 
    const { width } = event.nativeEvent.layout
    const numColumns = Math.floor(width / itemWidth)
    setNumColumns(numColumns > 2 ? numColumns : 2)
  }

  return (
    <View style={[styles.container, style]} onLayout={onLayout}>
      <FlatList
        data={items}
        horizontal={false}
        numColumns={numColumns}
        key={`CustomList_${numColumns}`}
        alwaysBounceVertical={true}
        directionalLockEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ margin: 0 }}
        keyExtractor={({ id }, index) => (id || index).toString()}
        columnWrapperStyle={styles.row}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  }
})

export default CustomListContainer
