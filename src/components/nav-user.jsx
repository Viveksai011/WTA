import { ChevronDown, ChevronRight } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function NavUser({ user }) {
  const menuItems = [
    { label: 'Settings' },
    { label: 'API Keys' },
    { label: 'Webhooks' },
    { label: 'Subscription' },
    { label: 'Pronunciation dictionaries' },
    { label: 'Theme', icon: ChevronRight },
    { label: 'Payouts' },
    { label: 'Become an affiliate' },
    { label: 'Usage analytics' },
    {
      label: 'Docs and resources',
      icon: ChevronRight,
    },
    {
      label: 'Terms and privacy',
      icon: ChevronRight,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between h-12 px-3 hover:bg-gray-100 focus:outline-none border-none"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 rounded-full bg-teal-600">
              <AvatarImage src={user.avatar || '/placeholder.svg'} alt={user.name} />
              <AvatarFallback className="rounded-full bg-teal-600 text-white text-sm">
                VR
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-medium text-gray-900">{user.name}</span>
              <span className="text-xs text-gray-500">{user.email}</span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 p-1 rounded-lg border"
        side="right"
        align="end"
        sideOffset={15}
        alignOffset={-5}
      >
        <div className="px-2 py-2 mb-1 border shadow-md rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Credits</span>
            <Button size="sm" className="h-6 px-2 text-xs bg-black text-white hover:bg-gray-800">
              Upgrade
            </Button>
          </div>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Total</span>
              <span>10,000</span>
            </div>
            <div className="flex justify-between">
              <span>Remaining</span>
              <span>9,829</span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {menuItems.map((item, index) => (
            <div key={index}>
              <DropdownMenuItem className="flex items-center justify-between">
                <span>{item.label}</span>
                {item.icon && <item.icon className="h-4 w-4 text-gray-500" />}
              </DropdownMenuItem>
              {(item.label === 'Theme' || item.label === 'Usage analytics') && (
                <DropdownMenuSeparator />
              )}
            </div>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600 focus:text-red-600">Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
