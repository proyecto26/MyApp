import { useState, useEffect } from 'react'
import { Database } from '../services'

export const useOfflineCollection = function (collection: string): Array<any> {
  const [items, setItems] = useState<Array<any>>([])
  useEffect(
    function () {
      const subscription = Database.collections
        .get(collection)
        .query()
        .observe()
        .subscribe((records) => {
          setItems(records.map((i) => i._raw))
        })
      return subscription.unsubscribe
    },
    [collection],
  )

  return items
}
