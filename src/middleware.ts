import { NextResponse, type NextRequest } from 'next/server'

/**
 * Les URL de préproduction Vercel ne doivent pas être indexées.
 *
 * Deux projets Vercel déploient ce dépôt, et le domaine final servira le même
 * contenu : sans cela, Google verrait trois copies identiques. Seul
 * odysseebybea.fr reste indexable.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const host = request.headers.get('host') ?? ''
  if (host.endsWith('.vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }
  return response
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
