import { GlobalLoadService } from './global-load.service';
import { FormControl } from '@angular/forms';
import { environment } from './../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { FireDateService } from './fire-date.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatCheckboxModule, MatCardModule,
  MatInputModule, MatSlideToggleModule, MatProgressSpinnerModule} from '@angular/material';


import { AppComponent } from './app.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { AngularFireModule } from 'angularfire2';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatListModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    AddressEditComponent,
    EmployeeFormComponent,
    CustomerListComponent,
    CustomerEditComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule, MatTabsModule,
    MatListModule, MatButtonModule, MatCheckboxModule, MatCardModule,
    MatInputModule, MatSlideToggleModule, MatProgressSpinnerModule
  ],
  providers: [FireDateService, GlobalLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
