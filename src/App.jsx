import { useMemo, useState } from 'react';

const trending = [
  { tag: '#React', volume: '12,4K' },
  { tag: '#AI', volume: '21K' },
  { tag: '#Startup', volume: '18,7K' },
  { tag: '#Crypto', volume: '9,9K' },
  { tag: '#Design', volume: '5,2K' },
];

const initialPosts = [
  {
    id: 1,
    author: 'Sophie Martin',
    handle: '@sophiem',
    badge: 'Créatrice',
    initials: 'SM',
    time: '2 min',
    content:
      'On ne construit pas une plateforme avec du code seulement. On construit une plateforme avec des habitudes, de la confiance et une vraie expérience de communauté.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    likes: 2450,
    comments: 312,
    reposts: 421,
    liked: true,
  },
  {
    id: 2,
    author: 'Lucas Chen',
    handle: '@lucasdev',
    badge: 'Product',
    initials: 'LC',
    time: '12 min',
    content:
      'Le vrai levier de croissance d’un réseau social, ce n’est pas l’algorithme. C’est la qualité des interactions humaines dopées par des outils utiles.',
    image: null,
    likes: 1280,
    comments: 94,
    reposts: 133,
    liked: false,
  },
  {
    id: 3,
    author: 'Claire Dubois',
    handle: '@cldub',
    badge: 'UX',
    initials: 'CD',
    time: '31 min',
    content:
      'Le meilleur produit social ne force pas l’utilisateur. Il lui donne envie de revenir, de partager, de créer, sans friction.',
    image: null,
    likes: 1840,
    comments: 208,
    reposts: 171,
    liked: false,
  },
];

const suggestions = [
  { name: 'Naomi Lee', handle: '@naomilee', tone: 'orange' },
  { name: 'Jean Martin', handle: '@jeanmar', tone: 'green' },
  { name: 'Sarah K.', handle: '@sarahk', tone: 'purple' },
];

const coinPacks = [
  { id: 1, label: 'Pack 50', coins: 50, price: '4,99 €', bonus: 'Aucun bonus' },
  { id: 2, label: 'Pack 120', coins: 120, price: '9,99 €', bonus: 'Bonus +15' },
  { id: 3, label: 'Pack 300', coins: 300, price: '19,99 €', bonus: 'Bonus +50' },
  { id: 4, label: 'Pack 800', coins: 800, price: '49,99 €', bonus: 'Bonus +120' },
];

const shopItems = [
  {
    id: 1,
    name: 'Boost Visibilité',
    description: 'Faites remonter votre publication',
    price: 25,
    icon: '🚀',
  },
  {
    id: 2,
    name: 'Badge Premium',
    description: 'Affichez votre profil avec un badge premium',
    price: 60,
    icon: '✨',
  },
  {
    id: 3,
    name: 'Pack de 200 impressions',
    description: 'Accélérez la diffusion de votre contenu',
    price: 110,
    icon: '📈',
  },
  {
    id: 4,
    name: 'Cadeau VIP',
    description: 'Permet d’envoyer un cadeau à un créateur',
    price: 90,
    icon: '🎁',
  },
];

const dmThreads = [
  {
    id: 1,
    name: 'Emma Laurent',
    handle: '@emmal',
    tone: 'orange',
    preview: 'Tu as vu le dernier post sur le lancement ?',
    time: '2m',
    unread: 2,
  },
  {
    id: 2,
    name: 'Yann Morel',
    handle: '@yannm',
    tone: 'green',
    preview: 'Je peux te connecter à un designer talentueux.',
    time: '18m',
    unread: 0,
  },
  {
    id: 3,
    name: 'Sonia Dubreuil',
    handle: '@sonia',
    tone: 'purple',
    preview: 'Le réseau est vraiment en train de grandir.',
    time: '1h',
    unread: 1,
  },
];

const notifications = [
  'Sophie a répondu à votre publication.',
  'Votre boost a été validé sur 3 contenus.',
  'Naomi Lee vous suit désormais.',
  'Votre badge Premium est activé.',
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authMode, setAuthMode] = useState('signin');
  const [activeTab, setActiveTab] = useState('Accueil');
  const [wallet, setWallet] = useState(240);
  const [posts, setPosts] = useState(initialPosts);
  const [composer, setComposer] = useState('');
  const [selectedPack, setSelectedPack] = useState(coinPacks[0]);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [messageDraft, setMessageDraft] = useState('');

  const totalLikes = useMemo(
    () => posts.reduce((sum, post) => sum + post.likes, 0),
    [posts]
  );

  const handleSignIn = () => setIsLoggedIn(true);

  const handleAddPost = () => {
    const value = composer.trim();
    if (!value) return;

    const newPost = {
      id: Date.now(),
      author: 'Alexandre Jordan',
      handle: '@alexjordan',
      badge: 'Fondateur',
      initials: 'AJ',
      time: 'maintenant',
      content: value,
      image: null,
      likes: 0,
      comments: 0,
      reposts: 0,
      liked: false,
    };

    setPosts((current) => [newPost, ...current]);
    setComposer('');
  };

  const toggleLike = (id) => {
    setPosts((current) =>
      current.map((post) => {
        if (post.id !== id) return post;

        const nextLiked = !post.liked;
        return {
          ...post,
          liked: nextLiked,
          likes: Math.max(0, post.likes + (nextLiked ? 1 : -1)),
        };
      })
    );
  };

  const boostPost = (id) => {
    if (wallet < 25) {
      setShowPurchaseModal(true);
      return;
    }

    setPosts((current) =>
      current.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 25 } : post
      )
    );
    setWallet((current) => current - 25);
  };

  const buyCoins = () => {
    setWallet((current) => current + selectedPack.coins);
    setShowPurchaseModal(false);
  };

  const purchaseItem = (item) => {
    if (wallet < item.price) {
      setShowPurchaseModal(true);
      return;
    }

    setWallet((current) => current - item.price);
  };

  if (!isLoggedIn) {
    return (
      <div className="auth-shell">
        <div className="auth-card">
          <div className="brand-row">
            <div className="brand-icon">𝕏</div>
            <span>Pulse Social</span>
          </div>

          <div className="auth-tabs">
            <button
              className={authMode === 'signin' ? 'active' : ''}
              onClick={() => setAuthMode('signin')}
            >
              Connexion
            </button>
            <button
              className={authMode === 'signup' ? 'active' : ''}
              onClick={() => setAuthMode('signup')}
            >
              Inscription
            </button>
          </div>

          <div className="auth-form">
            <label>
              E-mail
              <input type="email" placeholder="you@example.com" defaultValue="alex@pulse.dev" />
            </label>
            <label>
              Mot de passe
              <input type="password" placeholder="••••••••" defaultValue="password123" />
            </label>
            {authMode === 'signup' && (
              <label>
                Nom d’utilisateur
                <input type="text" placeholder="alexjordan" defaultValue="alexjordan" />
              </label>
            )}
            <button className="primary-btn" onClick={handleSignIn}>
              {authMode === 'signin' ? 'Se connecter' : 'Créer le compte'}
            </button>
          </div>

          <p className="auth-footer">
            Une plateforme sociale premium avec pièces, boosts, boutique et feed communautaire.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-icon">𝕏</div>
        </div>

        <nav className="nav">
          {['Accueil', 'Découvrir', 'Messages', 'Boutique', 'Profil', 'Premium'].map((label) => (
            <button
              key={label}
              className={`nav-item ${activeTab === label ? 'active' : ''}`}
              onClick={() => setActiveTab(label)}
            >
              <span>
                {label === 'Accueil' ? '🏠' : label === 'Découvrir' ? '🔎' : label === 'Messages' ? '✉️' : label === 'Boutique' ? '🛍️' : label === 'Profil' ? '👤' : '💎'}
              </span>
              {label}
            </button>
          ))}
        </nav>

        <button className="tweet-btn">Publier</button>

        <div className="profile-card">
          <div className="avatar small tone-green">AJ</div>
          <div>
            <strong>Alexandre Jordan</strong>
            <span>@alexjordan</span>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Réseau Social</p>
            <h1>{activeTab}</h1>
          </div>
          <button className="wallet-btn" onClick={() => setShowPurchaseModal(true)}>
            <span>🪙</span> {wallet} pièces
          </button>
        </header>

        {activeTab === 'Accueil' && (
          <>
            <section className="composer">
              <div className="avatar big tone-green">AJ</div>
              <div className="composer-panel">
                <textarea
                  value={composer}
                  onChange={(e) => setComposer(e.target.value)}
                  rows={4}
                  maxLength={280}
                  placeholder="Quoi de neuf ?"
                />
                <div className="composer-actions">
                  <div className="composer-tools">
                    <button>🖼️</button>
                    <button>🎞️</button>
                    <button>📊</button>
                    <button>😊</button>
                  </div>
                  <button className="primary-btn" onClick={handleAddPost}>Poster</button>
                </div>
              </div>
            </section>

            <div className="stats-grid">
              <div>
                <strong>{posts.length}</strong>
                <span>Posts</span>
              </div>
              <div>
                <strong>{totalLikes}</strong>
                <span>Likes</span>
              </div>
              <div>
                <strong>{wallet}</strong>
                <span>Pièces</span>
              </div>
            </div>

            <section className="feed-list">
              {posts.map((post) => (
                <article className="post-card" key={post.id}>
                  <div className="avatar small tone-gold">{post.initials}</div>
                  <div className="post-main">
                    <div className="post-header">
                      <strong>{post.author}</strong>
                      <span>{post.handle}</span>
                      <span>·</span>
                      <span>{post.time}</span>
                      <span className="pill">{post.badge}</span>
                    </div>

                    <p className="post-content">{post.content}</p>

                    {post.image && <img className="post-image" src={post.image} alt="Publication" />}

                    <div className="post-actions">
                      <button className="action-btn">💬 {post.comments}</button>
                      <button className="action-btn">🔁 {post.reposts}</button>
                      <button
                        className={`action-btn ${post.liked ? 'liked' : ''}`}
                        onClick={() => toggleLike(post.id)}
                      >
                        {post.liked ? '💗' : '🤍'} {post.likes}
                      </button>
                      <button className="action-btn boost" onClick={() => boostPost(post.id)}>
                        🚀 Booster (25)
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </>
        )}

        {activeTab === 'Découvrir' && (
          <div className="content-layout">
            <div className="panel-box">
              <h3>Découvrir</h3>
              <div className="cards-grid">
                {trending.map((item) => (
                  <div className="mini-card" key={item.tag}>
                    <span>Trend</span>
                    <strong>{item.tag}</strong>
                    <em>{item.volume}</em>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel-box">
              <h3>Créateurs populaires</h3>
              <div className="creator-list">
                {suggestions.map((person) => (
                  <div className="creator-item" key={person.handle}>
                    <div className={`avatar small tone-${person.tone}`}>N</div>
                    <div>
                      <strong>{person.name}</strong>
                      <span>{person.handle}</span>
                    </div>
                    <button className="secondary-btn">Suivre</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Messages' && (
          <div className="messages-layout">
            <aside className="message-list">
              {dmThreads.map((thread) => (
                <div className="thread-item" key={thread.id}>
                  <div className={`avatar small tone-${thread.tone}`}>{thread.name.charAt(0)}</div>
                  <div className="thread-copy">
                    <strong>{thread.name}</strong>
                    <span>{thread.preview}</span>
                  </div>
                  <div className="thread-meta">
                    <small>{thread.time}</small>
                    {thread.unread > 0 && <em>{thread.unread}</em>}
                  </div>
                </div>
              ))}
            </aside>

            <div className="chat-box">
              <div className="chat-header">
                <h3>Emma Laurent</h3>
                <span>En ligne</span>
              </div>
              <div className="chat-body">
                <div className="bubble incoming">J’ai vu le dernier lancement. Ça a très bien été reçu.</div>
                <div className="bubble outgoing">Super ! J’ai prévu de faire un nouveau boost dès demain.</div>
                <div className="bubble incoming">Parfait, je te recommande le pack Premium pour la croissance.</div>
              </div>
              <div className="chat-input-row">
                <input
                  value={messageDraft}
                  onChange={(e) => setMessageDraft(e.target.value)}
                  placeholder="Écrivez un message..."
                />
                <button className="primary-btn">Envoyer</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Boutique' && (
          <div className="shop-layout">
            {shopItems.map((item) => (
              <div className="shop-card" key={item.id}>
                <div className="shop-emoji">{item.icon}</div>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <button className="primary-btn" onClick={() => purchaseItem(item)}>
                  {item.price} pièces
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Profil' && (
          <div className="profile-layout">
            <div className="profile-banner">
              <div className="avatar xl tone-green">AJ</div>
              <div className="profile-meta">
                <h2>Alexandre Jordan</h2>
                <span>@alexjordan</span>
                <p>Fondateur • Product Designer • Créateur de communauté.</p>
              </div>
            </div>

            <div className="stats-row">
              <div>
                <strong>128K</strong>
                <span>Abonnés</span>
              </div>
              <div>
                <strong>425</strong>
                <span>Abonnements</span>
              </div>
              <div>
                <strong>3.4K</strong>
                <span>Likes</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Premium' && (
          <div className="premium-layout">
            <div className="panel-box">
              <h3>Accès premium</h3>
              <div className="premium-grid">
                <div className="premium-card featured">
                  <span className="tag">Populaire</span>
                  <h4>Premium Pro</h4>
                  <strong>39 €/mois</strong>
                  <ul>
                    <li>Boost illimité</li>
                    <li>Badge premium</li>
                    <li>Analyses détaillées</li>
                  </ul>
                  <button className="primary-btn">Activer</button>
                </div>
                <div className="premium-card">
                  <h4>Creator Plus</h4>
                  <strong>99 €/mois</strong>
                  <ul>
                    <li>Vidéos prioritaires</li>
                    <li>Support dédié</li>
                    <li>Campagnes automatiques</li>
                  </ul>
                  <button className="secondary-btn">Voir</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <aside className="right-rail">
        <div className="search-box">
          <span>🔎</span>
          <input placeholder="Rechercher" />
        </div>

        <div className="panel-box soft">
          <h3>Tendances</h3>
          {trending.map((item) => (
            <div className="trend-item" key={item.tag}>
              <div>
                <small>Trending</small>
                <strong>{item.tag}</strong>
              </div>
              <span>{item.volume}</span>
            </div>
          ))}
        </div>

        <div className="panel-box soft">
          <h3>Notifications</h3>
          <ul className="notification-list">
            {notifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="panel-box soft pack-box">
          <h3>Recharge</h3>
          {coinPacks.map((pack) => (
            <button
              key={pack.id}
              className={`pack-item ${selectedPack.id === pack.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedPack(pack);
                setShowPurchaseModal(true);
              }}
            >
              <div>
                <strong>{pack.label}</strong>
                <span>{pack.bonus}</span>
              </div>
              <em>{pack.price}</em>
            </button>
          ))}
        </div>
      </aside>

      {showPurchaseModal && (
        <div className="modal-backdrop" onClick={() => setShowPurchaseModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Recharge de pièces</h3>
              <button className="close-btn" onClick={() => setShowPurchaseModal(false)}>✕</button>
            </div>

            <div className="modal-pack">
              <div className="coin-badge">🪙</div>
              <div>
                <strong>{selectedPack.label}</strong>
                <span>{selectedPack.coins} pièces</span>
              </div>
            </div>

            <p>
              Activez cette recharge pour booster vos publications, acheter de la visibilité et
              profiter des avantages premium de la plateforme.
            </p>

            <div className="modal-footer">
              <span>{selectedPack.price}</span>
              <button className="primary-btn" onClick={buyCoins}>Acheter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

