import { Component, OnDestroy, OnInit } from '@angular/core';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Subscription } from 'rxjs';
import { DataSharingState, GentlemanStateManager } from 'src/app/app.module';
import { SourceOfTruthKeys } from 'src/app/state-management/store/store';
import { PeopleTableComponent } from '../people-table';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  constructor(public dialog: MatDialog) {
    GentlemanStateManager.getEntity(SourceOfTruthKeys.USER).getObservable().subscribe((user) => {
      console.log(user);
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PeopleTableComponent, {
      width: '75%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    GentlemanStateManager.getEntity(SourceOfTruthKeys.USER).unsubscribe();
  }
}
