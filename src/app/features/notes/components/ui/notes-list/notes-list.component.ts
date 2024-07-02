import { Component } from '@angular/core';
import {NOTES} from '../../../models/notes';
import {  Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {
 notes = NOTES;
}
