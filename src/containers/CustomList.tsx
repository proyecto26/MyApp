import React, { useState } from 'react'
import { View, FlatList, Text, StyleSheet, LayoutChangeEvent } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'

interface Props {
  items: any[],
  style: object | any[]
}

const CustomListContainer: React.SFC<Props> = ({ items, style }) => {

  const itemWidth = 100
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
        renderItem={({ item, index }) =>
          <View key={index} style={styles.row}>
            <Transition appear={'top'} delay>
              <View style={styles.textContainer}>
                <Text style={styles.text}>jdhhd dkjdhbdhdhd ud dg dgdgdh dghd djh d</Text>
              </View>
            </Transition>
          </View>
        }
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

export default CustomListContainer
