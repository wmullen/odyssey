/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
 export class OdysseyActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      // classes: ["boilerplate", "sheet", "actor"],
      template: "systems/odyssey/templates/character-sheet.html",
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "themebooks" }]
    });
  }

  // /** @override */
  // get template() {
  //   return `systems/boilerplate/templates/actor/actor-${this.actor.data.type}-sheet.html`;
  // }

  /** @override */
  getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData();

    // Use a safe clone of the actor data for further operations.
    const systemData = context.actor.system;

    // Add the actor's data to context.data for easier access, as well as flags.
    context.data = systemData.data;
    context.flags = systemData.flags;

    // // Prepare character data and items.
    // if (actorData.type == 'character') {
    //   this._prepareItems(context);
    //   this._prepareCharacterData(context);
    // }

    // // Prepare NPC data and items.
    // if (actorData.type == 'npc') {
    //   this._prepareItems(context);
    // }

    // // Add roll data for TinyMCE editors.
    // context.rollData = context.actor.getRollData();

    // // Prepare active effects
    // context.effects = prepareActiveEffectCategories(this.actor.effects);

    return context;
  }
}