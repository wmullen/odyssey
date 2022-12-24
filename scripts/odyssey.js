// // Import document classes.
import { OdysseyActor } from "./actor.mjs";
// import { BoilerplateItem } from "./documents/item.mjs";
// // Import sheet classes.
import { OdysseyActorSheet } from "./actor-sheet.mjs";
// import { BoilerplateItemSheet } from "./sheets/item-sheet.mjs";
// // Import helper/utility classes and constants.
// import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
// import { BOILERPLATE } from "./helpers/config.mjs";


/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', function() {

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
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("odyssey", OdysseyActorSheet, { makeDefault: true });
    // Items.unregisterSheet("core", ItemSheet);
    // Items.registerSheet("odyssey", OdysseyItemSheet, { makeDefault: true });
  
    // Preload Handlebars templates.
    return preloadHandlebarsTemplates();
  });