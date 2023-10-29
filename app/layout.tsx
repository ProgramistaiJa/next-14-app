import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col p-6">
          <div className="flex justify-between items-center h-10 shrink-0 rounded-lg bg-blue-500 p-4 md:h-10">
            <nav className='text-white'><Link href={'/'}>Home</Link> | <Link href={'/dashboard'}>Dashboard</Link> | <Link href={'/blog'}>Blog</Link></nav>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
