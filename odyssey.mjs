// Import document classes.
import { OdysseyActor } from "./documents/actor.mjs";
// import { BoilerplateItem } from "./documents/item.mjs";
// Import sheet classes.
import { OdysseyActorSheet } from "./sheets/actor-sheet.mjs";
// import { BoilerplateItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
// import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
// import { BOILERPLATE } from "./helpers/config.mjs";


/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

// Hooks.once('init', function() {

    // Add utility classes to the global game object so that they're more easily
    // accessible in global contexts.
    // game.boilerplate = {
    //   BoilerplateActor,
    //   BoilerplateItem,
    // };
  
    // // Add custom constants for configuration.
    // CONFIG.BOILERPLATE = BOILERPLATE;
  
    // /**
    //  * Set an initiative formula for the system
    //  * @type {String}
    //  */
    // CONFIG.Combat.initiative = {
    //   formula: "1d20 + @abilities.dex.mod",
    //   decimals: 2
    // };
  
    // // Define custom Document classes
    // CONFIG.Actor.documentClass = BoilerplateActor;
    // CONFIG.Item.documentClass = BoilerplateItem;
  
    // Register sheet application classes
    // Actors.unregisterSheet("core", ActorSheet);
    // Actors.registerSheet("odyssey", OdysseyActorSheet, { makeDefault: true });
    // Items.unregisterSheet("core", ItemSheet);
    // Items.registerSheet("odyssey", OdysseyItemSheet, { makeDefault: true });
  
    // Preload Handlebars templates.
    // return preloadHandlebarsTemplates();
  // });

// import { SystemActor, SystemItem } from "./module/documents.mjs";
import { PlayeCharacterDataModel, NPCDataModel, ItemDataModel } from "./module/data-models.mjs";

Hooks.once("init", () => {
  // Configure custom Document implementations.
  CONFIG.Actor.documentClass = OdysseyActor;
  // CONFIG.Item.documentClass = SystemItem;

  // Configure System Data Models.
  CONFIG.Actor.dataModels = {
    playerCharacter: PlayeCharacterDataModel,
    npc: NPCDataModel
  };
  // CONFIG.Item.dataModels = {
  //   item: ItemDataModel
  // };

  Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('odyssey', OdysseyActorSheet, {
    type: ["playercharacter"],
    makeDefault: true,
    label: 'ODYSSEY.SheetClassPlayerCharacter',
  });

  // Configure trackable attributes.
  CONFIG.Actor.trackableAttributes = {
    playerCharacter: {
      bar: ["resources.health"],
      value: ["progress"]
    },
    npc: {
      bar: ["resources.health"],
      value: []
    }
  };
});