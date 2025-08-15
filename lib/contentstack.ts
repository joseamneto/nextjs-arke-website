import Contentstack from "contentstack"

const stack = Contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || "",
  delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN || "",
  environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT || "development",
})


export async function getHeroSection() {
  try {
    const query = stack.ContentType("hero_section").Query();
    const result = await query.toJSON().find();
    if (result && result[0] && result[0][0]) {
      return result[0][0];
    } else {
      return null;
    }
  } catch (error) {
    if (typeof window !== "undefined") {
      // Only log in browser
      console.error("Error fetching hero section:", error);
    }
    return null;
  }
}

export { stack }
