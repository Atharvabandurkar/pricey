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
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Trash2,
  TrendingDown,
  ChevronDown,
  ChevronUp,
  Loader2,
  History,
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
    <Card className="overflow-hidden border-[#2D3E4E]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-5">
        <div className="flex gap-5">
          {/* Image Container */}
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 border-[#1A2632] bg-white">
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[#2D3E4E]/40">
                No Image
              </div>
            )}
            {discount > 0 && (
              <div className="absolute top-2 left-2 bg-[#1A2632] text-white text-[10px] font-bold px-2 py-1 rounded">
                {discount}% OFF
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="flex flex-1 flex-col min-w-0">
            <h3 className="font-bold text-[#1A2632] text-lg line-clamp-2 leading-tight">
              {product.name}
            </h3>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-3xl font-bold text-[#B87D5B]">
                {formatPrice(product.current_price, product.currency)}
              </span>
              
              <Badge variant="secondary" className="bg-[#E9F0F5] text-[#1A2632] border-none flex gap-1">
                <TrendingDown className="w-3 h-3 text-[#B87D5B]" />
                Tracking
              </Badge>
            </div>
            
            <p className="text-xs text-[#2D3E4E]/60 mt-1 uppercase tracking-wider font-medium">
              Last updated: {new Date(product.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-6 flex items-center justify-between gap-2 border-t border-[#2D3E4E]/5 pt-4">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChart(!showChart)}
              className={`h-10 rounded-lg border-[#1A2632] text-[#1A2632] font-semibold transition-colors ${showChart ? 'bg-[#1A2632] text-white' : 'hover:bg-[#1A2632]/5'}`}
            >
              <History className="w-4 h-4 mr-2" />
              History
              {showChart ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </Button>

            <Button variant="outline" size="sm" asChild className="h-10 rounded-lg border-[#2D3E4E]/20 bg-[#F1F5F8] text-[#1A2632] hover:bg-[#E2E8F0]">
              <Link href={product.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Store
              </Link>
            </Button>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleDelete}
            disabled={deleting}
            className="h-10 w-10 p-0 border-[#E53E3E]/20 text-[#E53E3E] hover:bg-[#E53E3E] hover:text-white rounded-lg transition-all"
          >
            {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Expanded Chart Area */}
      {showChart && (
        <div className="bg-[#F8FAFC] border-t border-[#2D3E4E]/5 p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-2 mb-4 text-sm font-bold text-[#1A2632]">
                <TrendingDown className="w-4 h-4 text-[#B87D5B]" />
                PRICE TRENDS
            </div>
          <PriceChart productId={product.id} />
        </div>
      )}
    </Card>
  );
}