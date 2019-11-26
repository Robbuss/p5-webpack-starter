import * as p5 from 'p5';
import sketch from './sketch.js'
import Vue from "vue";
import ScoreBoard from './ScoreBoard.vue';

Vue.component('scoreboard', ScoreBoard)
new Vue({
    el: '#app',
})

new p5(sketch);
