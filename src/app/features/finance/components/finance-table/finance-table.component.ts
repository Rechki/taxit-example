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
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.css']
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
