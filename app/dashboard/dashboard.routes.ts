import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WriteComponent } from './write/write.component';
import { SettingsComponent } from './settings/settings.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboards', component: HomeComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'write', component: WriteComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'dashboards', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    TimelineComponent,
    WriteComponent,
    SettingsComponent,
]
