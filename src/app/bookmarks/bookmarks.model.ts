
import { on, createReducer, Action, createFeatureSelector } from '@ngrx/store';
import { assoc, groupBy, prop, append, evolve, reject, whereEq, mergeLeft, lensPath, over } from 'ramda';
import { Bookmarks } from './bookmarks.types';
import { loadBookmarksSuccess, addBookmark, deleteBookmark, loadBookmarks } from './bookmarks.constants';

const initialState = {} as Bookmarks;

const bookmarksReducer = createReducer(initialState,

  on(loadBookmarks, (state) => {
    return assoc('loading', true)(state);
  }),

  on(loadBookmarksSuccess, (state, { bookmarks }) => {
    return mergeLeft({
      loading: false,
      groups: groupBy(prop('group'), bookmarks),
    })(state);
  }),

  on(addBookmark, (state, { bookmark }) => {
    const groupLens = lensPath(['groups', bookmark.group]);
    return over(groupLens, append(bookmark))(state);
  }),

  on(deleteBookmark, (state, { bookmark }) => {
    return evolve({
      groups: evolve({
        [bookmark.group]: reject(whereEq({ id: bookmark.id }))
      })
    })(state);
  }),

);

export function reducer(state: Bookmarks, action: Action) {
  return bookmarksReducer(state, action);
}

export const selectBookmarks = createFeatureSelector<Bookmarks>('bookmarks');
