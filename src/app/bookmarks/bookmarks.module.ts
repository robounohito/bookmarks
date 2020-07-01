import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { StoreModule } from '@ngrx/store';
import { BookmarksComponent } from './bookmarks.component';
import { reducer } from './bookmarks.model';
import { EffectsModule } from '@ngrx/effects';
import { BookmarksEffects } from './bookmarks.effects';
import { BookmarksService } from './bookmarks.service';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookmarksRoutingModule,
    StoreModule.forFeature('bookmarks', reducer),
    EffectsModule.forFeature([BookmarksEffects]),
  ],
  providers: [
    BookmarksService,
  ]
})
export class BookmarksModule { }
