/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
 export class OdysseyActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["odyssey", "sheet", "actor"],
      width: 600,
      height: 600,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "themebooks" }]
    });
  }

  /** @override */
  get template() {
    return `systems/odyssey/templates/character-sheet.html`;
  }

  /** @override */
  async getData() {
    // Retrieve the data structure from the base sheet. You can inspect or log
    // the context variable to see the structure, but some key properties for
    // sheets are the actor object, the data object, whether or not it's
    // editable, the items array, and the effects array.
    const context = super.getData();

    // Add the actor's data to context.data for easier access, as well as flags.
    // context.system = actorData.system;
    // context.flags = actorData.flags;

    return context;
  }
}