import {  Users, BookOpen, Wrench, UsersRound, Clock, Puzzle, Phone, PhoneCall, Bell } from "lucide-react";
import { Updateicon} from "@/icons/updateicon";

export const sidebarData = {
  user: {
    name: "VIP RUSH GAMERS",
    email: "My Workspace",
  },
  sections: [
    {
      title: "Build",
      items: [
        { icon: Users, label: "Agents" },
        { icon: BookOpen, label: "Knowledge Base" },
        { icon: Wrench, label: "Tools", badge: "New" },
        { icon: UsersRound, label: "Voices" },
      ],
    },
    {
      title: "Evaluate",
      items: [
        { icon: Clock, label: "Conversations" },
      ],
    },
    {
      title: "Integrations",
      items: [
        { icon: Puzzle, label: "Integrations" },
      ],
    },
    {
      title: "Telephony",
      items: [
        { icon: Phone, label: "Phone Numbers" },
        { icon: PhoneCall, label: "Outbound" },
      ],
    },
  ],
  footer: [
    { icon: Bell, label: "Notifications" },
    { icon: Updateicon, label: "Upgrade", isButton: true },
  ],
};
