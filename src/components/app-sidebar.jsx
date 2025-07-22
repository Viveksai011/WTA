import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TeamSwitcher } from "@/components/team-switcher";
import { sidebarData } from "@/lib/sidebardata";
import { Home, Settings } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r bg-white ">
      <SidebarHeader className="pt-4 px-4 bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">IIElevenLabs</h1>
          <div>
            <SidebarTrigger className="-ml-1" />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 bg-white">
        <div className="space-y-1">
          <TeamSwitcher />
          <Button
            variant="ghost"
            className="w-full justify-start h-9 px-3 text-gray-700  bg-gray-100"
          >
            <Home className="h-4 w-4" />
            <span className="text-sm">Home</span>
          </Button>

          {sidebarData.sections.map((section) => (
            <div key={section.title} className="pt-1">
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

          <div className="mt-5">
            <Button
              variant="ghost"
              className="w-full justify-start mt-5 h-9 px-3 text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-4 w-4" />
              <span className="text-sm">Settings</span>
            </Button>
          </div>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-3 space-y-3 bg-white">
        <div className="space-y-2">
          {sidebarData.footer.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full ${
                item.label === "Notifications"
                  ? "justify-start"
                  : "justify-center border"
              } h-9 px-3 text-gray-700 hover:bg-gray-100 `}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
            </Button>
          ))}
        </div>

        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
