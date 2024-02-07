import VueKonva from 'vue-konva';
import { boot } from 'quasar/wrappers';
// import FloorPlugin from 'floor-plan-map-v4';
export default boot(({ app }) => {
  return new Promise((resolve, reject) => {
    app.use(VueKonva);
    resolve();
  });
});
