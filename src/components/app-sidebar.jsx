import { SidebarTrigger } from '@/components/ui/sidebar';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { TeamSwitcher } from '@/components/team-switcher';
import { sidebarData } from '@/lib/sidebardata';
import { Home, Settings } from 'lucide-react';
import Link from 'next/link';

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r bg-white group font-sans">
      <SidebarHeader className="pt-4 px-4 bg-white group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:pt-2">
        <div className="flex items-center justify-between group-data-[collapsible=icon]:justify-center">
          <h1 className="text-lg font-semibold text-gray-900 group-data-[collapsible=icon]:hidden">
            IIElevenLabs
          </h1>
          <div className="group-data-[collapsible=icon]:mx-0">
            <SidebarTrigger className="-ml-1 group-data-[collapsible=icon]:ml-0" />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 bg-white group-data-[collapsible=icon]:px-0">
        <div className="space-y-1 group-data-[collapsible=icon]:space-y-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
          <div className="group-data-[collapsible=icon]:hidden">
            <TeamSwitcher />
          </div>

          <Link
            href="/conversational-ai"
            className="w-full flex items-center justify-start h-9 px-3 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200
                       group-data-[collapsible=icon]:collapsed-icon-button"
          >
            <Home className="h-4 w-4" />
            <span className="text-sm ml-2 group-data-[collapsible=icon]:hidden">Home</span>
          </Link>

          {sidebarData.sections.map(section => (
            <div key={section.title} className="pt-1 group-data-[collapsible=icon]:pt-0 w-full">
              <div className="px-3 pb-2 group-data-[collapsible=icon]:hidden">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-1 group-data-[collapsible=icon]:space-y-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
                {section.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href || '#'}
                    className="w-full flex items-center justify-between h-9 px-3 text-gray-700 hover:bg-gray-100 rounded-md
                              group-data-[collapsible=icon]:collapsed-icon-button"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm group-data-[collapsible=icon]:hidden">
                        {item.label}
                      </span>
                    </div>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-black rounded-full text-xs px-2 py-0.5 ml-auto group-data-[collapsible=icon]:hidden"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-5 group-data-[collapsible=icon]:mt-0 w-full group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
            <Link
              href="/conversational-ai/settings"
              className="w-full flex gap-2 justify-start items-center rounded-lg mt-5 h-9 px-3 text-gray-700 hover:bg-gray-100 
                         group-data-[collapsible=icon]:collapsed-icon-button"
            >
              <Settings className="h-4 w-4" />
              <span className="text-sm group-data-[collapsible=icon]:hidden">Settings</span>
            </Link>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-3 space-y-3 bg-white group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:space-y-0 group-data-[collapsible=icon]:pb-2 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
        <div className="space-y-2 group-data-[collapsible=icon]:space-y-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:items-center">
          {sidebarData.footer.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`w-full h-9 px-3 text-gray-700 hover:bg-gray-100 rounded-md  flex items-center
                         group-data-[collapsible=icon]:collapsed-icon-button ${
                           item.label === 'Notifications'
                             ? 'justify-start'
                             : 'justify-center border group-data-[collapsible=icon]:border-0'
                         }`}
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                <span className="text-sm  group-data-[collapsible=icon]:hidden">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="group-data-[collapsible=icon]:hidden">
          <NavUser user={sidebarData.user} />
        </div>

        <div className="hidden group-data-[collapsible=icon]:flex justify-center">
          <Link
            href="#"
            className="flex items-center justify-center h-8 w-8 rounded-full text-white text-xs font-medium bg-teal-600 hover:bg-teal-700"
          >
            VG
          </Link>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
