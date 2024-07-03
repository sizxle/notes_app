import { Component } from '@angular/core';
import {NOTES} from '../../../models/notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {
 notes = NOTES;
}
