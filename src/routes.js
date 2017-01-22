import Home from './components/Home.vue'
import Learn from './components/Learn.vue'
import Diagnosis from './components/Diagnosis.vue'
import Algorithm from './components/Algorithm.vue'
import Diet from './components/Diet.vue'
import Complications from './components/Complications.vue'
import Therapy from './components/Therapy.vue'
import Tools from './components/Tools.vue'
export const routes = [
  { path: '/', component: Home},
  { path: '/learn', component: Learn},
  { path: '/diagnosis', component: Diagnosis},
  { path: '/algorithm', component: Algorithm},
  { path: '/diet', component: Diet},
  { path: '/therapy', component: Therapy},
  { path: '/complications', component: Complications},
  { path: '/tools', component: Tools},
];
