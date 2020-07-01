import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bookmarks, Bookmark } from './bookmarks.types';
import { loadBookmarks, addBookmark, deleteBookmark } from './bookmarks.constants';
import { selectBookmarks } from './bookmarks.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarksComponent implements OnInit {

  model$!: Observable<Bookmarks>;
  form!: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectBookmarks);
    this.store.dispatch(loadBookmarks());
    this.form = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
      group: ['', Validators.required]
    });
  }

  addBookmark(bookmark: Bookmark) {
    this.store.dispatch(addBookmark({
      bookmark: {
        ...bookmark,
        id: Math.floor(Math.random() * (1000 - 20 + 1) + 20)
      }
    }));
    this.form.reset();
  }

  deleteBookmark(bookmark: Bookmark) {
    this.store.dispatch(deleteBookmark({ bookmark }));
  }

  trackByFn(index: number, item: { key: string; id: string; }) {
    return item.key || item.id || index;
  }

}
