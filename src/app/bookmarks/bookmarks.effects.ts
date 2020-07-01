import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { loadBookmarks, loadBookmarksSuccess } from './bookmarks.constants';
import { BookmarksService } from './bookmarks.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class BookmarksEffects {

  loadPersonas$ = createEffect(() => this.actions$.pipe(
    ofType(loadBookmarks),
    switchMap(() => this.bookmarksService.getBookmarks().pipe(
      map(bookmarks => loadBookmarksSuccess({ bookmarks })),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private actions$: Actions,
    private bookmarksService: BookmarksService,
  ) { }

}
