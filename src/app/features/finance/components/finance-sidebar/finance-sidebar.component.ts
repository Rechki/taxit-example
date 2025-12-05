import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  id: string;
  title: string;
  items: string[];
  expanded: boolean;
}

@Component({
  selector: 'app-finance-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance-sidebar.component.html',
  styleUrls: ['./finance-sidebar.component.css']
})
export class FinanceSidebarComponent {
  categories: Category[] = [
    {
      id: 'einkommen',
      title: 'Einkommen',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      id: 'ausgaben',
      title: 'Ausgaben',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      id: 'liquiditat',
      title: 'Liquidität',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      id: 'wertschriften',
      title: 'Wertschriften',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: true
    },
    {
      id: 'saule2',
      title: '2. Säule',
      items: ['Fr. Schulthess', 'Hr. Schulthess'],
      expanded: true
    },
    {
      id: 'saule3a',
      title: 'Säule 3a',
      items: ['Fr. Schulthess', 'Hr. Schulthess'],
      expanded: false
    },
    {
      id: 'saule3b',
      title: 'Säule 3b',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: false
    },
    {
      id: 'liegenschaften',
      title: 'Liegenschaften',
      items: ['Fr. Schulthess', 'Hr. Schulthess', 'Gemeinsam'],
      expanded: false
    }
  ];

  toggleCategory(categoryId: string) {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.expanded = !category.expanded;
    }
  }
}
