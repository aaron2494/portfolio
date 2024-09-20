import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: "",
        loadComponent: () => import("./components/main/main.component").then(m => m.MainComponent), // Make sure you're importing the actual component
    },
        
];
