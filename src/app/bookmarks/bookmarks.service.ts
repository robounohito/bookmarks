import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookmark } from './bookmarks.types';

@Injectable()
export class BookmarksService {

  constructor(
    private http: HttpClient
  ) { }

  getBookmarks() {
    return this.http.get<Bookmark[]>('/bookmarks');
  }

}
