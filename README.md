🚀 Pricey (or ValueVault)
A modern, full-stack e-commerce price tracker for the Gen-Z era.

📖 Overview
Pricey is a high-performance price tracking engine that allows users to monitor products across multiple e-commerce platforms. It utilizes AI-powered web scraping to extract real-time data and provides historical price trends via interactive charts.

Key Features
AI-Powered Scraping: Integration with Firecrawl to bypass bot detection and extract structured JSON data (Product Name, Price, Image).

Price History Tracking: Automated price checks that log historical data into Supabase.

Interactive Visualizations: Dynamic line charts built with Recharts to visualize price volatility.

Secure Auth: Google OAuth integration via Supabase Auth.

Responsive UI: Mobile-first design using Tailwind CSS and Shadcn UI.

🛠️ Tech Stack
Frontend: Next.js (App Router), React 19, Tailwind CSS, Shadcn UI

Backend: Next.js Server Actions, Supabase (PostgreSQL)

Data Extraction: Firecrawl API (v2)

Charts: Recharts

Deployment: Vercel

⚙️ Getting Started
Prerequisites
Node.js 18+

A Supabase Project

A Firecrawl API Key

Installation
Clone the repository:

Bash

git clone (https://github.com/Atharvabandurkar/pricey)
cd pricey
Install dependencies:

Bash

npm install
Set up Environment Variables: Create a .env.local file in the root directory:

Code snippet

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
FIRECRAWL_API_KEY=your_firecrawl_key
Run the development server:

Bash

npm run dev
📡 API Architecture
The application uses an Atomic Deployment strategy on Vercel.

When a user submits a URL:

Client triggers a Server Action.

Server calls the Firecrawl v2 API with a custom JSON schema.

Supabase performs an upsert to update the price and log the history.

Next.js revalidates the data cache using revalidatePath.
