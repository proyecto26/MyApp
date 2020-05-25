import { SQLiteDatabase, openDatabase } from 'react-native-sqlite-storage'

export class SQLiteService {
  private readonly databaseName: string = 'my.db'
  private database!: SQLiteDatabase

  constructor(databaseName?: string) {
    if (databaseName) this.databaseName = databaseName
  }

  get db() {
    if (!this.database) {
      this.database = openDatabase(
        {
          name: this.databaseName,
          location: 'default',
          //TODO: Importing a pre-populated database.
          //createFromLocation: 1,
        },
        () => null,
        () => null,
      )
    }
    return this.database
  }

  executeSql(query: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.transaction(function (tx) {
        tx.executeSql(
          query,
          params,
          (transaction, result) => {
            resolve(result || transaction)
          },
          (transaction, error) => {
            reject(error || transaction)
          },
        )
      })
    })
  }

  sqlBatch(sqlStatements: (string | string[] | any)[]): Promise<any> {
    return new Promise((resolve, reject) => {
      ;(this.db as any).sqlBatch(
        sqlStatements,
        () => resolve(),
        (err: Error) => reject(err),
      )
    })
  }

  async getFirstItem(query: string, params?: any) {
    const response = await this.executeSql(query, params)
    return response.rows?.length ? response.rows.item(0) : null
  }

  async getItems(query: string, params?: any) {
    const response = await this.executeSql(query, params)
    let items = []
    for (var i = 0; i < response.rows.length; i++) {
      items.push(response.rows.item(i))
    }
    return items
  }
}

export default new SQLiteService()
