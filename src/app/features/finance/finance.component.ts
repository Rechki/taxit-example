import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceSidebarComponent } from './components/finance-sidebar/finance-sidebar.component';
import { FinanceHeaderComponent } from './components/finance-header/finance-header.component';
import { FinanceTableComponent } from './components/finance-table/finance-table.component';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, FinanceSidebarComponent, FinanceHeaderComponent, FinanceTableComponent],
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
