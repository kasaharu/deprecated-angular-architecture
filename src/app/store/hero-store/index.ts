import { createAction, props, union } from '@ngrx/store';
import { Hero } from '../../hero';

// NOTE: State
export interface State {
  heroes: Hero[] | null;
}

export const initialState: State = {
  heroes: null,
};

// NOTE: Actions
export const saveHeroes = createAction('[Hero] Save heroes', props<Hero[]>());
// tslint:disable-next-line: variable-name
export const Actions = { saveHeroes };
// tslint:disable-next-line: variable-name
const ActionsUnion = union(Actions);
type ActionsUnionType = typeof ActionsUnion;
