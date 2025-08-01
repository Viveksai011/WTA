import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TeamSwitcher } from '@/components/team-switcher';
import { sidebarData } from '@/lib/sidebardata';
import { Home, Settings, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Mobilesidebar({ className }) {
  return (
    <div className={cn('flex h-full w-full flex-col bg-white border-r', className)}>
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg font-semibold text-gray-900">IIElevenLabs</h1>
      </div>

      <div className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">
        <div className="space-y-1">
          <TeamSwitcher />
          <Button
            variant="ghost"
            className="w-full justify-start h-9 px-3 text-gray-700 bg-gray-100"
          >
            <Home className="h-4 w-4" />
            <span className="text-sm">Home</span>
          </Button>

          {sidebarData.sections.map(section => (
            <div key={section.title} className="pt-4">
              <div className="px-3 pb-2">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-1">
                {section.items.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-between h-9 px-3 text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-black rounded-full text-xs px-2 py-0.5"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8">
            <Button
              variant="ghost"
              className="w-full justify-start h-9 px-3 text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-4 w-4" />
              <span className="text-sm">Settings</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="p-3 space-y-3 border-t">
        <div className="space-y-2">
          {sidebarData.footer.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full ${
                item.label === 'Notifications' ? 'justify-start' : 'justify-center border'
              } h-9 px-3 text-gray-700 hover:bg-gray-100`}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
