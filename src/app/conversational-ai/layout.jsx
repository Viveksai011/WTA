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
  title: 'PureCode AI - Generate UI Using AI',
  description: 'Speed up your development by 50% - Use your codebase as context.',
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
