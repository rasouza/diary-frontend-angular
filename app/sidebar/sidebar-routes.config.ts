import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboards', title: 'Dashboard', menuType: MenuType.LEFT, icon: { class: 'material-icons', name: 'person'} },
    { path: 'timeline', title: 'Timeline', menuType: MenuType.LEFT, icon: { class: 'material-icons', name: 'timeline'} },
    { path: 'write', title: 'Tell a story', menuType: MenuType.LEFT, icon: { class: 'material-icons', name: 'create'} },
    { path: 'settings', title: 'Settings', menuType: MenuType.LEFT, icon: { class: 'material-icons', name: 'settings'} }
];
