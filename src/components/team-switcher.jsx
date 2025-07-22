"use client"

import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useState } from "react";
import { ConversationAILogo } from "@/icons/conversation-ailogo";
import { CreativePlatformLogo } from "@/icons/creative-platformlogo";


export function TeamSwitcher() {
    const teams = [
      {
        name: "Conversational AI",
        plan: "Creative Platform",
        logo: <ConversationAILogo height="20px" width="20px" />
      },
      {
        name: "Creative Platform",
        plan: "Create AI audio",
        logo: <CreativePlatformLogo height="20px" width="20px"  />
      }
    ]
  const [activeTeam, setActiveTeam] = useState(teams[0]);


  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="mt-1">
            <Button variant="outline" className="w-full justify-between h-9 px-1 text-gray-700 hover:bg-gray-100">
              <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                {activeTeam.logo} 
              </div>
                <span className="truncate font-semibold">
                  {activeTeam.name}
                </span>
                
              <ChevronsUpDown className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 w-full rounded-lg"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-full border bg-black ">
                  {team.logo} {/* Corrected here */}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {team.name}
                </span>
                <span className="truncate text-xs">{team.plan}</span>
              </div>
               
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
