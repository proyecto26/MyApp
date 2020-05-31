import { useState, useEffect } from 'react'
import { SQLiteService } from '../services'

export const useOfflineList = function (
  collection: string,
  state?: any,
): Array<any> {
  const [items, setItems] = useState<Array<any>>([])
  useEffect(
    function (): any {
      SQLiteService.getItems(`SELECT * FROM ${collection}`).then(setItems)
    },
    [collection, state],
  )

  return items
}
