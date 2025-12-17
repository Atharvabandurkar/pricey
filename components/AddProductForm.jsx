"use client"

import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { AuthModal } from './AuthModal';

// 1. Keep the Named Export
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
        // Your API call logic will go here
        try {
            console.log("Tracking URL:", url);
        } catch (error) {
            console.error("Failed to track price:", error);
        } finally {
            setLoading(false);
            setUrl(""); 
        }
    };

    // // 2. This logic is correct: It returns null (nothing to render) if the user is not logged in.
    // if (!user) {
    //     return null; 
    // }

    return (
      <>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-2">
                <Input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste product URL (Amazon, Walmart, etc.)"
                    className="h-12 text-base"
                    required
                    disabled={loading}
                />

                <Button
                    type="submit"
                    disabled={loading || !url} 
                    className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8"
                    size="lg"
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Adding...
                        </>
                    ) : (
                        "Track Price"
                    )}
                </Button>
            </div>
        </form>

        {/* auth modal */}
        <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
         </>
    )
   

}

// ❌ REMOVE THIS LINE: It causes conflict with 'export const' at the top.
// export default AddProductForm