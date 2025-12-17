// import FirecrawlApp from "@mendable/firecrawl-js";

// const firecrawl = new FirecrawlApp({
//   apiKey: process.env.FIRECRAWL_API_KEY,
// });

// export async function scrapeProduct(url) {
//   try {
//     const result = await firecrawl.scrapeUrl(url, {
//       formats: ["extract"],
//       extract: {
//         prompt:
//           "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
//         schema: {
//           type: "object",
//           properties: {
//             productName: { type: "string" },
//             currentPrice: { type: "number" },
//             currencyCode: { type: "string" },
//             productImageUrl: { type: "string" },
//           },
//           required: ["productName", "currentPrice"],
//         },
//       },
//     });

//     // Firecrawl returns data in result.extract
//     const extractedData = result.extract;

//     if (!extractedData || !extractedData.productName) {
//       throw new Error("No data extracted from URL");
//     }

//     return extractedData;
//   } catch (error) {
//     console.error("Firecrawl scrape error:", error);
//     throw new Error(`Failed to scrape product: ${error.message}`);
//   }
// }

// import FirecrawlApp from "@mendable/firecrawl-js";

// const firecrawl = new FirecrawlApp({
//   apiKey: process.env.FIRECRAWL_API_KEY,
// });

// export async function scrapeProduct(url) {
//   try {
//     // 1. Changed .scrapeUrl to .scrape
//     const result = await firecrawl.scrape(url, {
//       formats: ["extract"],
//       extract: {
//         prompt:
//           "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
//         schema: {
//           type: "object",
//           properties: {
//             productName: { type: "string" },
//             currentPrice: { type: "number" },
//             currencyCode: { type: "string" },
//             productImageUrl: { type: "string" },
//           },
//           required: ["productName", "currentPrice"],
//         },
//       },
//     });

//     // 2. Check for success property first
//     if (!result.success) {
//       throw new Error(result.error || "Failed to scrape");
//     }

//     // 3. Access extracted data via result.data.extract
//     const extractedData = result.data.extract;

//     if (!extractedData || !extractedData.productName) {
//       throw new Error("No data extracted from URL");
//     }

//     return extractedData;
//   } catch (error) {
//     console.error("Firecrawl scrape error:", error);
//     throw new Error(`Failed to scrape product: ${error.message}`);
//   }
// }

// import FirecrawlApp from "@mendable/firecrawl-js";

// const firecrawl = new FirecrawlApp({
//   apiKey: process.env.FIRECRAWL_API_KEY,
// });

// export async function scrapeProduct(url) {
//   try {
//     // const result = await firecrawl.scrape(url, {
//     //   // FIX: 'formats' now takes an object for 'json' extraction
//     //   formats: [
//     //     {
//     //       type: "json",
//     //       prompt: "Extract the product name, current price as a number, currency code, and product image URL.",
//     //       schema: {
//     //         type: "object",
//     //         properties: {
//     //           productName: { type: "string" },
//     //           currentPrice: { type: "number" },
//     //           currencyCode: { type: "string" },
//     //           productImageUrl: { type: "string" },
//     //         },
//     //         required: ["productName", "currentPrice"],
//     //       },
//     //     }
//     //   ],
//     // });
// const result = await firecrawl.scrape(url, {
//       formats: [
//         {
//           type: "json",
//           prompt: "Extract product name, price as number, currency, and image URL.",
//           schema: {
//             type: "object",
//             properties: {
//               productName: { type: "string" },
//               currentPrice: { type: "number" },
//               currencyCode: { type: "string" },
//               productImageUrl: { type: "string" },
//             },
//             required: ["productName", "currentPrice"],
//           },
//         }
//       ],
//     });

//     // 🚨 ADD THIS LOG TO SEE THE TRUE ERROR IN YOUR TERMINAL
//     if (!result.success) {
//       console.error("DETAILED FIRECRAWL ERROR:", result); // This shows code like SCRAPE_SITE_ERROR
//       throw new Error(result.error || "Failed to scrape");
//     }
//     if (!result.success) {
//       throw new Error(result.error || "Failed to scrape");
//     }

//     // Access the data via result.data.json
//     const extractedData = result.data.json;

//     if (!extractedData || !extractedData.productName) {
//       throw new Error("No data extracted from URL");
//     }

//     return extractedData;
//   } catch (error) {
//     console.error("Firecrawl scrape error:", error);
//     throw new Error(`Failed to scrape product: ${error.message}`);
//   }
// }


import FirecrawlApp from "@mendable/firecrawl-js";

const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function scrapeProduct(url) {
  try {
    const result = await firecrawl.scrape(url, {
      formats: [
        {
          type: "json",
          prompt: "Extract product name, price as number, currency, and image URL.",
          schema: {
            type: "object",
            properties: {
              productName: { type: "string" },
              currentPrice: { type: "number" },
              currencyCode: { type: "string" },
              productImageUrl: { type: "string" },
            },
            required: ["productName", "currentPrice"],
          },
        }
      ],
    });

    // CHANGE: Check if result exists and if it has the 'json' data we need
    const extractedData = result.json || result.data?.json;

    if (!extractedData || !extractedData.productName) {
        // If we get here, log the whole result to see why it's empty
        console.error("EXTRACT FAILED. FULL RESULT:", result);
        throw new Error("No data extracted from URL");
    }

    console.log("SUCCESSFULLY SCRAPED:", extractedData.productName);
    return extractedData;

  } catch (error) {
    console.error("Firecrawl scrape error:", error);
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}