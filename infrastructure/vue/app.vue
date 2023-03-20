<template>
  <h1>Tictactoe</h1>
  <div v-if="winner">
    <p>{{ winner }} has won!</p>
    <button @click="restart()">Restart?</button>
  </div>
  <div v-else>
    <small v-if="error" className="error">
      <p>Oops, an error occurred: {{ error }}</p>
    </small>
    <p>Its {{ player }} turn</p>
    <div v-for="(row, rowIndex) in board.squares" className="row">
      <div v-for="(column, columnIndex) in row" className="column" @click="onSquareClicked(rowIndex, columnIndex)">
        <player :player="column.player" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTictactoe } from "./hooks/tictactoe";
import Player from "./components/player.vue";

const { board, player, winner, error, onSquareClicked, restart } = useTictactoe();
</script>

<style scoped>
h1 {
  font-family: sans-serif;
}

.row {
  display: flex;
  flex-direction: row;
}
.column {
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.error {
  display: block;
  background-color: lightcoral;
  color: red;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: sans-serif;
}
</style>
