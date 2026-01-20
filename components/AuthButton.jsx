// "use client";

// import { useState } from "react";
// // Assuming AuthModal is a Named Export:
// import { AuthModal } from "./AuthModal";
// import { Button } from "@/components/ui/button";
// import { LogIn, LogOut } from "lucide-react";
// import { signOut } from "@/app/actions";

// // ⚠️ REQUIRED FIX: Using 'export const' for Named Export
// export const AuthButton = ({ user }) => {
//     const [showAuthModal, setShowAuthModal] = useState(false);

//     // Conditional logic for sign in/out display
//     if (user) {
//         return (
//             <form action={signOut}>
//                 <Button variant="ghost" size="sm" type="submit" className="gap-2">
//                     <LogOut className="w-4 h-4" />
//                     Sign Out
//                 </Button>
//             </form>
//         );
//     }

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

// "use client";

// import { useState } from "react";
// import { AuthModal } from "./AuthModal";
// import { Button } from "@/components/ui/button";
// import { LogIn, LogOut } from "lucide-react";
// import { signOut } from "@/app/actions";

// export const AuthButton = ({ user }) => {
//   const [showAuthModal, setShowAuthModal] = useState(false);

//   if (user) {
//     return (
//       <form action={signOut}>
//         <Button 
//           variant="ghost" 
//           size="sm" 
//           type="submit" 
//           className="gap-2 text-gray-600 hover:text-red-600 hover:bg-red-50"
//         >
//           <LogOut className="w-4 h-4" />
//           Sign Out
//         </Button>
//       </form>
//     );
//   }

//   return (
//     <>
//       <Button
//         onClick={() => setShowAuthModal(true)}
//         variant="default"
//         size="sm"
//         className="bg-orange-500 hover:bg-orange-600 gap-2"
//       >
//         <LogIn className="w-4 h-4" />
//         Sign In
//       </Button>

//       <AuthModal
//         isOpen={showAuthModal}
//         onClose={() => setShowAuthModal(false)}
//       />
//     </>
//   );
// };

"use client";

import { useState } from "react";
import { AuthModal } from "./AuthModal";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User } from "lucide-react"; // Added User icon for a cleaner profile feel
import { signOut } from "@/app/actions";

export const AuthButton = ({ user }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (user) {
    return (
      <form action={signOut} className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          type="submit" 
          className="group relative flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-red-600 rounded-full"
        >
          {/* User Avatar Placeholder or Icon */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 group-hover:bg-red-100 transition-colors">
            <User className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline">Sign Out</span>
          <LogOut className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
        </Button>
      </form>
    );
  }

  return (
    <>
      <Button
        onClick={() => setShowAuthModal(true)}
        variant="ghost" // Changed to ghost for a cleaner, modern look
        size="sm"
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-full transition-all active:scale-95"
      >
        <LogIn className="w-4 h-4 text-orange-500" />
        <span>Sign In</span>
      </Button>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};