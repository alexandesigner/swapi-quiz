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