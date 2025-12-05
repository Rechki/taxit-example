import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceSidebarComponent } from './components/finance-sidebar/finance-sidebar.component';
import { FinanceHeaderComponent } from './components/finance-header/finance-header.component';
import { FinanceTableComponent } from './components/finance-table/finance-table.component';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, FinanceSidebarComponent, FinanceHeaderComponent, FinanceTableComponent],
  template: `
    <div class="finance-layout">
      <app-finance-sidebar></app-finance-sidebar>
      <div class="finance-content">
        <app-finance-header></app-finance-header>
        <div class="table-wrapper">
          <app-finance-table></app-finance-table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .finance-layout {
      display: flex;
      height: calc(100vh - 64px); /* Subtract header height */
      margin: calc(var(--spacing-xl) * -1); /* Negate main padding to use full height */
    }

    .finance-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
    }

    .table-wrapper {
      flex: 1;
      overflow-y: auto;
      padding: var(--spacing-xl);
    }
  `]
})
export class FinanceComponent { }
