import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="text-center h-48 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className='mt-2'>Could not find requested resource</p>
      <Link href="/" className="mt-4 text-prime-red hover:text-prime-light-blue" >Return Home</Link>
    </div>
  )
}