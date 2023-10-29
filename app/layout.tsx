import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { HeadNav } from './ui/nav/head/head-nav';
import { Logout } from './ui/auth/logout';
import { LoginLink, Version } from './ui/auth/login-link';
import { auth } from '@/auth';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col p-6">
          <div className="flex justify-between items-center h-10 shrink-0 rounded-lg bg-blue-500 text-white p-4 md:h-10">
            <HeadNav />
            {!session ?<LoginLink version={Version.HEADER} /> : <div className='flex justify-end items-center'><div>{session.user?.name}</div><Logout /></div>}
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
