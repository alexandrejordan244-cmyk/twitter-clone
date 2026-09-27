:root {
  --bg: #07111d;
  --bg-mid: #0d1d2b;
  --panel: #0e1f2e;
  --panel-alt: #112639;
  --panel-soft: rgba(148, 163, 184, 0.04);
  --border: rgba(148, 163, 184, 0.18);
  --text: #edf5ff;
  --muted: #9ab1c9;
  --primary: #1d9bf0;
  --primary-soft: rgba(29, 155, 240, 0.12);
  --success: #22c55e;
  --gold: #fbbf24;
  --danger: #f43f5e;
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
    radial-gradient(circle at top, rgba(29, 155, 240, 0.18), transparent 26%),
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

input,
textarea {
  outline: none;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: radial-gradient(circle at top, rgba(29, 155, 240, 0.2), transparent 30%), var(--bg);
}

.auth-card {
  width: min(430px, 100%);
  padding: 28px 24px;
  border-radius: 24px;
  border: 1px solid var(--border);
  background: rgba(13, 29, 43, 0.8);
  box-shadow: var(--shadow);
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 1.2rem;
}

.brand-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(29, 155, 240, 0.12);
  font-size: 1.8rem;
}

.auth-tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 18px;
}

.auth-tabs button,
.nav-item,
.primary-btn,
.secondary-btn,
.tweet-btn,
.wallet-btn,
.action-btn,
.pack-item,
.shop-card button,
.close-btn {
  transition: transform 0.2s ease, filter 0.2s ease;
}

.auth-tabs button {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  border-radius: 999px;
  padding: 12px 14px;
  font-weight: 600;
}

.auth-tabs button.active {
  background: rgba(29, 155, 240, 0.18);
  border-color: rgba(29, 155, 240, 0.4);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.auth-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

.auth-form input {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: rgba(148, 163, 184, 0.04);
  color: var(--text);
}

.primary-btn,
.secondary-btn,
.tweet-btn,
.wallet-btn,
.pack-item,
.shop-card button,
.close-btn {
  border: none;
  border-radius: 999px;
  font-weight: 700;
}

.primary-btn,
.tweet-btn {
  background: linear-gradient(135deg, #1d9bf0, #0ea5e9);
  color: white;
  box-shadow: 0 12px 30px rgba(29, 155, 240, 0.3);
}

.primary-btn {
  padding: 12px 18px;
}

.secondary-btn {
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
  padding: 10px 14px;
}

.auth-footer {
  margin-top: 18px;
  color: var(--muted);
  text-align: center;
  line-height: 1.5;
}

.app-shell {
  width: min(1500px, 100%);
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr) 330px;
}

.sidebar,
.right-rail {
  padding: 18px 18px 20px;
  border-right: 1px solid var(--border);
  background: rgba(7, 17, 29, 0.74);
}

.right-rail {
  border-right: none;
  border-left: 1px solid var(--border);
}

.brand-wrap {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  margin: 0 0 18px 12px;
  border-radius: 50%;
  background: rgba(29, 155, 240, 0.12);
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
  width: 100%;
  padding: 12px 14px;
  border: none;
  background: transparent;
  color: var(--text);
  border-radius: 999px;
  text-align: left;
  font-size: 1rem;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(148, 163, 184, 0.08);
}

.tweet-btn {
  display: block;
  width: 88%;
  margin: 16px 0 18px 12px;
  padding: 16px 14px;
  font-size: 1rem;
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
.creator-item strong,
.trend-item strong,
.pack-item strong,
.chat-header h3,
.profile-meta h2,
.premium-card h4,
.shop-card h4 {
  display: block;
}

.profile-card span,
.post-header span,
.creator-item span,
.pack-item span,
.profile-meta span,
.trend-item span,
.notification-list,
.premium-card ul,
.shop-card p,
.message-list small,
.chat-header span,
.eyebrow,
.thread-copy span,
.pill,
.modal-pack span,
.stats-grid span,
.stats-row span,
.shop-card p {
  color: var(--muted);
}

.main-panel {
  background: rgba(12, 20, 31, 0.64);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid var(--border);
  background: rgba(7, 17, 29, 0.88);
  backdrop-filter: blur(12px);
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.topbar h1 {
  margin: 0;
  font-size: 1.5rem;
}

.wallet-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: rgba(251, 191, 36, 0.08);
  color: #fcd34d;
  border: 1px solid rgba(251, 191, 36, 0.2);
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
  width: 54px;
  height: 54px;
  font-size: 0.9rem;
}

.avatar.small {
  width: 42px;
  height: 42px;
  font-size: 0.8rem;
}

.avatar.xl {
  width: 88px;
  height: 88px;
  font-size: 1.2rem;
}

.tone-green {
  background: linear-gradient(135deg, #22c55e, #14b8a6);
}

.tone-gold {
  background: linear-gradient(135deg, #f59e0b, #ef4444);
}

.tone-orange {
  background: linear-gradient(135deg, #f59e0b, #fb7185);
}

.tone-purple {
  background: linear-gradient(135deg, #a78bfa, #8b5cf6);
}

.composer-panel {
  flex: 1;
}

.composer-panel textarea {
  width: 100%;
  border: none;
  resize: none;
  background: transparent;
  padding: 8px 0 10px;
  color: var(--text);
  font-size: 1.15rem;
}

.composer-panel textarea::placeholder {
  color: var(--muted);
}

.composer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 12px 20px 18px;
  border-bottom: 1px solid var(--border);
}

.stats-grid > div,
.panel-box,
.shop-card,
.premium-card,
.message-list,
.chat-box,
.profile-layout,
.content-layout,
.shop-layout,
.messages-layout {
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--border);
}

.stats-grid > div {
  padding: 16px;
  border-radius: 16px;
}

.stats-grid strong {
  display: block;
  font-size: 1.45rem;
  margin-bottom: 8px;
}

.feed-list {
  display: flex;
  flex-direction: column;
}

.post-card {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 14px;
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
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

.pill {
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(29, 155, 240, 0.12);
  color: var(--primary);
  font-size: 0.72rem;
}

.post-content {
  margin: 10px 0 14px;
  line-height: 1.7;
  color: #f3f7fb;
  white-space: pre-wrap;
}

.post-image {
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
  border: none;
  background: transparent;
  color: var(--muted);
  border-radius: 999px;
  padding: 6px 10px;
}

.action-btn:hover,
.action-btn.liked {
  background: rgba(244, 63, 94, 0.1);
  color: var(--danger);
}

.action-btn.boost:hover {
  background: rgba(251, 191, 36, 0.12);
  color: var(--gold);
}

.content-layout,
.messages-layout,
.shop-layout,
.premium-layout,
.profile-layout {
  padding: 22px 20px 30px;
}

.panel-box,
.shop-card,
.profile-banner,
.premium-card,
.chat-box,
.message-list {
  border-radius: 18px;
}

.panel-box,
.shop-card,
.premium-card {
  padding: 18px 16px;
}

.panel-box h3,
.shop-card h4,
.premium-card h4,
.chat-header h3 {
  margin: 0 0 14px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.mini-card {
  padding: 16px;
  border-radius: 16px;
  background: rgba(29, 155, 240, 0.06);
  border: 1px solid rgba(29, 155, 240, 0.2);
}

.mini-card span,
.mini-card em {
  display: block;
  color: var(--muted);
}

.creator-list,
.notification-list,
.message-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.creator-item,
.thread-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.creator-item > div:nth-child(2),
.thread-copy {
  flex: 1;
}

.secondary-btn {
  border: none;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
  padding: 8px 12px;
}

.messages-layout {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 18px;
}

.message-list {
  padding: 14px;
  border-radius: 18px;
}

.thread-item {
  padding: 10px 8px;
  border-radius: 14px;
  background: rgba(148, 163, 184, 0.03);
}

.thread-copy strong {
  display: block;
  margin-bottom: 4px;
}

.thread-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.thread-meta em {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-style: normal;
  font-size: 0.7rem;
}

.chat-box {
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding: 16px;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.chat-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 18px 0;
}

.bubble {
  max-width: 72%;
  padding: 12px 14px;
  border-radius: 16px;
  line-height: 1.5;
}

.bubble.incoming {
  background: rgba(148, 163, 184, 0.05);
}

.bubble.outgoing {
  margin-left: auto;
  background: rgba(29, 155, 240, 0.18);
}

.chat-input-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-input-row input {
  flex: 1;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 12px 16px;
  background: rgba(148, 163, 184, 0.03);
  color: var(--text);
}

.shop-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.shop-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.shop-emoji {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  background: rgba(29, 155, 240, 0.12);
  border-radius: 18px;
  font-size: 1.8rem;
}

.shop-card p {
  margin: 6px 0 0;
  line-height: 1.5;
}

.profile-banner {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(148, 163, 184, 0.03);
}

.profile-meta h2 {
  margin: 0 0 8px;
}

.profile-meta span,
.profile-meta p {
  color: var(--muted);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 20px;
}

.stats-row > div {
  padding: 18px;
  border-radius: 16px;
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--border);
}

.stats-row strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.4rem;
}

.premium-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.premium-card {
  position: relative;
  background: rgba(148, 163, 184, 0.03);
}

.premium-card.featured {
  background: rgba(29, 155, 240, 0.08);
  border-color: rgba(29, 155, 240, 0.35);
}

.tag {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 5px 8px;
  border-radius: 999px;
  background: rgba(29, 155, 240, 0.12);
  color: var(--primary);
  font-size: 0.7rem;
}

.premium-card ul {
  list-style: none;
  padding: 0;
  margin: 12px 0 18px;
  line-height: 1.8;
}

.right-rail {
  padding-top: 14px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.05);
  border: 1px solid var(--border);
}

.search-box input {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--text);
}

.soft {
  margin-top: 18px;
}

.trend-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
}

.trend-item:not(:last-child) {
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
}

.trend-item small {
  display: block;
  margin-bottom: 4px;
}

.notification-list {
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 1.7;
}

.pack-box {
  padding-bottom: 10px;
}

.pack-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  padding: 12px 14px;
  background: rgba(148, 163, 184, 0.03);
  border: 1px solid var(--border);
  color: var(--text);
}

.pack-item.selected {
  border-color: rgba(29, 155, 240, 0.4);
  background: rgba(29, 155, 240, 0.08);
}

.pack-item em {
  font-style: normal;
  color: var(--gold);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.76);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 1000;
}

.modal-card {
  width: min(420px, 100%);
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.modal-header,
.modal-footer,
.modal-pack {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.modal-header {
  margin-bottom: 14px;
}

.modal-header h3 {
  margin: 0;
}

.close-btn {
  width: 36px;
  height: 36px;
  background: rgba(148, 163, 184, 0.08);
  color: var(--text);
}

.modal-pack {
  padding: 16px 14px;
  border-radius: 16px;
  background: rgba(29, 155, 240, 0.08);
  border: 1px solid rgba(29, 155, 240, 0.2);
}

.coin-badge {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(251, 191, 36, 0.12);
  font-size: 1.6rem;
}

.modal-card p {
  color: var(--muted);
  line-height: 1.6;
}

.modal-footer {
  margin-top: 12px;
}

.modal-footer span {
  font-weight: 700;
  color: var(--text);
}

@media (max-width: 1100px) {
  .app-shell {
    grid-template-columns: 220px minmax(0, 1fr);
  }

  .right-rail {
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

  .messages-layout {
    grid-template-columns: 1fr;
  }

  .profile-banner {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid,
  .stats-row {
    grid-template-columns: 1fr;
  }
}

button:hover {
  transform: translateY(-1px);
  filter: brightness(1.04);
}
