// "use client"

// import React, { useState } from 'react'
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import { Loader2 } from 'lucide-react';
// import { AuthModal } from './AuthModal';
// import { addProduct } from '@/app/actions';
// import { toast } from 'sonner';

// // 1. Keep the Named Export
// export const AddProductForm = ({ user }) => {
//     const [url, setUrl] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [showAuthModal, setShowAuthModal] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!user) {
//             setShowAuthModal(true);
//             return;
//         }

//         setLoading(true);

//         setLoading(true);

//         const formData = new FormData();
//         formData.append("url", url);

//         const result = await addProduct(formData);
//         if (result.error) {
//             toast.error(result.error);
//         } else {
//             toast.success(result.message || "Product tracked successfully!");
//             setUrl("");
//         }

//         setLoading(false);
//     };

//     // // 2. This logic is correct: It returns null (nothing to render) if the user is not logged in.
//     // if (!user) {
//     //     return null; 
//     // }

//     return (
//         <>
//             <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4">
//                 <div className="flex flex-col sm:flex-row gap-2">
//                     <Input
//                         type="url"
//                         value={url}
//                         onChange={(e) => setUrl(e.target.value)}
//                         placeholder="Paste product URL (Amazon, Walmart, etc.)"
//                         className="h-12 text-base"
//                         required
//                         disabled={loading}
//                     />

//                     <Button
//                         type="submit"
//                         disabled={loading || !url}
//                         className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8"
//                         size="lg"
//                     >
//                         {loading ? (
//                             <>
//                                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                                 Adding...
//                             </>
//                         ) : (
//                             "Track Price"
//                         )}
//                     </Button>
//                 </div>
//             </form>

//             {/* auth modal */}
//             <AuthModal
//                 isOpen={showAuthModal}
//                 onClose={() => setShowAuthModal(false)}
//             />
//         </>
//     )


// }

// // ❌ REMOVE THIS LINE: It causes conflict with 'export const' at the top.
// // export default AddProductForm


"use client"

import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2, Link as LinkIcon, Sparkles } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { addProduct } from '@/app/actions';
import { toast } from 'sonner';

export const AddProductForm = ({ user }) => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setShowAuthModal(true);
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("url", url);

        try {
            const result = await addProduct(formData);
            if (result?.error) {
                toast.error(result.error);
            } else {
                toast.success(result?.message || "Product tracked successfully!");
                setUrl("");
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8">
            <form 
                onSubmit={handleSubmit} 
                className="group relative bg-white dark:bg-zinc-950 p-2 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-500/20"
            >
                <div className="flex flex-col sm:flex-row items-center gap-2">
                    <div className="relative w-full flex-1">
                        {/* Decorative Icon */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-orange-500 transition-colors">
                            <LinkIcon size={18} />
                        </div>
                        
                        <Input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Paste product link here..."
                            className="h-14 pl-11 pr-4 bg-transparent border-none text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                            required
                            disabled={loading}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading || !url}
                        className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 sm:h-12 px-8 rounded-xl transition-all active:scale-95 shadow-lg shadow-orange-500/20"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                            <span className="flex items-center gap-2">
                                <Sparkles size={18} />
                                Track Price
                            </span>
                        )}
                    </Button>
                </div>
            </form>
            
            {/* Helper Hint */}
            <p className="mt-3 text-center text-sm text-zinc-500">
                Supports Amazon, Walmart, eBay, and more.
            </p>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </div>
    )
}