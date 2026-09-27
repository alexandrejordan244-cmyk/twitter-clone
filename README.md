:root {
  --bg: #07111d;
  --bg-soft: #0f1d2c;
  --panel: #101f2d;
  --panel-strong: #122534;
  --border: rgba(148, 163, 184, 0.18);
  --text: #edf3ff;
  --muted: #8aa0bc;
  --primary: #1d9bf0;
  --primary-soft: rgba(29, 155, 240, 0.18);
  --success: #22c55e;
  --danger: #f43f5e;
  --gold: #fbbf24;
  --shadow: rgba(2, 8, 23, 0.7);
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
}

body {
  background:
    radial-gradient(circle at top, rgba(29, 155, 240, 0.15), transparent 30%),
    var(--bg);
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  width: min(1480px, 100%);
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr) 330px;
}

.sidebar,
.rightbar {
  padding: 20px 18px;
  background: rgba(8, 16, 24, 0.7);
  border-right: 1px solid var(--border);
}

.rightbar {
  border-right: none;
  border-left: 1px solid var(--border);
}

.brand-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  margin: 0 0 18px 12px;
  border-radius: 50%;
  background: rgba(29, 155, 240, 0.1);
}

.brand-icon {
  font-size: 2rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: var(--text);
  font-size: 1rem;
  text-align: left;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(148, 163, 184, 0.08);
}

.tweet-btn,
.publish-btn,
.confirm-btn,
.wallet-btn,
.mini-btn {
  border: none;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.tweet-btn,
.publish-btn,
.confirm-btn {
  background: linear-gradient(135deg, #1d9bf0, #0ea5e9);
  color: white;
  box-shadow: 0 10px 30px rgba(29, 155, 240, 0.35);
}

.tweet-btn {
  width: 88%;
  padding: 16px 14px;
  margin: 12px 0 20px 12px;
  font-size: 1rem;
}

.publish-btn,
.confirm-btn {
  padding: 10px 18px;
}

.wallet-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(251, 191, 36, 0.12);
  color: #fcd34d;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.profile-card {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.04);
}

.profile-card strong,
.post-header strong,
.follow-item strong,
.user-inline strong {
  display: block;
  font-size: 0.96rem;
}

.profile-card span,
.post-header span,
.follow-item span,
.user-inline span,
.trend-item span,
.panel h3,
.eyebrow {
  color: var(--muted);
}

.feed {
  border-right: 1px solid var(--border);
  background: rgba(12, 20, 31, 0.68);
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 22px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(9px);
  background: rgba(7, 17, 29, 0.88);
  border-bottom: 1px solid var(--border);
  z-index: 100;
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.topbar h1 {
  margin: 0;
  font-size: 1.6rem;
}

.composer {
  display: flex;
  gap: 14px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
}

.avatar {
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
  font-weight: 700;
  flex-shrink: 0;
}

.avatar.big {
  width: 52px;
  height: 52px;
  font-size: 0.9rem;
}

.avatar.small {
  width: 42px;
  height: 42px;
  font-size: 0.8rem;
}

.gradient-1 {
  background: linear-gradient(135deg, #22c55e, #06b6d4);
}

.gradient-2 {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
}

.gradient-orange {
  background: linear-gradient(135deg, #f59e0b, #fb7185);
}

.gradient-green {
  background: linear-gradient(135deg, #22c55e, #14b8a6);
}

.gradient-purple {
  background: linear-gradient(135deg, #a78bfa, #6366f1);
}

.composer-panel {
  flex: 1;
}

.composer-panel textarea {
  width: 100%;
  padding: 16px 0;
  resize: none;
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 1.2rem;
  outline: none;
}

.composer-panel textarea::placeholder {
  color: var(--muted);
}

.composer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
}

.composer-tools {
  display: flex;
  gap: 8px;
}

.composer-tools button {
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: rgba(29, 155, 240, 0.08);
  color: var(--primary);
}

.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 12px 20px 18px;
  border-bottom: 1px solid var(--border);
}

.stats-bar > div {
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 16px;
}

.stats-bar strong {
  display: block;
  font-size: 1.4rem;
}

.stats-bar span {
  color: var(--muted);
  font-size: 0.8rem;
}

.post-list {
  display: flex;
  flex-direction: column;
}

.post-card {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 14px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s ease;
}

.post-card:hover {
  background: rgba(148, 163, 184, 0.025);
}

.post-main {
  min-width: 0;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.post-content {
  margin: 10px 0 14px;
  line-height: 1.6;
  color: #f5f7fb;
  white-space: pre-wrap;
}

.post-image {
  display: block;
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid var(--border);
}

.post-actions {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
}

.action-btn {
  background: transparent;
  border: none;
  color: var(--muted);
  padding: 6px 8px;
  border-radius: 999px;
  transition: 0.2s ease;
}

.action-btn:hover,
.action-btn.liked {
  color: var(--danger);
  background: rgba(244, 63, 94, 0.08);
}

.action-btn.boost:hover {
  color: var(--gold);
  background: rgba(251, 191, 36, 0.1);
}

.rightbar {
  padding-top: 14px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.06);
  border: 1px solid var(--border);
}

.search-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: var(--text);
}

.search-box input::placeholder {
  color: var(--muted);
}

.panel {
  margin-top: 18px;
  padding: 18px 16px;
  border-radius: 18px;
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--border);
}

.panel h3 {
  margin: 0 0 12px;
  font-size: 1.08rem;
  color: var(--text);
}

.trend-item,
.follow-item,
.shop-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.trend-item {
  padding: 10px 0;
}

.trend-item:not(:last-child),
.follow-item:not(:last-child) {
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
}

.trend-item small {
  display: block;
  color: var(--muted);
  margin-bottom: 4px;
}

.trend-item strong {
  font-size: 0.97rem;
}

.follow-item {
  padding: 12px 0;
}

.user-inline {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mini-btn {
  padding: 8px 12px;
  background: white;
  color: #07111d;
}

.shop-panel {
  padding-bottom: 10px;
}

.shop-item {
  width: 100%;
  padding: 12px 14px;
  margin-top: 8px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(148, 163, 184, 0.02);
  color: var(--text);
}

.shop-item.selected {
  border-color: rgba(29, 155, 240, 0.8);
  background: rgba(29, 155, 240, 0.08);
}

.shop-item strong,
.shop-item span {
  display: block;
}

.shop-item span {
  color: var(--muted);
  font-size: 0.8rem;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.72);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 999;
}

.modal {
  width: min(420px, 100%);
  padding: 18px;
  border-radius: 22px;
  background: var(--panel);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.modal-header,
.modal-footer,
.pack-preview {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.modal-header h3 {
  margin: 0;
}

.close-btn {
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: rgba(148, 163, 184, 0.1);
  color: var(--text);
}

.pack-preview {
  margin: 18px 0 12px;
  padding: 14px;
  border-radius: 16px;
  background: rgba(29, 155, 240, 0.08);
  border: 1px solid rgba(29, 155, 240, 0.2);
}

.coin-badge {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  border-radius: 50%;
  background: rgba(251, 191, 36, 0.18);
}

.pack-preview strong,
.pack-preview span {
  display: block;
}

.pack-preview span {
  color: var(--muted);
}

.modal-body {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 1100px) {
  .app-shell {
    grid-template-columns: 210px minmax(0, 1fr);
  }

  .rightbar {
    display: none;
  }
}

@media (max-width: 760px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }

  .topbar,
  .composer,
  .post-card {
    padding-left: 14px;
    padding-right: 14px;
  }

  .post-actions {
    justify-content: flex-start;
  }
}
