import EvaporateCoil from './custom-item/evaporator-coils.js';
import WireShelf from './custom-item/wire-shelf.js';
import cuttingBoard from './custom-item/cutting-board.js';
import gaskets from './custom-item/gaskets.js';
import heaterWare from './custom-item/heater-wire.js';
import completeStripCurtains from './custom-item/complete-strip-curtains.js';
import replacementStripCurtains from './custom-item/replacement-strip-curtains.js';
import stripMaterialCurtains from './custom-item/strip-material-curtains.js';

export default  {
    name : 'App',
    template : `
      <component :is="currentComponent"/>
      
    `,
    data() {
      return {
          // currentComponent : EvaporateCoil,
          // currentComponent : WireShelf,
          // currentComponent : cuttingBoard,
          // currentComponent : gaskets,
          // currentComponent : heaterWare,
          // currentComponent : completeStripCurtains,
          // currentComponent : replacementStripCurtains,
          currentComponent : stripMaterialCurtains,
      }
    },
}

