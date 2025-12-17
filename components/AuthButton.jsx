// "use client";

// import { useState } from "react";
// import {AuthModal} from "./AuthModal";
// import { Button } from "@/components/ui/button";
// import { LogIn, LogOut } from "lucide-react";

// const AuthButton = ({user}) => {
//     const [showAuthModal, setShowAuthModal] = useState(false);
//     return (
//         <>
//             <Button
//                 onClick={() => setShowAuthModal(true)}
//                 variant="default"
//                 size="sm"
//                 className="bg-orange-500 hover:bg-orange-600 gap-2"
//             >
//                 <LogIn className="w-4 h-4" />
//                 Sign In
//             </Button>

//             <AuthModal
//                 isOpen={showAuthModal}
//                 onClose={() => setShowAuthModal(false)}
//             />
//         </>
//     )
// }

"use client";

import { useState } from "react";
// Assuming AuthModal is a Named Export:
import { AuthModal } from "./AuthModal";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";

// ⚠️ REQUIRED FIX: Using 'export const' for Named Export
export const AuthButton = ({ user }) => {
    const [showAuthModal, setShowAuthModal] = useState(false);

    // Conditional logic for sign in/out display
    if (user) {
        return (
            <form action={() => {}}>
                <Button variant="ghost" size="sm" type="submit" className="gap-2">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </Button>
            </form>
        );
    }

    return (
        <>
            <Button
                onClick={() => setShowAuthModal(true)}
                variant="default"
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 gap-2"
            >
                <LogIn className="w-4 h-4" />
                Sign In
            </Button>

            <AuthModal
                isOpen={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </>
    )
}