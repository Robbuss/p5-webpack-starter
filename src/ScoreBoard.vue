<template>
  <table class="scores">
    <tr>
      <td>Player</td>
      <td>Score</td>
    </tr>
    <tr v-for="(score, i) in scores" :key="i">
      <td>{{ score.player }}</td>
      <td>{{ score.score }}</td>
    </tr>
  </table>
</template>
<style scoped>
.scores{
    position:absolute;
    left:525px;
}

</style>
<script>
import scores from "./scoreboard.json";
export default {
  data() {
    return {
      scores: {}
    };
  },
  mounted() {
    this.scores = scores;
  }
};
</script>
