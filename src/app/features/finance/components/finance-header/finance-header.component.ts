import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="finance-header">
      <div class="left-actions">
        <button class="btn btn-outline btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          alle zuklappen
        </button>
      </div>
      
      <div class="right-actions">
        <button class="btn btn-outline">Vermögensübersicht</button>
        <button class="btn btn-outline">Finanzdaten kombinieren</button>
      </div>
    </div>
  `,
  styles: [`
    .finance-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--spacing-lg) var(--spacing-xl);
      background: linear-gradient(to right, #ffffff 0%, #f8f9fa 100%);
      border-bottom: 2px solid #e9ecef;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .right-actions {
      display: flex;
      gap: var(--spacing-md);
    }

    .btn-sm {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      gap: var(--spacing-xs);
      font-weight: 500;
      transition: all var(--transition-fast);
    }

    .btn-outline {
      background: white;
      border: 2px solid #667eea;
      color: #667eea;
    }

    .btn-outline:hover {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-color: #667eea;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
  `]
})
export class FinanceHeaderComponent { }
