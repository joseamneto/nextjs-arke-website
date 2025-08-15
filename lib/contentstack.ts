import Contentstack from "contentstack"

const stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY || "",
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || "",
  environment: process.env.CONTENTSTACK_ENVIRONMENT || "",
})

export async function getHeroEntry() {
  const entry = await stack.ContentType("hero").Entry("blt8703835e0e1136db").fetch()
  return entry.toJSON()
}

export { stack }
