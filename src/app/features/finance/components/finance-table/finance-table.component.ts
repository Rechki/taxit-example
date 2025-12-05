import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TableRow {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'group' | 'item';
  expanded?: boolean;
  children?: TableRow[];
}

@Component({
  selector: 'app-finance-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="finance-table-container">
      <!-- Header Row -->
      <div class="table-header">
        <div class="col-main"></div>
        <div class="col-amount"></div>
        <div class="col-date"></div>
        <div class="col-actions"></div>
      </div>

      <!-- Table Content -->
      <div class="table-content">
        <ng-container *ngFor="let group of data">
          <!-- Group Header (e.g., EINKOMMEN) -->
          <div class="table-row group-row">
            <div class="col-main" (click)="toggleExpand(group)">
              <svg class="chevron" [class.expanded]="group.expanded" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span class="group-title">{{ group.description }}</span>
              <button class="btn-icon-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div class="col-amount group-amount">{{ group.amount | number:'1.0-2' }}'</div>
            <div class="col-date">{{ group.date }}</div>
            <div class="col-actions">
              <button class="btn-icon-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <input type="checkbox">
            </div>
          </div>

          <!-- Group Children -->
          <div class="group-children" [class.expanded]="group.expanded">
            <div class="table-row item-row" *ngFor="let item of group.children">
              <div class="col-main">
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <span class="item-title">{{ item.description }}</span>
              </div>
              <div class="col-amount">{{ item.amount | number:'1.0-2' }}</div>
              <div class="col-date">{{ item.date }}</div>
              <div class="col-actions">
                <button class="btn-icon-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <input type="checkbox">
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .finance-table-container {
      background-color: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    .table-row {
      display: flex;
      align-items: center;
      padding: var(--spacing-md) var(--spacing-lg);
      border-bottom: 1px solid #e9ecef;
      transition: all var(--transition-fast);
    }

    .group-row {
      background: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%);
      font-weight: 600;
      font-size: 0.9375rem;
      border-left: 4px solid #667eea;
    }

    .group-row:hover {
      background: linear-gradient(to right, #e9ecef 0%, #f8f9fa 100%);
      box-shadow: inset 0 0 0 1px rgba(102, 126, 234, 0.1);
    }

    .item-row {
      background-color: white;
      padding-left: calc(var(--spacing-xl) + var(--spacing-lg));
      border-left: 4px solid transparent;
    }

    .item-row:hover {
      background-color: #fafbfc;
      border-left-color: #c7d2fe;
    }

    .col-main {
      flex: 1;
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      cursor: pointer;
    }

    .group-title {
      letter-spacing: 0.5px;
      color: #1e293b;
    }

    .item-title {
      color: #475569;
    }

    .col-amount {
      width: 180px;
      text-align: right;
      font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
      font-size: 1rem;
      font-weight: 600;
      color: #1e293b;
    }

    .group-amount {
      color: #667eea;
      font-size: 1.125rem;
    }

    .col-date {
      width: 140px;
      text-align: right;
      color: var(--text-secondary);
      font-size: 0.875rem;
      padding-right: var(--spacing-lg);
    }

    .col-actions {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--spacing-md);
    }

    .group-children {
      display: none;
      background: #fafbfc;
    }

    .group-children.expanded {
      display: block;
    }

    .chevron {
      color: #667eea;
      transition: transform var(--transition-normal);
    }

    .chevron.expanded {
      transform: rotate(180deg);
    }

    .btn-icon-xs {
      padding: 4px;
      border-radius: 50%;
      border: 1px solid #e0e7ff;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #667eea;
      transition: all var(--transition-fast);
    }

    .btn-icon-xs:hover {
      background: #ede9fe;
      border-color: #667eea;
      transform: scale(1.1);
    }

    .btn-icon-sm {
      padding: 6px;
      border-radius: 50%;
      border: 1px solid #fee2e2;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f87171;
      transition: all var(--transition-fast);
    }

    .btn-icon-sm:hover {
      background-color: #fee2e2;
      color: #dc2626;
      border-color: #fca5a5;
      transform: scale(1.1);
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: #667eea;
    }
  `]
})
export class FinanceTableComponent {
  data: TableRow[] = [
    {
      id: '1',
      description: 'EINKOMMEN',
      amount: 203145,
      date: '',
      type: 'group',
      expanded: true,
      children: [
        { id: '1-1', description: 'Erwerbseinkommen Hr. Schulthess', amount: 126861, date: '01.01.2023', type: 'item' },
        { id: '1-2', description: 'Erwerbseinkommen Fr. Schulthess', amount: 76284, date: '01.01.2023', type: 'item' }
      ]
    },
    {
      id: '2',
      description: 'AUSGABEN',
      amount: 0,
      date: '',
      type: 'group',
      expanded: false,
      children: []
    },
    {
      id: '3',
      description: 'LIQUIDITÄT',
      amount: 150992,
      date: '',
      type: 'group',
      expanded: true,
      children: [
        { id: '3-1', description: 'Liquidität', amount: 150992, date: '31.12.2021', type: 'item' }
      ]
    },
    {
      id: '4',
      description: 'WERTSCHRIFTEN',
      amount: 12845,
      date: '',
      type: 'group',
      expanded: true,
      children: [
        { id: '4-1', description: 'Aktien Novartis AG', amount: 12845, date: '31.12.2021', type: 'item' }
      ]
    },
    {
      id: '5',
      description: '2. SÄULE',
      amount: 1026456,
      date: '',
      type: 'group',
      expanded: true,
      children: [
        { id: '5-1', description: 'Pensionskasse AXA Hr. Schulthess', amount: 566512, date: '01.04.2023', type: 'item' },
        { id: '5-2', description: 'Pensionskasse AXA (Kader) Hr. Schulthess', amount: 98599, date: '01.04.2023', type: 'item' },
        { id: '5-3', description: 'Pensionskasse Publica Fr. Schulthess', amount: 361345, date: '31.08.2023', type: 'item' }
      ]
    },
    {
      id: '6',
      description: 'SÄULE 3A',
      amount: 198711,
      date: '',
      type: 'group',
      expanded: true,
      children: [
        { id: '6-1', description: 'Säule 3a Police SwissLife I Hr. Schulthess', amount: 43934, date: '08.09.2023', type: 'item' },
        { id: '6-2', description: 'Säule 3a Police SwissLife II Hr. Schulthess', amount: 53646, date: '08.09.2023', type: 'item' },
        { id: '6-3', description: 'Säule 3a Police SwissLife I Fr. Schulthess', amount: 52267, date: '01.09.2023', type: 'item' },
        { id: '6-4', description: 'Säule 3a Police SwissLife II Fr. Schulthess', amount: 48865, date: '08.09.2023', type: 'item' }
      ]
    },
    {
      id: '7',
      description: 'LIEGENSCHAFTEN',
      amount: 1050000,
      date: '',
      type: 'group',
      expanded: true,
      children: [
        { id: '7-1', description: 'Einfamilienhaus in Alchenstorf', amount: 1050000, date: '31.12.2022', type: 'item' }
      ]
    }
  ];

  toggleExpand(group: TableRow) {
    group.expanded = !group.expanded;
  }
}
