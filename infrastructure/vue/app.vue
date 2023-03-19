<template>
  <h1>Tictactoe</h1>
  <div v-if="winner">
    <p>{{ winner }} has won!</p>
    <button @click="restart()">Restart?</button>
  </div>
  <div v-else>
    <p>Its {{ player }} turn</p>
    <div v-for="(row, rowIndex) in board.squares" class="row">
      <div v-for="(column, columnIndex) in row" class="column" @click="onSquareClicked(rowIndex, columnIndex)">
        <player :player="column.player" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTictactoe } from "./hooks/tictactoe";
import Player from "./components/player.vue";

const { board, player, winner, onSquareClicked, restart } = useTictactoe();
</script>

<style scoped>
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
}
</style>
