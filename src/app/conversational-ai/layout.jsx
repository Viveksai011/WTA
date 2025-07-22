import { AppHeader } from '@/component/header/appheader';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { Inter } from 'next/font/google';
import { getSiteUrl } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Eleven Labs - Conversational AI Solutions',
  description: 'Enhance communication with AI-powered solutions for smarter customer interactions.',
  metadataBase: new URL(getSiteUrl()),
};

export default function Page({ children }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
