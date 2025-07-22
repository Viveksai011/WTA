import { Bell, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Mobilesidebar } from '@/components/mobilesidebar';

export function AppHeader() {
  const menuItems = [
    { label: 'Settings', icon: <User className="mr-2 h-4 w-4" /> },
    { label: 'API Keys' },
    { label: 'Webhooks' },
    { label: 'Subscription' },
    { label: 'Pronunciation dictionaries' },
    { label: 'Payouts' },
    { label: 'Become an affiliate' },
    { label: 'Usage analytics' },
  ];

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:hidden">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-60 p-0">
            <Mobilesidebar />
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold text-gray-900">Conversational AI</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          className="h-9 w-9 !bg-transparent border rounded-xl"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-black" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-9 w-9 rounded-full bg-teal-600"
              aria-label="User menu"
            >
              <div className="flex aspect-square size-6 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                VR
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            {menuItems.map((item, index) => (
              <DropdownMenuItem key={index}>
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
