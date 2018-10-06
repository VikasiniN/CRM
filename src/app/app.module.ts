import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './user-management/auth-guard.service';
import { AuthService } from './user-management/auth.service';
import { Routing } from './app.route';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavHeaderService } from './shared/nav-header/nav-header.service';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatRippleModule,
  MatDialogModule,
  MatChipsModule,
  MatInputModule,
  MatStepperModule,
  MatDatepickerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { NavHeaderComponent } from './shared/nav-header/nav-header.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CustomerManagementComponent,
   CustomerEditComponent } from './customer-management/customer-management/customer-management.component';
import { CustomerManagementService } from './customer-management/customer-management.service';
import { HeaderSideComponent } from './shared/header-side/header-side.component';
import { B2cmarketService } from './b2cmarket-management/b2cmarket.service';
import { B2bmarketService } from './b2bmarket-management/b2bmarket.service';
import { B2ccustomerService } from './b2ccustomer-management/b2ccustomer.service';
import { EmployeeService } from './employee.management/employee.service';
import { HeaderSideService } from './shared/header-side/header-side.service';
import { SmsManagementComponent } from './sms-management/sms-management/sms-management.component';
import { EmailManagementComponent } from './email-management/email-mangement/email-management.component';
import { UploadManagementComponent } from './upload-management/upload-management/upload-management.component';
import { B2cmarketManagementComponent,
  B2cmarketEditComponent } from './b2cmarket-management/b2cmarket-management/b2cmarket-management.component';
import { LoginComponent } from './user-management/login/login.component';
import { RegisterComponent } from './user-management/register/register.component';
import { PermissionComponent } from './user-management/permission/permission.component';
import { B2bmarketManagementComponent,
  B2bmarketEditComponent
 } from './b2bmarket-management/b2bmarket-management/b2bmarket-management.component';
import { B2ccustomerManagementComponent,
  B2ccustomerEditComponent
 } from './b2ccustomer-management/b2ccustomer-management/b2ccustomer-management.component';
import { EmployeeManagementComponent,
  EmployeeEditComponent
 } from './employee.management/employee-management/employee-management.component';
import { VendorManagementComponent, VendoorEditComponent } from './vendor-management/vendor-management/vendor-management.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    CustomerManagementComponent,
    CustomerEditComponent,
    B2bmarketEditComponent,
    B2ccustomerEditComponent,
    VendoorEditComponent,
    EmployeeEditComponent,
    HeaderSideComponent,
    SmsManagementComponent,
    EmailManagementComponent,
    UploadManagementComponent,
    B2cmarketManagementComponent,
    B2cmarketEditComponent,
    LoginComponent,
    RegisterComponent,
    PermissionComponent,
    B2bmarketManagementComponent,
    B2ccustomerManagementComponent,
    EmployeeManagementComponent,
    VendorManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule,
    RouterModule,
    MatInputModule,
    FlexLayoutModule,
    NgxDatatableModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [NavHeaderService, CustomerManagementService,
     HeaderSideService, B2bmarketService,
     B2ccustomerService, EmployeeService,
      B2cmarketService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [CustomerEditComponent,
    VendoorEditComponent,
     B2cmarketEditComponent,
     B2bmarketEditComponent,
      B2ccustomerEditComponent,
      EmployeeEditComponent ]
})
export class AppModule { }
