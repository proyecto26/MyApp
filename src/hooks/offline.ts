import { useState, useEffect } from 'react'
import { Condition } from '@nozbe/watermelondb/QueryDescription'
import { getDatabase } from '../services'

const initialConditions: Array<Condition> = []

export const useOfflineCollection = function <T>(
  collection: string,
  conditions = initialConditions,
): Array<T> {
  const [items, setItems] = useState<Array<T>>([])
  useEffect(
    function () {
      const database = getDatabase()
      const subscription = database.collections
        .get(collection)
        .query(...conditions)
        .observe()
        .subscribe(records => {
          setItems(records.map(i => i._raw as any))
        })
      return () => subscription.unsubscribe()
    },
    [collection, conditions],
  )

  return items
}
