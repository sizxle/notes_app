import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Note } from '../../../models/notes';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.scss'
})
export class NoteDetailComponent {

  note!:Note;

  constructor(private router: Router) {
    const navigation= this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.note = navigation.extras.state['note'];
    }
   }


}
