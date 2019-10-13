import { createAction, createReducer, on, props, union } from '@ngrx/store';
import { Hero } from '../../domain/hero';
import { createFeatureStoreSelector } from '../helpers/selector-helper';

// NOTE: State
export interface State {
  heroes: Hero[] | null;
  selectedHero: Hero | null;
  searchTerms: string;
  searchedHeroes: Hero[] | null;
}

export const initialState: State = {
  heroes: null,
  selectedHero: null,
  searchTerms: '',
  searchedHeroes: null,
};

// NOTE: Actions
const saveHeroes = createAction('[Hero] Save heroes', props<{ heroes: Hero[] }>());
const addHero = createAction('[Hero] Add hero', props<{ hero: Hero }>());
const deleteHero = createAction('[Hero] Delete hero', props<{ hero: Hero }>());
const selectHero = createAction('[Hero] Select hero', props<{ hero: Hero }>());
const changeSearchTerms = createAction('[Hero] Change search terms', props<{ searchTerms: string }>());
const saveSearchedHeroes = createAction('[Hero] Save searched heroes', props<{ heroes: Hero[] }>());

// tslint:disable-next-line: variable-name
export const Actions = { saveHeroes, addHero, deleteHero, selectHero, changeSearchTerms, saveSearchedHeroes };
// tslint:disable-next-line: variable-name
const ActionsUnion = union(Actions);
type ActionsUnionType = typeof ActionsUnion;

// NOTE: Reducer
const heroReducer = createReducer(
  initialState,
  on(saveHeroes, (state, { heroes }) => ({ ...state, heroes })),
  on(addHero, (state, { hero }) => ({ ...state, heroes: [...state.heroes, hero] })),
  on(deleteHero, (state, { hero }) => ({ ...state, heroes: state.heroes.filter((h) => h !== hero) })),
  on(selectHero, (state, { hero }) => ({ ...state, selectedHero: hero })),
  on(changeSearchTerms, (state, { searchTerms }) => ({ ...state, searchTerms })),
  on(saveSearchedHeroes, (state, { heroes }) => ({ ...state, searchedHeroes: heroes })),
);

export default function reducer(state: State, action: ActionsUnionType): State {
  return heroReducer(state, action);
}

// NOTE: Selectors
export const featureName = 'hero';
export const selectStateFromTaskStore = createFeatureStoreSelector<State>(featureName);
