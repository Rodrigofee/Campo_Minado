import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import params from './src/params'
import createMinedBoard from './src/functions'
import MineField from './src/components/MineField'
import Field from './src/components/Field'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficulteLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <View style={style.container}>
        <Text>Iniciando Mines!</Text>
        <Text>Tamanho da grade:
      {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View style={style.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})