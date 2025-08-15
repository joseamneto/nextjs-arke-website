import Contentstack, { Region } from 'contentstack'

const stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY || '',
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN || '',
  environment: process.env.CONTENTSTACK_ENVIRONMENT || '',
  region:
    (process.env.CONTENTSTACK_REGION as keyof typeof Region) || Region.US,
})

export async function getHeroEntry() {
  const uid = process.env.CONTENTSTACK_HERO_ENTRY_UID
  const contentType = process.env.CONTENTSTACK_HERO_CONTENT_TYPE || 'hero'
  if (!uid) {
    throw new Error('CONTENTSTACK_HERO_ENTRY_UID is not defined')
  }
  const entry = await stack.ContentType(contentType).Entry(uid).fetch()
  return entry.toJSON()
}

export default stack
