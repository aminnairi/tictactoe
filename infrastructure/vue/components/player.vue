<template>
  <div v-if="player === PlayerEnumeration.Cross">X</div>
  <div v-else-if="player === PlayerEnumeration.Circle">O</div>
  <div v-else></div>
</template>

<script lang="ts" setup>
import { PlayerEnumeration } from "../../../domain/enumerations/player";

const { player } = defineProps({
  player: String
});
</script>
