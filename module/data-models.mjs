const {
    BooleanField, HTMLField, NumberField, SchemaField, StringField 
  } = foundry.data.fields;
  
function createStatField() {
    return {
        value: new NumberField({ required: true, integer: true, initial: 0 }),
        min: new NumberField({ required: true, integer: true, initial: -5 }),
        max: new NumberField({ required: true, integer: true, initial: 5 }),
        experience: new SchemaField ({ 
            xp1: new BooleanField({ required: true, initial: false }),
            xp2: new BooleanField({ required: true, initial: false }),
            xp3: new BooleanField({ required: true, initial: false }),
            xp4: new BooleanField({ required: true, initial: false }),
            xp5: new BooleanField({ required: true, initial: false }),   
        }) 
    };
}

function createThemebookField() {
    return {
        themebookName: new StringField({ 
            required: true, 
            blank: true,
            options: ["Athleticism", "Empathy", "Essential Bond", "Empathy", "Expertise", "Inflection Point", "Mission", "Struggle", "Weaponsmaster"]
        }),
        basicMove: new HTMLField({ required: true, blank: true }),
        abilityList: new HTMLField({ required: true, blank: true })
    };
}

export class PlayerCharacterDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            harm: new SchemaField({
                value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                max: new NumberField({ required: true, integer:true, initial: 10 }),
                unstable: new BooleanField({ required: true, initial: false })
            }),
            stats: new SchemaField({
                might: new SchemaField(createStatField()),
                mind: new SchemaField(createStatField()),
                charm: new SchemaField(createStatField()),
                finesse: new SchemaField(createStatField()),
            }),
            themebooks: new SchemaField({
                themebook0: new SchemaField(createThemebookField()),
                themebook1: new SchemaField(createThemebookField()),
                themebook2: new SchemaField(createThemebookField()),
                themebook3: new SchemaField(createThemebookField()),
            }),
            signatureMove: new SchemaField({
                signatureSourceThemebook: new StringField({ 
                    required: true,
                    blank: true, 
                    options: ["Athleticism", "Empathy", "Essential Bond", "Empathy", "Expertise", "Inflection Point", "Mission", "Struggle", "Weaponsmaster"]
                }),
                signatureOngoing: new HTMLField({ require: true, blank: true }),
                signatureActive: new HTMLField({ require: true, blank: true }),
                signatureEffect: new HTMLField({ require: true, blank: true }),
                signatureFrequency: new HTMLField({ require: true, blank: true }),
                signatureDownside: new HTMLField({ require: true, blank: true })
            }),
            items: new HTMLField({ required: true, blank: true }),
            background: new SchemaField({
                pronouns: new HTMLField({ required: true, blank: true }),
                biography: new HTMLField({ required: true, blank: true })
            }),
            notes: new HTMLField({ required: true, blank: true })
        };
    }
}

export class NPCDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            enemyType: new SchemaField({
                value: new StringField({
                    required: true,
                    blank: true,
                    options: ["Minor", "Major", "Boss", "NPC"]
                })
            }),
            harm: new SchemaField({
                value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
                max: new NumberField({ required: true, integer:true, initial: 10}),
            }),
            abilities: new HTMLField({ required: true, blank: true }),
            background: new SchemaField({
                pronouns: new HTMLField({ required: true, blank: true }),
                biography: new HTMLField({ required: true, blank: true })
            }),
        }
    }
}

export class ItemDataModel extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            itemType: new SchemaField({
                value: new StringField({
                    required: true,
                    blank: true,
                    options: ["Regular", "Special", "Core"]
                })
            }),
            description: new HTMLField({ required: true, blank: true }),
            history: new HTMLField({ required: true, blank: true })
        }
    }
}