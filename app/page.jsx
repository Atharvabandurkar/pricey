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