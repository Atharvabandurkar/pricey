// import {AddProductForm} from "@/components/AddProductForm";
// import {AuthButton} from "@/components/AuthButton";
// import { Bell, LogIn, LogInIcon, Rabbit, Shield } from "lucide-react"
// import Image from "next/image"

// export default function Home() {
//   const user = null;

//   const products = [];

//   const FEATURES = [
//     {
//       icon: Rabbit,
//       title: "Lightning Fast",
//       description:
//         "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
//     },
//     {
//       icon: Shield,
//       title: "Always Reliable",
//       description:
//         "Works across all major e-commerce sites with built-in anti-bot protection",
//     },
//     {
//       icon: Bell,
//       title: "Smart Alerts",
//       description: "Get notified instantly when prices drop below your target",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <Image
//               src="/p1.jpg"
//               alt="Pricey logo"
//               width={600}
//               height={200}
//               className="h-10 w-auto"
//             />

//             {/* Authbutton */}
//           </div>
//           <AuthButton user={user} />
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
//             Made with ❤️ by MYTH
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//             Never Miss a Price Drop
//           </h2>
//           <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
//             Track prices from any e-commerce site. Get instant alerts when
//             prices drop. Save money effortlessly.
//           </p>
//         </div>
//       </section>

//       {/* Add Product Form  */}
//       <AddProductForm user={user} />


//       {/* Features */}
//       {products.length === 0 && (
//         <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
//           {FEATURES.map(({ icon: Icon, title, description }) => (
//             <div
//               key={title}
//               className="bg-white p-6 rounded-xl border border-gray-200"
//             >
//               <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <Icon className="w-6 h-6 text-orange-500" />
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
//               <p className="text-sm text-gray-600">{description}</p>
//             </div>
//           ))}
//         </div>
//       )}


//   </main >
//   )
// }

// import { AuthButton } from "@/components/AuthButton";
// import { AddProductForm } from "@/components/AddProductForm";
// import { Bell, LogIn, Rabbit, Shield, TrendingDown } from "lucide-react"
// import Image from "next/image"
// import { createClient } from "@/utils/supabase/server";
// import { getProducts } from "./actions";
// import Productcard from "@/components/Productcard";

// export default async function Home() {
//   // Fetch the authenticated user from Supabase
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();

//   const products = user ? await getProducts() : [];

//   const FEATURES = [
//     {
//       icon: Rabbit,
//       title: "Lightning Fast",
//       description:
//         "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
//     },
//     {
//       icon: Shield,
//       title: "Always Reliable",
//       description:
//         "Works across all major e-commerce sites with built-in anti-bot protection",
//     },
//     {
//       icon: Bell,
//       title: "Smart Alerts",
//       description: "Get notified instantly when prices drop below your target",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <Image
//               src="/p1.jpg"
//               alt="Pricey logo"
//               width={600}
//               height={200}
//               className="h-10 w-auto"
//             />
//           </div>
//           {/* Renders AuthButton */}
//           <AuthButton user={user} />
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
//             Made with ❤️ by MYTH
//           </div>

//           <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
//             Never Miss a Price Drop
//           </h2>
//           <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
//             Track prices from any e-commerce site. Get instant alerts when
//             prices drop. Save money effortlessly.
//           </p>
//         </div>
//       </section>

//       {/* Add Product Form  */}
//       <AddProductForm user={user} />


//       {/* Features */}
//       {products.length === 0 && (
//         <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
//           {FEATURES.map(({ icon: Icon, title, description }) => (
//             <div
//               key={title}
//               className="bg-white p-6 rounded-xl border border-gray-200"
//             >
//               <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <Icon className="w-6 h-6 text-orange-500" />
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
//               <p className="text-sm text-gray-600">{description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       {/* Products Grid */}
//       {user && products.length > 0 && (
//         <section className="max-w-7xl mx-auto px-4 pb-20">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-2xl font-bold text-gray-900">
//               Your Tracked Products
//             </h3>
//             <span className="text-sm text-gray-500">
//               {products.length} {products.length === 1 ? "product" : "products"}
//             </span>
//           </div>

//           <div className="grid gap-6 md:grid-cols-2 items-start">
//             {products.map((product) => (
//               <Productcard key={product.id} product={product} />
//             ))}
//           </div>
//         </section>
//       )}


//       {user && products.length === 0 && (
//         <section className="max-w-2xl mx-auto px-4 pb-20 text-center">
//           <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12">
//             <TrendingDown className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               No products yet
//             </h3>
//             <p className="text-gray-600">
//               Add your first product above to start tracking prices!
//             </p>
//           </div>
//         </section>
//       )}
//     </main >
//   )
// }

import { AuthButton } from "@/components/AuthButton";
import { AddProductForm } from "@/components/AddProductForm";
import { Bell, Rabbit, Shield, TrendingDown, Sparkles } from "lucide-react"
import Image from "next/image"
import { createClient } from "@/utils/supabase/server";
import { getProducts } from "./actions";
import Productcard from "@/components/Productcard";

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const products = user ? await getProducts() : [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description: "Extract prices in seconds, handling dynamic content with ease.",
    },
    {
      icon: Shield,
      title: "Always Reliable",
      description: "Anti-bot protection ensures your tracking never skips a beat.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Instant notifications the moment a price hits your target.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-indigo-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent -z-10" />

      {/* Header */}
      <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 group transition-all">
            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:rotate-6 transition-transform">
               <TrendingDown className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Pricey</span>
          </div>
          <AuthButton user={user} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in">
            <Sparkles className="w-3 h-3" />
            Made with ❤️ by MYTH
          </div>

          <h1 className="text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Track Prices <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">Like a Pro.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop overpaying. Join thousands of smart shoppers using Pricey to monitor 
            e-commerce trends and catch every single deal.
          </p>
        </div>
      </section>

      {/* Add Product Form - Adding a shadow wrapper for depth */}
      <div className="relative z-20 -mb-10 px-6">
        <div className="max-w-3xl mx-auto drop-shadow-[0_20px_50px_rgba(79,70,229,0.1)]">
          <AddProductForm user={user} />
        </div>
      </div>

      {/* Features - Modern Minimalist Cards */}
      {products.length === 0 && (
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-32 px-6">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white p-8 rounded-2xl border border-slate-200/60 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6 text-slate-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-3 text-lg">{title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Products Grid */}
      {user && products.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mt-24 pb-24">
          <div className="flex items-end justify-between mb-10 border-b border-slate-100 pb-6">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">Your Collection</h3>
              <p className="text-slate-500 text-sm mt-1">Real-time tracking active</p>
            </div>
            <div className="bg-slate-100 px-3 py-1 rounded-md text-xs font-bold text-slate-600 uppercase tracking-tighter">
              {products.length} {products.length === 1 ? "Item" : "Items"}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-start">
            {products.map((product) => (
              <Productcard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Empty State - Using a softer border and cleaner type */}
      {user && products.length === 0 && (
        <section className="max-w-2xl mx-auto px-6 mt-20 pb-24 text-center">
          <div className="bg-white rounded-3xl border border-slate-200 p-16 shadow-xs">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Your dashboard is empty
            </h3>
            <p className="text-slate-500 max-w-xs mx-auto">
              Paste a link above to see the price history magic happen.
            </p>
          </div>
        </section>
      )}
    </main>
  )
}


// import { AuthButton } from "@/components/AuthButton";
// import { AddProductForm } from "@/components/AddProductForm";
// import { Bell, Rabbit, Shield, TrendingDown, ArrowUpRight } from "lucide-react"
// import Image from "next/image"
// import { createClient } from "@/utils/supabase/server";
// import { getProducts } from "./actions";
// import Productcard from "@/components/Productcard";

// export default async function Home() {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   const products = user ? await getProducts() : [];

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-indigo-500/30">
//       {/* Editorial Header */}
//       <header className="border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
//         <div className="max-w-[1400px] mx-auto px-8 py-6 flex justify-between items-baseline">
//           <div className="flex items-center gap-2">
//             <span className="text-2xl font-bold tracking-tighter uppercase italic">Pricey</span>
//             <div className="h-1 w-1 bg-indigo-500 rounded-full" />
//           </div>
//           <nav className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.2em] font-medium opacity-50">
//             <a href="#" className="hover:opacity-100 transition-opacity">Dashboard</a>
//             <a href="#" className="hover:opacity-100 transition-opacity">Markets</a>
//             <a href="#" className="hover:opacity-100 transition-opacity">Insights</a>
//           </nav>
//           <AuthButton user={user} />
//         </div>
//       </header>

//       {/* Hero: Bold Editorial Typography */}
//       <section className="pt-32 pb-20 px-8">
//         <div className="max-w-[1400px] mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-end">
//             <div>
//               <p className="text-indigo-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">
//                 Smart Personal Finance // 2026
//               </p>
//               <h1 className="text-7xl md:text-8xl font-medium tracking-tight leading-[0.85]">
//                 MODERN <br />
//                 <span className="italic font-light opacity-80">Tracking</span>
//               </h1>
//             </div>
//             <div className="max-w-md ml-auto text-right">
//               <p className="text-lg text-white/40 leading-relaxed font-light">
//                 Crafting a smarter way to shop with precision and automation. 
//                 Where timeless savings meets modern craftsmanship.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* The "Purpose" Section: Your Add Product Input */}
//       <section className="py-20 bg-[#0f0f0f] border-y border-white/5">
//         <div className="max-w-[1400px] mx-auto px-8">
//            <div className="flex items-center gap-4 mb-12">
//               <span className="text-xs font-mono opacity-30">01 ———</span>
//               <h2 className="text-sm uppercase tracking-[0.2em] font-semibold">Deploy Tracker</h2>
//            </div>
//            <AddProductForm user={user} />
//         </div>
//       </section>

//       {/* Content Area */}
//       <section className="max-w-[1400px] mx-auto px-8 py-24">
//         {user && products.length > 0 ? (
//           <>
//             <div className="flex items-baseline justify-between mb-16 border-b border-white/10 pb-8">
//               <h3 className="text-4xl font-light tracking-tight">Active <span className="italic">Portfolio</span></h3>
//               <span className="font-mono text-sm opacity-40">{products.length} Units</span>
//             </div>
            
//             <div className="grid gap-1 md:grid-cols-2">
//               {products.map((product) => (
//                 <div key={product.id} className="border border-white/5 p-1 hover:border-indigo-500/50 transition-colors">
//                   <Productcard product={product} />
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           /* Landing/Empty State Grid */
//           <div className="grid md:grid-cols-3 border-t border-white/5">
//             {[
//               { title: "Architectural Design", desc: "Deal drop extracts prices in seconds with precision.", num: "01" },
//               { title: "Concept & Visualization", desc: "Interactive charts for modern market trends.", num: "02" },
//               { title: "Global Planning", desc: "Anti-bot protection ensures your data is reliable.", num: "03" }
//             ].map((f) => (
//               <div key={f.num} className="p-12 border-r border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
//                 <div className="flex justify-between items-start mb-12">
//                   <span className="font-mono text-xs opacity-30">{f.num}</span>
//                   <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </div>
//                 <h4 className="text-xl font-medium mb-4">{f.title}</h4>
//                 <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 px-8">
//         <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">
//           <div className="col-span-2">
//              <span className="text-4xl font-bold tracking-tighter uppercase italic">Pricey</span>
//              <p className="mt-6 text-white/30 max-w-xs text-sm">Minimalist gesture, maximum impact. Built for the modern consumer.</p>
//           </div>
//           <div>
//             <h5 className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-6">Connect</h5>
//             <ul className="text-sm space-y-4 font-light">
//               <li className="hover:text-indigo-400 cursor-pointer">Twitter</li>
//               <li className="hover:text-indigo-400 cursor-pointer">GitHub</li>
//             </ul>
//           </div>
//           <div>
//             <h5 className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-6">Inquiries</h5>
//             <p className="text-sm font-light">hello@trypricey.com</p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }


// import { AuthButton } from "@/components/AuthButton";
// import { AddProductForm } from "@/components/AddProductForm";
// import { Bell, Rabbit, Shield, TrendingDown, ArrowUpRight, Plus } from "lucide-react"
// import { createClient } from "@/utils/supabase/server";
// import { getProducts } from "./actions";
// import Productcard from "@/components/Productcard";

// export default async function Home() {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   const products = user ? await getProducts() : [];

//   return (
//     <main className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-white selection:text-black font-sans">
      
//       {/* 01. NAVIGATION: Ultra-Thin & Wide */}
//       <header className="border-b border-white/10 sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-sm">
//         <div className="max-w-[1600px] mx-auto px-6 h-20 flex justify-between items-center">
//           <div className="flex items-baseline gap-1">
//             <span className="text-xl font-bold tracking-tighter uppercase italic">Pricey</span>
//             <span className="text-[10px] opacity-40 font-mono">v.2.0</span>
//           </div>
          
//           <div className="hidden md:flex items-center gap-16 text-[10px] uppercase tracking-[0.4em] font-light opacity-60">
//             <a href="#" className="hover:opacity-100 transition-all">Archive</a>
//             <a href="#" className="hover:opacity-100 transition-all">Analytics</a>
//             <a href="#" className="hover:opacity-100 transition-all">System</a>
//           </div>

//           <AuthButton user={user} />
//         </div>
//       </header>

//       {/* 02. HERO: The "Modern Architecture" Split */}
//       <section className="relative border-b border-white/10">
//         <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 min-h-[70vh]">
//           {/* Left Text Block */}
//           <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-between border-r border-white/10">
//             <div>
//                <span className="inline-block text-[10px] uppercase tracking-[0.5em] mb-12 opacity-40">
//                   Precision Price Monitoring
//                </span>
//                <h1 className="text-[12vw] lg:text-[10vw] font-bold leading-[0.8] tracking-tighter uppercase italic">
//                   SMART<br />
//                   <span className="not-italic font-light">SAVINGS</span>
//                </h1>
//             </div>
            
//             <div className="mt-12 lg:mt-0 flex gap-12 items-end">
//                <div className="w-px h-24 bg-white/20" />
//                <p className="max-w-xs text-sm leading-relaxed opacity-40 font-light">
//                   Let&apos;s build something bold together. Crafting architecture with precision and elegance in the digital marketplace.
//                </p>
//             </div>
//           </div>

//           {/* Right Image/Visual Block */}
//           <div className="lg:col-span-5 relative bg-[#0a0a0a] flex items-center justify-center overflow-hidden group">
//             <div className="absolute inset-0 opacity-20 grayscale transition-transform duration-700 group-hover:scale-110">
//                {/* This represents the large building image in your reference */}
//                <div className="w-full h-full bg-[url('/p1.jpg')] bg-cover bg-center" />
//             </div>
//             <div className="relative z-10 text-center">
//                <button className="px-8 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-colors">
//                   Read More
//                </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 03. ACTION: The Integrated Input Area */}
//       <section className="bg-white text-black py-24 px-8">
//         <div className="max-w-[1600px] mx-auto">
//           <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
//             <div className="max-w-md">
//               <h2 className="text-4xl font-bold tracking-tighter uppercase italic mb-4">Shaping Spaces</h2>
//               <p className="text-sm opacity-60 leading-relaxed">
//                 We create environments that respond to people, place, and vision—turning links into meaningful, enduring data.
//               </p>
//             </div>
//             <div className="w-full lg:max-w-2xl">
//               <AddProductForm user={user} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 04. PRODUCT GRID: Stark & Minimalist */}
//       <section className="max-w-[1600px] mx-auto px-6 py-24">
//         {user && products.length > 0 ? (
//           <>
//             <div className="flex justify-between items-end mb-12 pb-6 border-b border-white/10">
//               <h3 className="text-sm uppercase tracking-[0.3em] font-medium opacity-40">01 // Architectural Portfolio</h3>
//               <span className="text-[10px] font-mono opacity-20">{products.length} Units Tracked</span>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
//               {products.map((product) => (
//                 <div key={product.id} className="bg-[#050505] p-2 hover:bg-[#0a0a0a] transition-colors">
//                    <Productcard product={product} />
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           /* Feature Breakdown: Mimics the bottom section of your image */
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
//             {[
//               { id: "01", title: "Architectural Design", desc: "Automated extraction with high-fidelity accuracy." },
//               { id: "02", title: "Interior Vision", desc: "Visualizing price trends through modern minimalism." },
//               { id: "03", title: "Global Master Planning", desc: "Reliable tracking across every major e-commerce space." }
//             ].map((feature) => (
//               <div key={feature.id} className="p-12 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-all">
//                 <div className="flex justify-between items-start mb-16">
//                   <span className="text-xs font-mono opacity-20">{feature.id}</span>
//                   <Plus className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
//                 </div>
//                 <h4 className="text-xl font-bold uppercase tracking-tight mb-4">{feature.title}</h4>
//                 <p className="text-xs leading-relaxed opacity-40 max-w-[250px]">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* 05. FOOTER */}
//       <footer className="border-t border-white/10 py-20 px-6">
//         <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-[10px] uppercase tracking-[0.2em] opacity-40 font-medium">
//           <div className="col-span-2 text-white opacity-100 italic font-bold text-2xl tracking-tighter">PRICEY</div>
//           <div>
//             <p className="mb-6 opacity-40">Navigation</p>
//             <ul className="space-y-3 opacity-100">
//               <li>Home</li>
//               <li>Privacy</li>
//               <li>Terms</li>
//             </ul>
//           </div>
//           <div>
//             <p className="mb-6 opacity-40">Contact</p>
//             <ul className="space-y-3 opacity-100">
//               <li>Direct</li>
//               <li>Twitter</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }