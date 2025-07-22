import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter", 
});

export default function Page({ children }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      {/* Use SidebarProvider for handling sidebar logic */}
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
