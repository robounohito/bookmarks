import { createAction, props } from '@ngrx/store';
import { Bookmark } from './bookmarks.types';

export const loadBookmarks = createAction(
  '[Bookmarks] Load Bookmarks',
);

export const loadBookmarksSuccess = createAction(
  '[Bookmarks] Load Bookmarks Success',
  props<{ bookmarks: Bookmark[]; }>()
);

export const addBookmark = createAction(
  '[Bookmarks] Add Bookmark',
  props<{ bookmark: Bookmark; }>()
);

export const deleteBookmark = createAction(
  '[Bookmarks] Delete Bookmark',
  props<{ bookmark: Bookmark; }>()
);
