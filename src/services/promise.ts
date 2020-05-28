export const mapSeries = (tasks: Array<any>) =>
  tasks.reduce(
    (promise, task) =>
      promise.then((result: any) =>
        task().then(Array.prototype.concat.bind(result)),
      ),
    Promise.resolve([]),
  )

export default {
  mapSeries,
}
