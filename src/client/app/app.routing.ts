import { Routes, RouterModule } from '@angular/router';
import { HttpRequestsComponent } from './+http-requests/index';
import { DownloadsComponent } from './+downloads/index';
import { DraggingComponent } from './+dragging/index';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/http-requests',
        pathMatch: 'full'
    },
    {
        path: 'http-requests',
        component: HttpRequestsComponent
    },
    {
        path: 'downloads',
        component: DownloadsComponent
    },
    {
        path: 'dragging',
        component: DraggingComponent
    },
];

export const routing = RouterModule.forRoot(appRoutes);
