import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) 
      },
      { 
        path: 'finance', 
        loadComponent: () => import('./features/finance/finance.component').then(m => m.FinanceComponent) 
      },
      { 
        path: 'reports', 
        loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent) 
      },
      { 
        path: 'documents', 
        loadComponent: () => import('./features/documents/documents.component').then(m => m.DocumentsComponent) 
      },
      { 
        path: 'messages', 
        loadComponent: () => import('./features/messages/messages.component').then(m => m.MessagesComponent) 
      },
      { 
        path: 'settings', 
        loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) 
      }
    ]
  }
];
