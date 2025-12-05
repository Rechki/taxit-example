import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="layout-container">
      <app-sidebar></app-sidebar>
      <div class="main-content">
        <app-header></app-header>
        <main class="page-content">
          <router-outlet></router-outlet>
        </main>
        <footer class="footer">
          <p>© 2025 Taxit. Your data is protected with bank-level security.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Support</a>
            <span class="secure-connection">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Secure Connection
            </span>
          </div>
        </footer>
      </div>
    </div>
  `,
  styles: [`
    .layout-container {
      display: flex;
      min-height: 100vh;
    }

    .main-content {
      flex: 1;
      margin-left: 250px; /* Sidebar width */
      display: flex;
      flex-direction: column;
    }

    .page-content {
      flex: 1;
      padding: var(--spacing-xl);
      background-color: var(--bg-color);
    }

    .footer {
      padding: var(--spacing-lg) var(--spacing-xl);
      background-color: var(--surface-color);
      border-top: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    .footer-links {
      display: flex;
      gap: var(--spacing-lg);
      align-items: center;
    }

    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
    }

    .footer-links a:hover {
      color: var(--text-primary);
    }

    .secure-connection {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `]
})
export class MainLayoutComponent { }
