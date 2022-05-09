import {nanoid} from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  CANCEL_EDIT,
} from '../actions/actionTypes';

const initialState = {
  selected: null,
  services: [
    { id: nanoid(), name: 'Замена стекла', price: 10000 },
    { id: nanoid(), name: 'Установка ОС', price: 2000 },
    { id: nanoid(), name: 'Замена питания', price: 4000 },
    { id: nanoid(), name: 'Починка камеры', price: 5000 },
    { id: nanoid(), name: 'Починка разъема', price: 3000 },
  ]  
};

export default function serviceListReducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_SERVICE:
      const { name, price } = payload;
      if (!state.selected) {
        return {
          ...state,
          services: [...state.services, { id: nanoid(), name, price: +price }]
        };
      }

      return {
        ...state,
        selected: null,
        services: state.services.map((s) => {
          return s.id === state.selected ? {...s, name, price: +price} : {...s}
        }),
      };

    case REMOVE_SERVICE:
      return {
        ...state, 
        selected: payload.id === state.selected ? null : state.selected,
        services: state.services.filter((service) => service.id !== payload.id),
      };

    case EDIT_SERVICE: 
      return {...state, selected: payload.id};

    case CANCEL_EDIT: 
      return {...state, selected: null};

    default:
      return state;
  }
}