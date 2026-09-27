const initialTweets = [
  {
    id: 1,
    author: "Sophie Martin",
    handle: "@sophiem",
    initials: "SM",
    time: "2 min",
    content:
      "Le design d'une interface ne doit pas seulement être beau, il doit aussi inspirer confiance et faciliter la lecture. C'est la magie du bon UX ✨",
    stats: { comments: 128, retweets: 431, likes: 2140 },
    liked: true,
  },
  {
    id: 2,
    author: "Lucas Chen",
    handle: "@lucasdev",
    initials: "LC",
    time: "12 min",
    content:
      "J'ai terminé ma première version d'un dashboard moderne. Ce qui m'a le plus surpris, c'est à quel point un bon spacing et des contrastes bien choisis rendent tout plus lisible. #UI #UX",
    stats: { comments: 54, retweets: 210, likes: 987 },
    liked: false,
  },
  {
    id: 3,
    author: "Claire Dubois",
    handle: "@cldub",
    initials: "CD",
    time: "31 min",
    content:
      "Le code propre ne se voit pas, mais les gens le sentent. Un projet organisé fait gagner du temps à tout le monde. 🧠",
    stats: { comments: 92, retweets: 165, likes: 1108 },
    liked: false,
  },
];

const tweets = [...initialTweets];
const tweetList = document.getElementById("tweetList");
const tweetForm = document.getElementById("tweetForm");
const tweetInput = document.getElementById("tweetInput");

function renderTweets() {
  tweetList.innerHTML = tweets
    .map(
      (tweet) => `
        <article class="tweet-card">
          <div class="avatar small" style="background: linear-gradient(135deg, #f59e0b, #ec4899);">${tweet.initials}</div>
          <div class="tweet-main">
            <div class="tweet-header">
              <strong>${tweet.author}</strong>
              <span>${tweet.handle}</span>
              <span>·</span>
              <span class="tweet-time">${tweet.time}</span>
            </div>
            <p class="tweet-content">${tweet.content}</p>
            <div class="tweet-actions">
              <button class="action-btn" aria-label="Commenter">
                <span>💬</span>
                <span>${tweet.stats.comments}</span>
              </button>
              <button class="action-btn" aria-label="Retweeter">
                <span>🔁</span>
                <span>${tweet.stats.retweets}</span>
              </button>
              <button class="action-btn like ${tweet.liked ? "liked" : ""}" data-id="${tweet.id}" aria-label="Aimer">
                <span>${tweet.liked ? "💗" : "🤍"}</span>
                <span>${tweet.stats.likes}</span>
              </button>
              <button class="action-btn" aria-label="Partager">
                <span>📤</span>
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function addTweet() {
  const content = tweetInput.value.trim();
  if (!content) {
    tweetInput.focus();
    return;
  }

  const newTweet = {
    id: Date.now(),
    author: "Alexandre Jordan",
    handle: "@alexjordan",
    initials: "AJ",
    time: "maintenant",
    content,
    stats: { comments: 0, retweets: 0, likes: 0 },
    liked: false,
  };

  tweets.unshift(newTweet);
  tweetInput.value = "";
  renderTweets();
}

tweetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTweet();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".action-btn.like");
  if (!button) return;

  const tweetId = Number(button.dataset.id);
  const tweet = tweets.find((item) => item.id === tweetId);

  if (!tweet) return;

  tweet.liked = !tweet.liked;
  tweet.stats.likes += tweet.liked ? 1 : -1;
  renderTweets();
});

renderTweets();

const followButtons = document.querySelectorAll(".follow-btn");
followButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isFollowing = button.classList.contains("following");
    button.classList.toggle("following", !isFollowing);
    button.textContent = isFollowing ? "Suivre" : "Suivi";
    button.style.background = isFollowing ? "#e5e7eb" : "#1d9bf0";
    button.style.color = isFollowing ? "#0b1220" : "#fff";
  });
});

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .follow-btn.following {
    background: rgba(29, 155, 240, 0.15);
    color: #fff;
    border: 1px solid rgba(29, 155, 240, 0.5);
  }
`;
document.head.appendChild(styleSheet);
