import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteDetailComponent } from './note-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ NoteDetailComponent ],
  imports: [CommonModule,
    RouterModule,
  ],
  exports: [ NoteDetailComponent ]
})
export class NoteDetailModule {}
