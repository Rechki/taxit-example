import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance-header.component.html',
  styleUrls: ['./finance-header.component.css']
})
export class FinanceHeaderComponent {
  activeTab = 'erfassung';
  activeSubmenu = 'finanzdaten';

  tabs = [
    { id: 'erfassung', label: 'erfassung' },
    { id: 'planung', label: 'planung' },
    { id: 'herleitung', label: 'herleitung app' },
    { id: 'publikation', label: 'publikation' }
  ];

  submenuItems = [
    { id: 'finanzdaten', label: 'FINANZDATEN' },
    { id: 'personendaten', label: 'PERSONENDATEN' }
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  setActiveSubmenu(submenuId: string) {
    this.activeSubmenu = submenuId;
  }
}
