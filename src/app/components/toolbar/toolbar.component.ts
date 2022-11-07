import { Component, OnInit } from '@angular/core';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PeopleTableComponent } from '../people-table';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PeopleTableComponent, {
      width: '75%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {}
}
