<template>
  <div v-if="player === PlayerEnumeration.Circle">
    Circle
  </div>
  <div v-else-if="player === PlayerEnumeration.Cross">
    Cross
  </div>
  <div v-else-if="player === PlayerEnumeration.None">
    No one
  </div>
</template>

<script lang="ts" setup>
import { PlayerEnumeration } from "@application/domain/enumerations/player";

const { player } = defineProps({
  player: String
});
</script>
