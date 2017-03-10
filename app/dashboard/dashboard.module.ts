import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

import { Md2Module }  from 'md2';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        CommonModule,
        FormsModule,
        Md2Module.forRoot(),
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class DashboardModule{}
