import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="welcome-section">
        <h1>Welcome back, John</h1>
        <p class="subtitle">Here's your tax information overview</p>
      </div>

      <!-- Summary Cards -->
      <div class="cards-grid">
        <!-- Tax Year Card -->
        <div class="card summary-card">
          <div class="card-header">
            <h3>Tax Year 2024</h3>
            <div class="status-icon success">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <div class="card-content">
            <div class="status-label">Status: Filed</div>
            <div class="amount">$2,450</div>
            <div class="status-subtext">Refund processed</div>
          </div>
        </div>

        <!-- Quarterly Filing Card -->
        <div class="card summary-card">
          <div class="card-header">
            <h3>Quarterly Filing</h3>
            <div class="status-icon pending">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
          </div>
          <div class="card-content">
            <div class="status-label">Due: March 15, 2025</div>
            <div class="amount">28</div>
            <div class="status-subtext">Days remaining</div>
          </div>
        </div>

        <!-- Documents Card -->
        <div class="card summary-card">
          <div class="card-header">
            <h3>Documents</h3>
            <div class="status-icon neutral">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
          <div class="card-content">
            <div class="status-label">Pending Review</div>
            <div class="amount">3</div>
            <div class="status-subtext">New documents</div>
          </div>
        </div>
      </div>

      <div class="bottom-grid">
        <!-- Recent Reports -->
        <div class="card section-card">
          <div class="section-header">
            <h3>Recent Reports</h3>
          </div>
          <div class="reports-list">
            <div class="report-item">
              <div class="report-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div class="report-info">
                <div class="report-title">2024 Tax Return</div>
                <div class="report-date">Generated Feb 15, 2025</div>
              </div>
              <button class="btn-icon download-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>

            <div class="report-item">
              <div class="report-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div class="report-info">
                <div class="report-title">Q4 Summary</div>
                <div class="report-date">Generated Jan 30, 2025</div>
              </div>
              <button class="btn-icon download-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>

            <button class="btn btn-outline view-all-btn">View All Reports</button>
          </div>
        </div>

        <!-- Recent Messages -->
        <div class="card section-card">
          <div class="section-header">
            <h3>Recent Messages</h3>
          </div>
          <div class="messages-list">
            <div class="message-item">
              <div class="message-avatar">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah">
              </div>
              <div class="message-content">
                <div class="message-header">
                  <span class="sender-name">Sarah Johnson</span>
                  <span class="message-time">2 hours ago</span>
                </div>
                <p class="message-text">Your Q1 documents have been reviewed. Everything looks good!</p>
              </div>
            </div>

            <div class="message-item">
              <div class="message-avatar bot">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="16" x2="8" y2="16"></line>
                  <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
              </div>
              <div class="message-content">
                <div class="message-header">
                  <span class="sender-name">AI Assistant</span>
                  <span class="message-time">1 day ago</span>
                </div>
                <p class="message-text">Reminder: Your quarterly filing is due in 28 days.</p>
              </div>
            </div>

            <button class="btn btn-outline view-all-btn">View All Messages</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xl);
    }

    .welcome-section h1 {
      margin-bottom: var(--spacing-xs);
    }

    .subtitle {
      color: var(--text-secondary);
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-lg);
    }

    .summary-card {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .card-header h3 {
      font-size: 1.125rem;
      font-weight: 500;
    }

    .status-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .status-icon.success { background-color: #dcfce7; color: #166534; }
    .status-icon.pending { background-color: #f3f4f6; color: #4b5563; }
    .status-icon.neutral { background-color: #f3f4f6; color: #4b5563; }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .status-label {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .amount {
      font-size: 2rem;
      font-weight: 600;
      line-height: 1;
    }

    .status-subtext {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .bottom-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: var(--spacing-lg);
    }

    .section-header {
      margin-bottom: var(--spacing-lg);
    }

    .reports-list, .messages-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md);
    }

    .report-item {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
      padding: var(--spacing-md);
      background-color: var(--bg-color);
      border-radius: var(--radius-md);
    }

    .report-icon {
      color: var(--text-secondary);
    }

    .report-info {
      flex: 1;
    }

    .report-title {
      font-weight: 500;
    }

    .report-date {
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .download-btn {
      color: var(--text-secondary);
    }

    .download-btn:hover {
      color: var(--text-primary);
      background-color: rgba(0,0,0,0.05);
    }

    .message-item {
      display: flex;
      gap: var(--spacing-md);
      padding-bottom: var(--spacing-md);
      border-bottom: 1px solid var(--border-color);
    }

    .message-item:last-child {
      border-bottom: none;
    }

    .message-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
    }

    .message-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .message-avatar.bot {
      background-color: #4b5563;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .message-content {
      flex: 1;
    }

    .message-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
    }

    .sender-name {
      font-weight: 500;
    }

    .message-time {
      font-size: 0.75rem;
      color: var(--text-secondary);
    }

    .message-text {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.4;
    }

    .view-all-btn {
      width: 100%;
      margin-top: var(--spacing-sm);
    }
  `]
})
export class DashboardComponent { }
