import { useState, useEffect } from 'react'
import { SQLiteService } from '../services'

export const useOfflineList = function (collection: string): Array<any> {
  const [items, setItems] = useState<Array<any>>([])
  useEffect(
    function (): any {
      SQLiteService.getItems(`SELECT * FROM ${collection}`).then((list) =>
        setItems(list),
      )
    },
    [collection],
  )

  return items
}
