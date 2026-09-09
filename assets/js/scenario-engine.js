import {economics} from './financial-engine.js';
export const evaluateScenarios=(model,scenarios)=>Object.entries(scenarios).map(([key,s])=>({key,...s,...economics(model,{...s,rent:model.premises.fullMonthlyRent})}));
