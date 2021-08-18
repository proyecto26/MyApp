module.exports = {
  dependencies: {
    '@nozbe/watermelondb': {
      platforms: {
        android: {
          sourceDir: '../node_modules/@nozbe/watermelondb/native/android',
          packageImportPath:
            'import com.nozbe.watermelondb.WatermelonDBPackage;',
          packageInstance: 'new WatermelonDBPackage()',
        },
      },
    },
  },
}
