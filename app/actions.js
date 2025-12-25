// // "use server";

// // import { createClient } from "@/utils/supabase/server";
// // import { revalidatePath } from "next/cache";
// // import { redirect } from "next/navigation";

// // export async function signOut() {
// //   const supabase = await createClient();

// //   await supabase.auth.signOut();

// //   revalidatePath("/");
// //   redirect("/");
// // }

// "use server";

// import { createClient } from "@/utils/supabase/server";
// import { scrapeProduct } from "@/lib/firecrawl";
// import { revalidatePath } from "next/cache";

// export async function addProduct(formData) {
//   const url = formData.get("url");

//   if (!url) {
//     return { error: "URL is required" };
//   }

//   try {
//     const supabase = await createClient();
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     if (!user) {
//       return { error: "Not authenticated" };
//     }

//     // Scrape product data
//     const productData = await scrapeProduct(url);

//     if (!productData.productName || !productData.currentPrice) {
//       return { error: "Could not extract product information from this URL" };
//     }

//     const newPrice = parseFloat(productData.currentPrice);
//     const currency = productData.currencyCode || "USD";

//     // Check if product already exists
//     const { data: existingProduct } = await supabase
//       .from("product") // ✅ FIXED
//       .select("id, current_price")
//       .eq("user_id", user.id)
//       .eq("url", url)
//       .single();

//     const isUpdate = !!existingProduct;

//     // Upsert product
//     const { data: product, error } = await supabase
//       .from("product") // ✅ FIXED
//       .upsert(
//         {
//           user_id: user.id,
//           url,
//           name: productData.productName,
//           current_price: newPrice,
//           currency,
//           image_url: productData.productImageUrl,
//           updated_at: new Date().toISOString(),
//         },
//         {
//           onConflict: "user_id,url",
//           ignoreDuplicates: false,
//         }
//       )
//       .select()
//       .single();

//     if (error) throw error;

//     // Insert price history if new product or price changed
//     const shouldAddHistory =
//       !isUpdate || existingProduct.current_price !== newPrice;

//     if (shouldAddHistory) {
//       await supabase.from("price_history").insert({
//         product_id: product.id,
//         price: newPrice,
//         currency,
//       });
//     }

//     revalidatePath("/");

//     return {
//       success: true,
//       product,
//       message: isUpdate
//         ? "Product updated with latest price!"
//         : "Product added successfully!",
//     };
//   } catch (error) {
//     console.error("Add product error:", error);
//     return { error: error.message || "Failed to add product" };
//   }
// }

// export async function deleteProduct(productId) {
//   try {
//     const supabase = await createClient();
//     const { error } = await supabase
//       .from("product")
//       .delete()
//       .eq("id", productId);

//     if (error) throw error;

//     revalidatePath("/");
//     return { success: true };
//   } catch (error) {
//     return { error: error.message };
//   }
// }

// export async function getProducts() {
//   try {
//     const supabase = await createClient();
//     const { data, error } = await supabase
//       .from("product")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) throw error;
//     return data || [];
//   } catch (error) {
//     console.error("Get products error:", error);
//     return [];
//   }
// }

// export async function getPriceHistory(productId) {
//   try {
//     const supabase = await createClient();
//     const { data, error } = await supabase
//       .from("price_history")
//       .select("*")
//       .eq("product_id", productId)
//       .order("checked_at", { ascending: true });

//     if (error) throw error;
//     return data || [];
//   } catch (error) {
//     console.error("Get price history error:", error);
//     return [];
//   }
// }


// "use server";

// import { createClient } from "@/utils/supabase/server";
// import { scrapeProduct } from "@/lib/firecrawl";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation"; // 👈 Make sure this is imported

// // --- AUTH ACTIONS ---

// export async function signOut() {
//   const supabase = await createClient();
//   await supabase.auth.signOut();

//   revalidatePath("/");
//   redirect("/");
// }

// // --- PRODUCT ACTIONS ---

// export async function addProduct(formData) {
//   const url = formData.get("url");

//   if (!url) {
//     return { error: "URL is required" };
//   }

//   try {
//     const supabase = await createClient();
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     if (!user) {
//       return { error: "Not authenticated" };
//     }

//     // Scrape product data
//     const productData = await scrapeProduct(url);

//     if (!productData.productName || !productData.currentPrice) {
//       return { error: "Could not extract product information from this URL" };
//     }

//     const newPrice = parseFloat(productData.currentPrice);
//     const currency = productData.currencyCode || "USD";

//     // Check if product already exists
//     const { data: existingProduct } = await supabase
//       .from("product")
//       .select("id, current_price")
//       .eq("user_id", user.id)
//       .eq("url", url)
//       .single();

//     const isUpdate = !!existingProduct;

//     // Upsert product
//     const { data: product, error } = await supabase
//       .from("product")
//       .upsert(
//         {
//           user_id: user.id,
//           url,
//           name: productData.productName,
//           current_price: newPrice,
//           currency,
//           image_url: productData.productImageUrl,
//           updated_at: new Date().toISOString(),
//         },
//         {
//           onConflict: "user_id,url",
//           ignoreDuplicates: false,
//         }
//       )
//       .select()
//       .single();

//     if (error) throw error;

//     // Insert price history if new product or price changed
//     const shouldAddHistory =
//       !isUpdate || existingProduct.current_price !== newPrice;

//     if (shouldAddHistory) {
//       await supabase.from("price_history").insert({
//         product_id: product.id,
//         price: newPrice,
//         currency,
//       });
//     }

//     revalidatePath("/");

//     return {
//       success: true,
//       product,
//       message: isUpdate
//         ? "Product updated with latest price!"
//         : "Product added successfully!",
//     };
//   } catch (error) {
//     console.error("Add product error:", error);
//     return { error: error.message || "Failed to add product" };
//   }
// }

// export async function deleteProduct(productId) {
//   try {
//     const supabase = await createClient();
//     const { error } = await supabase
//       .from("product")
//       .delete()
//       .eq("id", productId);

//     if (error) throw error;

//     revalidatePath("/");
//     return { success: true };
//   } catch (error) {
//     return { error: error.message };
//   }
// }

// export async function getProducts() {
//   try {
//     const supabase = await createClient();
//     const { data, error } = await supabase
//       .from("product")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) throw error;
//     return data || [];
//   } catch (error) {
//     console.error("Get products error:", error);
//     return [];
//   }
// }

// export async function getPriceHistory(productId) {
//   try {
//     const supabase = await createClient();
//     const { data, error } = await supabase
//       .from("price_history")
//       .select("*")
//       .eq("product_id", productId)
//       .order("checked_at", { ascending: true });

//     if (error) throw error;
//     return data || [];
//   } catch (error) {
//     console.error("Get price history error:", error);
//     return [];
//   }
// }


"use server";

import { createClient } from "@/utils/supabase/server";
import { scrapeProduct } from "@/lib/firecrawl";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// --- AUTH ACTIONS ---

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  revalidatePath("/");
  redirect("/");
}

// --- PRODUCT ACTIONS ---

export async function addProduct(formData) {
  const url = formData.get("url");

  if (!url) {
    return { error: "URL is required" };
  }

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { error: "Not authenticated" };
    }

    // Scrape product data
    const productData = await scrapeProduct(url);

    if (!productData.productName || !productData.currentPrice) {
      return { error: "Could not extract product information from this URL" };
    }

    const newPrice = parseFloat(productData.currentPrice);

    // 1. Get the raw currency from scraper
    let currency = productData.currencyCode || "INR";

    // 2. Normalize: Convert symbols or common abbreviations to standard codes
    if (currency === "₹" || currency === "Rs" || currency === "Rs.") {
      currency = "INR";
    } else if (currency === "$") {
      currency = "USD";
    }

    // 3. Check if product already exists
    const { data: existingProduct } = await supabase
      .from("product")
      .select("id, current_price")
      .eq("user_id", user.id)
      .eq("url", url)
      .single();

    const isUpdate = !!existingProduct;

    // Upsert product
    const { data: product, error } = await supabase
      .from("product")
      .upsert(
        {
          user_id: user.id,
          url,
          name: productData.productName,
          current_price: newPrice,
          currency,
          image_url: productData.productImageUrl,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,url",
          ignoreDuplicates: false,
        }
      )
      .select()
      .single();

    if (error) throw error;

    // Insert price history if new product or price changed
    const shouldAddHistory =
      !isUpdate || existingProduct.current_price !== newPrice;

    if (shouldAddHistory) {
      await supabase.from("price_history").insert({
        product_id: product.id,
        price: newPrice,
        currency,
      });
    }

    revalidatePath("/");

    return {
      success: true,
      product,
      message: isUpdate
        ? "Product updated with latest price!"
        : "Product added successfully!",
    };
  } catch (error) {
    console.error("Add product error:", error);
    return { error: error.message || "Failed to add product" };
  }
}

export async function deleteProduct(productId) {
  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("product")
      .delete()
      .eq("id", productId);

    if (error) throw error;

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}

export async function getProducts() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("product")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Get products error:", error);
    return [];
  }
}

export async function getPriceHistory(productId) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("price_history")
      .select("*")
      .eq("product_id", productId)
      .order("checked_at", { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Get price history error:", error);
    return [];
  }
}
