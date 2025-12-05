import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  name: string;
  items: string[];
  expanded: boolean;
}

@Component({
  selector: 'app-finance-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="finance-sidebar">
      <div class="sidebar-header">
        <h3>Neuen Finanzdateneintrag erfassen</h3>
      </div>
      
      <div class="categories-list">
        <div class="category-group" *ngFor="let category of categories">
          <div class="category-title" (click)="toggleCategory(category)">
            {{ category.name }}
            <svg class="chevron" [class.expanded]="category.expanded" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          <div class="category-items" [class.expanded]="category.expanded">
            <div class="category-item" *ngFor="let item of category.items">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .finance-sidebar {
      width: 300px;
      background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
      border-right: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
    }

    .sidebar-header {
      padding: var(--spacing-lg);
      background-color: #667eea;
      color: white;
      border-bottom: none;
    }

    .sidebar-header h3 {
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.4;
      margin: 0;
    }

    .categories-list {
      flex: 1;
      overflow-y: auto;
      padding: var(--spacing-md);
    }

    .category-group {
      margin-bottom: var(--spacing-md);
      background: white;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
      overflow: hidden;
      transition: all var(--transition-normal);
    }

    .category-group:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border-color: #667eea;
    }

    .category-title {
      padding: var(--spacing-md);
      font-weight: 600;
      font-size: 0.9375rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%);
      transition: all var(--transition-fast);
    }

    .category-title:hover {
      background: linear-gradient(to right, #e9ecef 0%, #f8f9fa 100%);
    }

    .chevron {
      transition: transform var(--transition-normal);
      color: #667eea;
    }

    .chevron.expanded {
      transform: rotate(180deg);
    }

    .category-items {
      display: none;
      padding: var(--spacing-sm) var(--spacing-md) var(--spacing-md);
      background: #fafbfc;
    }

    .category-items.expanded {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .category-item {
      padding: var(--spacing-sm) var(--spacing-md);
      font-size: 0.875rem;
      color: var(--text-primary);
      cursor: pointer;
      border: 1px solid #e0e7ff;
      border-radius: var(--radius-md);
      text-align: center;
      background: white;
      transition: all var(--transition-fast);
      font-weight: 500;
    }

    .category-item:hover {
      border-color: #667eea;
      background-color: #f0f4ff;
      color: #667eea;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(102, 126, 234, 0.2);
    }
  `]
})
export class FinanceSidebarComponent {
  categories: Category[] = [
    {
      name: 'Einkommen',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      name: 'Ausgaben',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      name: 'Liquidität',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      name: 'Wertschriften',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      name: '2. Säule',
      items: ['Fr. Schulthess', 'Hr. Schulthess'],
      expanded: true
    },
    {
      name: 'Säule 3a',
      items: ['Fr. Schulthess', 'Hr. Schulthess'],
      expanded: false
    },
    {
      name: 'Säule 3b',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: false
    },
    {
      name: 'Liegenschaften',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: false
    }
  ];

  toggleCategory(category: Category) {
    category.expanded = !category.expanded;
  }
}
