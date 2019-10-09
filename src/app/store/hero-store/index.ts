import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { Hero } from '../../hero';
import { createFeatureStoreSelector } from '../helpers/selector-helper';

// NOTE: State
export interface State {
  heroes: Hero[] | null;
}

export const initialState: State = {
  heroes: null,
};

// NOTE: Actions
const saveHeroes = createAction('[Hero] Save heroes', props<{ heroes: Hero[] }>());
const addHero = createAction('[Hero] Add hero', props<{ hero: Hero }>());
const deleteHero = createAction('[Hero] Delete hero', props<{ hero: Hero }>());

// tslint:disable-next-line: variable-name
export const Actions = { saveHeroes, addHero, deleteHero };
// tslint:disable-next-line: variable-name
const ActionsUnion = union(Actions);
type ActionsUnionType = typeof ActionsUnion;

// NOTE: Reducer
const heroReducer = createReducer(
  initialState,
  on(saveHeroes, (state, { heroes }) => ({ ...state, heroes })),
  on(addHero, (state, { hero }) => ({ ...state, heroes: [...state.heroes, hero] })),
  on(deleteHero, (state, { hero }) => ({ ...state, heroes: state.heroes.filter((h) => h !== hero) })),
);

export default function reducer(state: State, action: ActionsUnionType): State {
  return heroReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'hero';
export const selectStateFromTaskStore = createFeatureStoreSelector<State>(featureName);
