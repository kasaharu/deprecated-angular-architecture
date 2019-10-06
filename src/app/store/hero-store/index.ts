import { Hero } from '../../hero';

// NOTE: State
export interface State {
  heroes: Hero[] | null;
}

export const initialState: State = {
  heroes: null,
};
