import { 
  SET_CHARACTERS, 
  SET_MODAL_DETAILS,
  SET_CHARACTERS_THUMBNAILS,
  SET_CURRENT_DETAILS,
  SET_CURRENT_INDEX
} from '../../types'

// Set initial state array
const initialState = {
  charactersList: [],
  modalDetails: false,
  currentDetails: {},
  currentIndex: 0,
  thumbnails: [{
    id: 0,
    url: `thumbnails/luke-skywalker.jpg`,
    label: 'Luke Skywalker'
  }, {
    id: 1,
    url: `thumbnails/C-3PO.jpg`,
    label: 'C-3PO'
  }, {
    id: 2,
    url: `thumbnails/R2-D2.jpg`,
    label: 'R2-D2'
  }, {
    id: 3,
    url: `thumbnails/darth-vader.jpg`,
    label: 'Darth Vader'
  }, {
    id: 4,
    url: `thumbnails/leia-organa.jpg`,
    label: 'Leia Organa'
  }, {
    id: 5,
    url: `thumbnails/owen-lars.jpg`,
    label: 'Owen Lars'
  }, {
    id: 6,
    url: `thumbnails/beru-whitesun-lars.jpg`,
    label: 'Beru Whitesun Lars'
  }, {
    id: 7,
    url: `thumbnails/R5-D4.jpg`,
    label: 'R5-D4'
  }, {
    id: 8,
    url: `thumbnails/biggs-darklighter.jpg`,
    label: 'Biggs Darklighter'
  }, {
    id: 9,
    url: `thumbnails/obi-wan-kenobi.jpg`,
    label: 'Obi-Wan Kenobi'
  }, {
    id: 10,
    url: `thumbnails/anakim-skywalker.jpg`,
    label: 'Anakim Skywalker'
  }, {
    id: 11,
    url: `thumbnails/wilhuff-tarkin.jpg`,
    label: 'Wilhuff Tarkin'
  }, {
    id: 12,
    url: `thumbnails/chewbacca.jpg`,
    label: 'Chewbacca'
  }, {
    id: 13,
    url: `thumbnails/han-solo.jpg`,
    label: 'Han Solo'
  }, {
    id: 14,
    url: `thumbnails/greedo.jpg`,
    label: 'Greedo'
  }, {
    id: 15,
    url: `thumbnails/jabba-desilijic-tiure.jpg`,
    label: 'Jabba Desilijic Tiure'
  }, {
    id: 16,
    url: `thumbnails/wedge-antilles.jpg`,
    label: 'Wedge Antilles'
  }, {
    id: 17,
    url: `thumbnails/jek-tono-porkins.jpg`,
    label: 'Jek Tono Porkins'
  }, {
    id: 18,
    url: `thumbnails/yoda.jpg`,
    label: 'Yoda'
  }, {
    id: 19,
    url: `thumbnails/palpatine.jpg`,
    label: 'Palpatine'
  }, {
    id: 20,
    url: `thumbnails/boba-fett.jpg`,
    label: 'Boba Fett'
  }, {
    id: 21,
    url: `thumbnails/IG-88.jpg`,
    label: 'IG-88'
  }, {
    id: 22,
    url: `thumbnails/bossk.jpg`,
    label: 'Bossk'
  }, {
    id: 23,
    url: `thumbnails/lando-calrissian.jpg`,
    label: 'Lando Calrissian'
  }, {
    id: 24,
    url: `thumbnails/lobot.jpg`,
    label: 'Lobot'
  }, {
    id: 25,
    url: `thumbnails/ackbar.jpg`,
    label: 'Ackbar'
  }, {
    id: 26,
    url: `thumbnails/mon-mothma.jpg`,
    label: 'Mon Mothma'
  }, {
    id: 27,
    url: `thumbnails/arvel-crynyd.jpg`,
    label: 'Arvel Crynyd'
  }, {
    id: 28,
    url: `thumbnails/wicket-systri-warrick.jpg`,
    label: 'Wicket Systri Warrick'
  }, {
    id: 29,
    url: `thumbnails/nien-nunb.jpg`,
    label: 'Nien Nunb'
  }, {
    id: 30,
    url: `thumbnails/qui-gon-jinn.jpg`,
    label: 'Qui-Gon Jinn'
  }, {
    id: 31,
    url: `thumbnails/nute-gunray.jpg`,
    label: 'Nute Gunray'
  }, {
    id: 32,
    url: `thumbnails/finis-valorum.jpg`,
    label: 'Finis Valorum'
  }, {
    id: 33,
    url: `thumbnails/jar-jar-binks.jpg`,
    label: 'Jar Jar Binks'
  }, {
    id: 34,
    url: `thumbnails/roos-tarpals.jpg`,
    label: 'Roos Tarpals'
  }, {
    id: 35,
    url: `thumbnails/rugor-nass.jpg`,
    label: 'Rugor Nass'
  }, {
    id: 36,
    url: `thumbnails/ric-olie.jpg`,
    label: 'Ric Olié'
  }, {
    id: 37,
    url: `thumbnails/watto.jpg`,
    label: 'Watto'
  }, {
    id: 38,
    url: `thumbnails/sebulba.jpg`,
    label: 'Sebulba'
  }, {
    id: 39,
    url: `thumbnails/quarsh-panaka.jpg`,
    label: 'Quarsh Panaka'
  }, {
    id: 40,
    url: `thumbnails/shmi-skywalker.jpg`,
    label: 'Shmi Skywalker'
  }, {
    id: 41,
    url: `thumbnails/darth-maul.jpg`,
    label: 'Darth Maul'
  }, {
    id: 42,
    url: `thumbnails/bib-fortuna.jpg`,
    label: 'Bib Fortuna'
  }, {
    id: 43,
    url: `thumbnails/ayla-secura.jpg`,
    label: 'Ayla Secura'
  }, {
    id: 44,
    url: `thumbnails/dud-bolt.jpg`,
    label: 'Dud Bolt'
  }, {
    id: 45,
    url: `thumbnails/gasgano.jpg`,
    label: 'Gasgano'
  }, {
    id: 46,
    url: `thumbnails/ben-quadinaros.jpg`,
    label: 'Ben Quadinaros'
  }, {
    id: 47,
    url: `thumbnails/mace-windu.jpg`,
    label: 'Mace Windu'
  }, {
    id: 48,
    url: `thumbnails/ki-adi-mundi.jpg`,
    label: 'Ki-Adi-Mundi'
  }, {
    id: 49,
    url: `thumbnails/kit-fisto.jpg`,
    label: 'Kit Fisto'
  }, {
    id: 50,
    url: `thumbnails/eeth-koth.jpg`,
    label: 'Eeth Koth'
  }, {
    id: 51,
    url: `thumbnails/adi-gallia.jpg`,
    label: 'Adi Gallia'
  }, {
    id: 52,
    url: `thumbnails/saesee-tiin.jpg`,
    label: 'Saesee Tiin'
  }, {
    id: 53,
    url: `thumbnails/yarael-poof.jpg`,
    label: 'Yarael Poof'
  }, {
    id: 54,
    url: `thumbnails/plo-koon.jpg`,
    label: 'Plo Koon'
  }, {
    id: 55,
    url: `thumbnails/mas-amedda.jpg`,
    label: 'Mas Amedda'
  }, {
    id: 56,
    url: `thumbnails/gregar-typho.jpg`,
    label: 'Gregar Typho'
  }, {
    id: 57,
    url: `thumbnails/corde.jpg`,
    label: 'Cordé'
  }, {
    id: 58,
    url: `thumbnails/cliegg-lars.jpg`,
    label: 'Cliegg Lars'
  }, {
    id: 59,
    url: `thumbnails/poggle-the-lesser.jpg`,
    label: 'Poggle the Lesser'
  }, {
    id: 60,
    url: `thumbnails/luminara-unduli.jpg`,
    label: 'Luminara Unduli'
  }, {
    id: 61,
    url: `thumbnails/barriss-offee.jpg`,
    label: 'Barriss Offee'
  }, {
    id: 62,
    url: `thumbnails/dorme.jpg`,
    label: 'Dormé'
  }, {
    id: 63,
    url: `thumbnails/dooku.jpg`,
    label: 'Dooku'
  }, {
    id: 64,
    url: `thumbnails/bail-prestor-organa.jpg`,
    label: 'Bail Prestor Organa'
  }, {
    id: 65,
    url: `thumbnails/jango-fett.jpg`,
    label: 'Jango Fett'
  }, {
    id: 66,
    url: `thumbnails/zam-wesell.jpg`,
    label: 'Zam Wesell'
  }, {
    id: 67,
    url: `thumbnails/dexter-jettster.jpg`,
    label: 'Dexter Jettster'
  }, {
    id: 68,
    url: `thumbnails/lama-su.jpg`,
    label: 'Lama Su'
  }, {
    id: 69,
    url: `thumbnails/taun-we.jpg`,
    label: 'Taun We'
  }, {
    id: 70,
    url: `thumbnails/jocasta-nu.jpg`,
    label: 'Jocasta Nu'
  }, {
    id: 71,
    url: `thumbnails/ratts-tyerell.jpg`,
    label: 'Ratts Tyerell'
  }, {
    id: 72,
    url: `thumbnails/R4-P17.jpg`,
    label: 'R4-P17'
  }, {
    id: 73,
    url: `thumbnails/wat-tambor.jpg`,
    label: 'Wat Tambor'
  }, {
    id: 74,
    url: `thumbnails/san-hill.jpg`,
    label: 'San Hill'
  }, {
    id: 75,
    url: `thumbnails/shaak-ti.jpg`,
    label: 'Shaak Ti'
  }, {
    id: 76,
    url: `thumbnails/grievous.jpg`,
    label: 'Grievous'
  }, {
    id: 77,
    url: `thumbnails/tarfful.jpg`,
    label: 'Tarfful'
  }, {
    id: 78,
    url: `thumbnails/raymus-antilles.jpg`,
    label: 'Raymus Antilles'
  }, {
    id: 79,
    url: `thumbnails/sly-moore.jpg`,
    label: 'Sly Moore'
  }, {
    id: 80,
    url: `thumbnails/tion-medon.jpg`,
    label: 'Tion Medon'
  }, {
    id: 81,
    url: `thumbnails/finn.jpg`,
    label: 'Finn'
  }, {
    id: 82,
    url: `thumbnails/rey.jpg`,
    label: 'Rey'
  }, {
    id: 83,
    url: `thumbnails/poe-dameron.jpg`,
    label: 'Poe Dameron'
  }, {
    id: 84,
    url: `thumbnails/BB8.jpg`,
    label: 'BB8'
  }, {
    id: 85,
    url: `thumbnails/captain-phasma.jpg`,
    label: 'Captain Phasma'
  }, {
    id: 86,
    url: `thumbnails/padme-amidala.jpg`,
    label: 'Padmé Amidala'
  }]
}

/*
  Caracters Reducer
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload
      }
    case SET_CHARACTERS_THUMBNAILS:
      return {
        ...state,
        thumbnails: action.payload
      }
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.payload
      }
    case SET_CURRENT_DETAILS:
      return {
        ...state,
        currentDetails: action.payload
      }
    case SET_MODAL_DETAILS:
      return {
        ...state,
        modalDetails: action.payload
      }
    default:
      return state
  }
}