import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="header-content">
        <div class="header-actions">
          <button class="btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          
          <div class="user-profile">
            <div class="avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User Avatar">
            </div>
            <span class="user-name">John Smith</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      height: 64px;
      background-color: var(--surface-color);
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      padding: 0 var(--spacing-xl);
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .header-content {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: var(--spacing-lg);
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
      cursor: pointer;
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      background-color: var(--bg-color);
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .user-name {
      font-weight: 500;
      font-size: 0.875rem;
    }
  `]
})
export class HeaderComponent { }
