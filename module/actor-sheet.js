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
    const data = super.getData();
    EntitySheetHelper.getAttributeData(data);
    data.shorthand = !!game.settings.get("worldbuilding", "macroShorthand");
    return data;
  }
}