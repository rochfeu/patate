import Link from 'next/link'

export default function Success() {
  return <div>
    Form submitted.
    <Link href='/'>
      <a>Go home</a>
    </Link>
  </div>
}
