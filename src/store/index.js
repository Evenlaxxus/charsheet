import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    test: [],
    routes: [
      {
        text: "Home",
        to: "/"
      },
      {
        text: "Fight",
        to: "/fight"
      },
      {
        text: "Spells",
        to: "/spells"
      },
      {
        text: "Feats",
        to: "/feats"
      },
      {
        text: "Inventory",
        to: "/inventory"
      },
      {
        text: "About",
        to: "/about"
      }
    ],
    character: {
      info: {
        name: "",
        class: "",
        race: "",
        background: "",
        alignment: ""
      },
      stats: {
        level: null,
        proficiency_bonus: null,
        speed: null,
        inspiration: null
      },
      currency: {
        cp: null,
        sp: null,
        ep: null,
        gp: null,
        pp: null
      },
      abilities: [
        {
          name: "Str",
          score: null,
          skills: [
            {
              name: "Saving throw",
              score: null,
              prof: false
            },
            {
              name: "Athletics",
              score: null,
              prof: false
            }
          ]
        },
        {
          name: "Dex",
          score: null,
          skills: [
            {
              name: "Saving throw",
              score: null,
              prof: false
            },
            {
              name: "Acrobatics",
              score: null,
              prof: false
            },
            {
              name: "Sleight of hands",
              score: null,
              prof: false
            },
            {
              name: "Stealth",
              score: null,
              prof: false
            }
          ]
        },
        {
          name: "Con",
          score: null,
          skills: [
            {
              name: "Saving throw",
              score: null,
              prof: false
            }
          ]
        },
        {
          name: "Int",
          score: null,
          skills: [
            {
              name: "Saving throw",
              score: null,
              prof: false
            },
            {
              name: "Arcana",
              score: null,
              prof: false
            },
            {
              name: "History",
              score: null,
              prof: false
            },
            {
              name: "Investigation",
              score: null,
              prof: false
            },
            {
              name: "Nature",
              score: null,
              prof: false
            },
            {
              name: "Religion",
              score: null,
              prof: false
            }
          ]
        },
        {
          name: "Wis",
          score: null,
          skills: [
            {
              name: "Saving throw",
              score: null,
              prof: false
            },
            {
              name: "Animal handling",
              score: null,
              prof: false
            },
            {
              name: "Insight",
              score: null,
              prof: false
            },
            {
              name: "Medicine",
              score: null,
              prof: false
            },
            {
              name: "Perception",
              score: null,
              prof: false
            },
            {
              name: "Survival",
              score: null,
              prof: false
            }
          ]
        },
        {
          name: "Cha",
          score: null,
          skills: [
            {
              name: "Saving throw",
              score: null,
              prof: false
            },
            {
              name: "Deception",
              score: null,
              prof: false
            },
            {
              name: "Intimidation",
              score: null,
              prof: false
            },
            {
              name: "Performance",
              score: null,
              prof: false
            },
            {
              name: "Persuasion",
              score: null,
              prof: false
            }
          ]
        }
      ],
      feats: [],
      spells: [],
      items: []
    }
  },
  getters: {
    routes: state => {
      return state.routes;
    },
    spells: state => {
      return state.character.spells;
    },
    feats: state => {
      return state.character.feats;
    },
    items: state => {
      return state.character.items;
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),

    addSpell: (state, spell) => state.character.spells.push(spell),
    removeSpell: (state, index) => state.character.spells.splice(index, 1),

    addFeat: (state, feat) => state.character.feats.push(feat),
    removeFeat: (state, index) => state.character.feats.splice(index, 1),

    addItem: (state, item) => state.character.items.push(item),
    removeItem: (state, index) => state.character.items.splice(index, 1)
  },
  actions: {}
});
