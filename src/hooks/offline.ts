import { useState, useEffect } from 'react'
import { DatabaseService } from '../services'

export const useOfflineCollection = function <T>(collection: string): Array<T> {
  const [items, setItems] = useState<Array<T>>([])
  useEffect(
    function () {
      const subscription = DatabaseService.collections
        .get(collection)
        .query()
        .observe()
        .subscribe((records) => {
          setItems(records.map((i) => i._raw as any))
        })
      return subscription.unsubscribe
    },
    [collection],
  )

  return items
}
