import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { DialogDemo } from '@/components/settingmodal';
import Emptysection from '@/component/emptysection';
import Conversationalcard from '@/component/conversationalcard';
import { Input } from '@/components/ui/input';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
});

const Conversationalmain = () => {
  return (
    <div className={`${inter.variable} md:pt-20 mx-auto overflow-auto max-w-[1080px] w-full`}>
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center gap-2 border border-gray-200 py-2 px-4 rounded-full">
          <div className="w-2 h-2 bg-black rounded-full" aria-hidden="true"></div>
          <span className="text-sm text-semibold">
            Active calls: <span className="font-bold">0</span>
          </span>
        </div>
        <DialogDemo />
      </div>

      <div className="bg-white min-h-screen">
        <div className="mb-2 flex justify-between flex-wrap px-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">My Workspace</p>
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">Good afternoon, Jack</h1>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Select defaultValue="all-agents">
              <SelectTrigger className="w-[120px]" aria-label="Filter by agent type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="min-w-72 w-full">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="w-full mb-2"
                  aria-label="Search agents"
                />
                <SelectItem value="all-agents">All agents</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="last-month">
              <SelectTrigger className="w-[120px]" aria-label="Filter by time period">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="last-month">Last month</SelectItem>
                <SelectItem value="last-week">Last week</SelectItem>
                <SelectItem value="last-day">Last day</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <section aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="sr-only">
            Performance Metrics
          </h2>
          <Conversationalcard />
        </section>

        <section aria-labelledby="empty-section-heading">
          <h2 id="empty-section-heading" className="sr-only">
            Create New Agent
          </h2>
          <Emptysection />
        </section>
      </div>
    </div>
  );
};

export default Conversationalmain;
