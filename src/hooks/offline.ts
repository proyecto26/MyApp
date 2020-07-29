import { useState, useEffect } from 'react'
import { Condition } from '@nozbe/watermelondb/QueryDescription'
import { DatabaseService } from '../services'

const initialConditions = []

export const useOfflineCollection = function <T>(
  collection: string,
  conditions: Array<Condition> = initialConditions,
): Array<T> {
  const [items, setItems] = useState<Array<T>>([])
  useEffect(
    function () {
      const subscription = DatabaseService.collections
        .get(collection)
        .query(...conditions)
        .observe()
        .subscribe((records) => {
          setItems(records.map((i) => i._raw as any))
        })
      return () => subscription.unsubscribe()
    },
    [collection, conditions],
  )

  return items
}
