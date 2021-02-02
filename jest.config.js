module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(ts)$': '<rootDir>/node_modules/ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/$1',
    '^@/(.+)': '<rootDir>/$1'
  }
}
