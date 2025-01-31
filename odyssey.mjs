// Import document classes.
import { OdysseyActor } from "./module/actor.mjs";
// import { BoilerplateItem } from "./documents/item.mjs";
// Import sheet classes.
import { OdysseyActorSheet } from "./module/actor-sheet.mjs";
// import { BoilerplateItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
// import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
// import { BOILERPLATE } from "./helpers/config.mjs";


/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

import { PlayeCharacterDataModel, NPCDataModel } from "./module/data-models.mjs";

Hooks.once("init", () => {

  // Configure custom Document implementations.
  CONFIG.Actor.documentClass = OdysseyActor;
  // CONFIG.Item.documentClass = SystemItem;

  // Configure System Data Models.
  CONFIG.Actor.dataModels = {
    playerCharacter: PlayerCharacterDataModel,
    npc: NPCDataModel
  };
  // CONFIG.Item.dataModels = {
  //   item: ItemDataModel
  // };

  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('odyssey', OdysseyActorSheet, {
    makeDefault: true,
    label: 'ODYSSEY.SheetLabels.Actor',
  });

  // Configure trackable attributes.
  // CONFIG.Actor.trackableAttributes = {
  //   playerCharacter: {
  //     bar: ["resources.health"],
  //     value: ["progress"]
  //   }
  // };
});