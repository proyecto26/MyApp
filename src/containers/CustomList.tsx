import React, { useState } from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  LayoutChangeEvent,
  ListRenderItem,
} from 'react-native'

interface Props {
  items: any[]
  style: object | any[]
  renderItem: ListRenderItem<any>
}

const CustomListContainer: React.SFC<Props> = ({
  items,
  style,
  renderItem,
}) => {
  const itemWidth = 150
  const [numColumns, setNumColumns] = useState(2)

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    const columns = Math.floor(width / itemWidth)
    setNumColumns(columns > 2 ? columns : 2)
  }

  return (
    <View style={[styles.container, style]} onLayout={handleLayout}>
      <FlatList
        data={items}
        horizontal={false}
        numColumns={numColumns}
        alwaysBounceVertical={true}
        directionalLockEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.row}
        renderItem={renderItem}
        key={`CustomList_${numColumns}`}
        keyExtractor={({ id }, index) => (id || index).toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    margin: 0,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
})

export default CustomListContainer
