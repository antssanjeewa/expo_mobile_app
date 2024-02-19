import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { AuthProvider } from './context/AuthProvider'
import Root from './Root'

export class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Root />
      </AuthProvider>
    )
  }
}

export default App