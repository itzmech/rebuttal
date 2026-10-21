# 🥊 Rebuttal — AI Debate Partner

**Rebuttal** is a high-intensity, dark-themed AI debate arena built for competitive thinkers. Test your conviction against an AI sparring partner that never pulls punches, calls out weak logic, and dissects fallacies across 4 rapid rounds — followed by a championship scorecard.

Targeted for deployment on the **Vercel Free Tier** and powered by ultra-fast inference on **Groq** (`llama-3.3-70b-versatile`).

---

## ⚡ Features

1. **Arena Sparring (4 Rounds)**
   - Enter your own topic or click **"Surprise me"** from 35+ curated philosophical, technological, and cultural debate topics.
   - Pick your stance: **For (Pro)**, **Against (Con)**, or **Random**.
   - Select difficulty:
     - 🤝 **Friendly**: Steelmans your perspective, provides gentle, constructive pushback.
     - 🔍 **Sharp**: Isolates logical leaps and unbacked empirical claims.
     - 🔥 **Ruthless**: Forensic dissection attacking every vulnerability (without personal insults).
   - Strict 120-word limit per turn keeps the debate dense, punchy, and fast.
   - Every AI response ends with a pointed, high-stakes challenge.
   - Optional 90-second turn timer.

2. **Championship Scorecard**
   - 10-point scoring for **Clarity**, **Evidence**, **Logic**, and **Rebuttal Strength**, plus an **Overall Score**.
   - Automatic fallacy detection with quotes and explanations (e.g. *Straw Man*, *False Dilemma*, *Hasty Generalization*).
   - Direct quote highlights of your **Best Argument** and **Weakest Argument**.
   - One actionable tip to level up your rhetoric.
   - **Share Card**: Export a high-resolution, branded PNG scorecard card powered by `html-to-image`.

3. **Debate History & Progression**
   - Saves completed debates to browser `localStorage`.
   - Responsive score-over-time SVG progression curve.
   - Full transcripts and scorecards accessible anytime.

4. **Abuse & Free-Tier Cost Protection**
   - 🛡️ **5 debates/day limit** tracked per client + IP with automatic daily rollover.
   - 🛡️ **Max 800 characters** per argument.
   - 🛡️ **1 request per 2 seconds** pacing rate limit.
   - 🛡️ **Built-in content safety check** blocking hate speech, violence against persons, and explicit sexual material.

5. **Monetization Hooks Ready**
   - ☕ **"Buy me a chai"** button linked in the navigation, scorecard, and footer.
   - 💎 **"Go Pro" (₹99/month)** upgrade modal with waitlist email capture when daily limits are reached.
   - 📢 Clearly marked slot for **Google AdSense**.

---

## 🚀 Quickstart (Local Development)

### 1. Clone & Install Dependencies

```bash
git clone <your-repo-url>
cd rebuttal
npm install
```

### 2. Configure Environment Variables

Create `.env.local`:

```bash
cp .env.example .env.local
```

Add your free Groq API key:

```env
AI_API_KEY=gsk_your_groq_api_key_here
AI_BASE_URL=https://api.groq.com/openai/v1
AI_MODEL=llama-3.3-70b-versatile
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 How to Get a Free Groq API Key (Under 60 Seconds)

Groq provides an extremely generous free tier with sub-second token generation:

1. Go to [https://console.groq.com](https://console.groq.com) and sign in (Google or GitHub).
2. Click **API Keys** on the left navigation bar (or visit [https://console.groq.com/keys](https://console.groq.com/keys)).
3. Click **Create API Key**.
4. Give it a name (e.g., `Rebuttal Arena`) and copy the generated key (starts with `gsk_...`).
5. Paste it as `AI_API_KEY` in your `.env.local` or Vercel Environment Variables.

> **Tip:** You can also use OpenAI (`gpt-4o-mini`), OpenRouter, or a local Ollama instance (`http://localhost:11434/v1`) by simply updating `AI_BASE_URL` and `AI_MODEL`.

---

## 🌐 How to Deploy to Vercel (Free Tier)

### Option A: 1-Click Git Import (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: initial Rebuttal release"
   git push origin main
   ```
2. Go to [https://vercel.com/new](https://vercel.com/new) and log in.
3. Import your **rebuttal** GitHub repository.
4. In the **Environment Variables** section, add:
   - `AI_API_KEY`: your `gsk_...` key from Groq.
   - `AI_BASE_URL`: `https://api.groq.com/openai/v1` (optional, defaults to Groq)
   - `AI_MODEL`: `llama-3.3-70b-versatile` (optional, defaults to Llama 3.3 70B)
5. Click **Deploy**. Your app will be live on `https://rebuttal-*.vercel.app` in less than 2 minutes!

### Option B: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
# Enter environment variables when prompted or set via:
vercel env add AI_API_KEY
vercel --prod
```

---

## ⚙️ Configuration & Monetization Customization

All top-level configurations can be modified in [`src/config/site.ts`](src/config/site.ts):

| Variable | Description |
| :--- | :--- |
| `BUY_ME_A_CHAI_URL` | Your Buy Me A Coffee / UPI payment URL |
| `GO_PRO_NOTIFY_FORM_URL` | Your Formspree / Google Form URL for waitlist email capture |
| `ADSENSE_CLIENT_ID` | Your Google AdSense Publisher ID (`ca-pub-...`) |
| `ADSENSE_SLOT_ID` | Your AdSense Ad Unit Slot ID |
| `SITE_CONFIG.maxDebatesPerDay` | Free debates allowed per user per day (default: `5`) |
| `SITE_CONFIG.maxInputLength` | Character limit per user message (default: `800`) |
| `SITE_CONFIG.turnTimerSeconds` | Turn countdown timer (default: `90`) |

---

## 🛡️ Architecture & Security

- **Server-Side API Routes**:
  - `POST /api/debate`: Validates input length, rate limits, moderation, and interacts with Groq. Never exposes `AI_API_KEY` to the client.
  - `POST /api/scorecard`: Evaluates 4 rounds of debate transcript, requests strict JSON schema, and features built-in retry and fallback logic.
  - `GET /api/usage`: Checks remaining daily allotment for the client ID / IP.
- **Client Components**: Pure React 19 + Next.js 15 App Router with Tailwind CSS, `html-to-image` for instant social card downloads, and `canvas-confetti` for celebration.

---

## 📜 License

MIT License. Built for thinkers, debaters, and builders. Spar responsibly!
