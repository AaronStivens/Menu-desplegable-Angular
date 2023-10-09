import {Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'angulars8';
  sidenavTextColor="white";

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(Direccion1);
  }

openDialog3() {
    this.dialog.open(Blog);
  }

  openDialog2(){
    this.dialog.open(Contacto, {
      width: '600px',
      
    });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'Direccion.html',
})

export class Direccion1 {
  constructor(public dialogRef: MatDialogRef<Direccion1>) {}
  close() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'Contacto.html',
})

export class Contacto { 
  constructor(public dialogRef2: MatDialogRef<Contacto>) {}
  close() {
    this.dialogRef2.close();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'Blog.html',
})

export class Blog { 
  constructor(public dialogRef3: MatDialogRef<Blog>) {}
  close() {
    this.dialogRef3.close();
  }
}







