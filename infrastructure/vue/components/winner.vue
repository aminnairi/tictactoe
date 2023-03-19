<template>
  <div v-if="winner === PlayerEnumeration.Circle">
    Circle
  </div>
  <div v-else-if="winner === PlayerEnumeration.Cross">
    Cross
  </div>
  <div v-else-if="winner === PlayerEnumeration.None">
    No one
  </div>
</template>

<script lang="ts" setup>
import { PlayerEnumeration } from "../../../../domain/enumerations/player";

const { player } = defineProps({
  player: String
});
</script>
