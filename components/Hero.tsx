import { getHeroEntry } from '@/lib/contentstack'

const fallback = {
  title: 'Elevate your expectations.',
  subtitle:
    'Transform your business with innovative solutions that exceed industry standards and deliver exceptional results.',
  cta_button_text: 'Discover Our Services',
}

export default async function Hero() {
  let content = fallback
  try {
    const entry = await getHeroEntry()
    content = {
      title: entry.title || fallback.title,
      subtitle: entry.subtitle || fallback.subtitle,
      cta_button_text: entry.cta_button_text || fallback.cta_button_text,
    }
  } catch (err) {
    console.warn('Using fallback hero content', err)
  }

  return (
    <section className="py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold">{content.title}</h1>
      <p className="mb-8 text-lg text-gray-600">{content.subtitle}</p>
      <button className="rounded bg-blue-600 px-6 py-3 font-medium text-white">
        {content.cta_button_text}
      </button>
    </section>
  )
}
