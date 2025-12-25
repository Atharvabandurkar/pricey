# Pricey

A modern price tracking application that monitors product prices across e-commerce platforms and sends alerts when prices drop.

## Features

- **Price Tracking** — Monitor products from any e-commerce site
- **Price History** — View historical price trends with interactive charts
- **Automated Checks** — Scheduled price updates via cron jobs
- **Price Drop Alerts** — Email notifications when prices decrease
- **Google OAuth** — Secure authentication with Supabase

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS, Shadcn UI
- **Backend**: Next.js Server Actions, Supabase (PostgreSQL)
- **Scraping**: Firecrawl API
- **Charts**: Recharts
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase project
- Firecrawl API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Atharvabandurkar/pricey
cd pricey
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
FIRECRAWL_API_KEY=your_firecrawl_key
CRON_SECRET=your_cron_secret
RESEND_API_KEY=your_resend_key
```

4. Run the development server:

```bash
npm run dev
```

## Usage

1. Sign in with Google OAuth
2. Add a product URL from any e-commerce site
3. View price history and charts
4. Receive email alerts when prices drop
