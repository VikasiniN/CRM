import { RouterModule, Routes } from '@angular/router';
import { NavHeaderComponent } from './shared/nav-header/nav-header.component';
import { HeaderSideComponent } from './shared/header-side/header-side.component';
import { CustomerManagementComponent } from './customer-management/customer-management/customer-management.component';
import { SmsManagementComponent } from './sms-management/sms-management/sms-management.component';
import { EmailManagementComponent } from './email-management/email-mangement/email-management.component';
import { UploadManagementComponent } from './upload-management/upload-management/upload-management.component';
import { B2cmarketManagementComponent } from './b2cmarket-management/b2cmarket-management/b2cmarket-management.component';
import { LoginComponent } from './user-management/login/login.component';
import { RegisterComponent } from './user-management/register/register.component';


const routes: Routes = [

    { path: 'navheader', component: NavHeaderComponent },
    { path: 'sms', component: SmsManagementComponent },
    { path: 'upload', component: UploadManagementComponent },
    { path: 'email', component: EmailManagementComponent },
    { path: 'headerside', component: HeaderSideComponent },
    { path: 'b2cmarket', component: B2cmarketManagementComponent },
    { path: 'customers', component: CustomerManagementComponent },
    { path: 'login', component: LoginComponent,
    children: [{ path: ':id:name', component: LoginComponent }
] },
    {
        path: 'register', component: RegisterComponent,
        children: [{ path: ':id', component: RegisterComponent }
            , { path: ':id/sms', component: SmsManagementComponent }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });
