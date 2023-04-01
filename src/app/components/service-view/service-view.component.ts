import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../interfaces/DialogService';



@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent {


  constructor(
    public dialogRef: MatDialogRef<ServiceViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
