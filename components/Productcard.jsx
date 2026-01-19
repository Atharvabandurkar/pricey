// "use client";

// import { useState } from "react";
// import { deleteProduct } from "@/app/actions";
// import PriceChart from "./PriceChart";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   ExternalLink,
//   Trash2,
//   TrendingDown,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import Link from "next/link";

// // // Create this helper function at the top of your file
// // const formatPrice = (price, currencyCode) => {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: currencyCode, // e.g. "INR"
// //   }).format(price);
// // };
// const formatPrice = (price, currencyCode) => {
//   // If the database has "₹", convert it to "INR" so the browser doesn't crash
//   const validCode = (currencyCode === "₹" || !currencyCode) ? "INR" : currencyCode;
  
//   try {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: validCode,
//     }).format(price);
//   } catch (e) {
//     // Fallback if something else goes wrong
//     return `₹${price}`;
//   }
// };

// export default function ProductCard({ product }) {
//   const [showChart, setShowChart] = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   const handleDelete = async () => {
//     if (!confirm("Remove this product from tracking?")) return;

//     setDeleting(true);
//     await deleteProduct(product.id);
//   };

//   return (
//     <Card className="hover:shadow-lg transition-shadow">
//       <CardHeader className="pb-3">
//         <div className="flex gap-4">
//           {product.image_url && (
//             // eslint-disable-next-line @next/next/no-img-element
//             <img
//               src={product.image_url}
//               alt={product.name}
//               className="w-20 h-20 object-cover rounded-md border"
//             />
//           )}

//           <div className="flex-1 min-w-0">
//             <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
//               {product.name}
//             </h3>

//             <div className="flex items-baseline gap-2">
//               <span className="text-3xl font-bold text-orange-500">
//                 {formatPrice(product.current_price, product.currency)}
//               </span>
//               <Badge variant="secondary" className="gap-1">
//                 <TrendingDown className="w-3 h-3" />
//                 Tracking
//               </Badge>
//             </div>
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent>
//         <div className="flex flex-wrap gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setShowChart(!showChart)}
//             className="gap-1"
//           >
//             {showChart ? (
//               <>
//                 <ChevronUp className="w-4 h-4" />
//                 Hide Chart
//               </>
//             ) : (
//               <>
//                 <ChevronDown className="w-4 h-4" />
//                 Show Chart
//               </>
//             )}
//           </Button>

//           <Button variant="outline" size="sm" asChild className="gap-1">
//             <Link href={product.url} target="_blank" rel="noopener noreferrer">
//               <ExternalLink className="w-4 h-4" />
//               View Product
//             </Link>
//           </Button>

//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={handleDelete}
//             disabled={deleting}
//             className="text-red-600 hover:text-red-700 hover:bg-red-50 gap-1"
//           >
//             <Trash2 className="w-4 h-4" />
//             Remove
//           </Button>
//         </div>
//       </CardContent>

//       {showChart && (
//         <CardFooter className="pt-0">
//           <PriceChart productId={product.id} />
//         </CardFooter>
//       )}
//     </Card>
//   );
// }


"use client";

import { useState } from "react";
import { deleteProduct } from "@/app/actions";
import PriceChart from "./PriceChart";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Trash2,
  TrendingDown,
  ChevronDown,
  ChevronUp,
  Loader2,
  ArrowDownCircle,
} from "lucide-react";
import Link from "next/link";

const formatPrice = (price, currencyCode) => {
  const validCode = (currencyCode === "₹" || !currencyCode) ? "INR" : currencyCode;
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: validCode,
      maximumFractionDigits: 0,
    }).format(price);
  } catch (e) {
    return `₹${price}`;
  }
};

export default function ProductCard({ product }) {
  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Calculate discount percentage if original_price exists
  const discount = product.original_price 
    ? Math.round(((product.original_price - product.current_price) / product.original_price) * 100)
    : null;

  const handleDelete = async () => {
    if (!confirm("Remove this product from tracking?")) return;
    setDeleting(true);
    try {
        await deleteProduct(product.id);
    } catch (err) {
        setDeleting(false);
    }
  };

  return (
    <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:border-indigo-500/30 group">
      <div className="p-5">
        <div className="flex gap-5">
          {/* Image Container with Hover Effect */}
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 dark:bg-zinc-900">
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-zinc-400">
                No Image
              </div>
            )}
            {discount > 0 && (
              <div className="absolute top-0 left-0 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg">
                {discount}% OFF
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="flex flex-1 flex-col min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                {formatPrice(product.current_price, product.currency)}
              </span>
              
              {/* Status Badge */}
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1 py-0.5">
                <TrendingDown className="w-3 h-3" />
                Live
              </Badge>
            </div>
            
            <p className="text-xs text-zinc-500 mt-1">
              Last updated: {new Date(product.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-100 dark:border-zinc-800 pt-4">
          <div className="flex gap-2">
            <Button
              variant={showChart ? "secondary" : "outline"}
              size="sm"
              onClick={() => setShowChart(!showChart)}
              className="h-9 rounded-lg"
            >
              {showChart ? <ChevronUp className="w-4 h-4 mr-1" /> : <ChevronDown className="w-4 h-4 mr-1" />}
              History
            </Button>

            <Button variant="outline" size="sm" asChild className="h-9 rounded-lg shadow-sm">
              <Link href={product.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" />
                Store
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={deleting}
            className="h-9 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Expanded Chart Area */}
      {showChart && (
        <div className="bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800 p-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 mb-4 text-sm font-medium text-zinc-600">
                <ArrowDownCircle className="w-4 h-4 text-indigo-500" />
                Price Trends
            </div>
          <PriceChart productId={product.id} />
        </div>
      )}
    </Card>
  );
}