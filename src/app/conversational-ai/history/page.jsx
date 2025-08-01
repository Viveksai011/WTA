import { MessagesSquare, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Component() {
  return (
    <div className="p-6 space-y-6 max-w-[1020px] w-full mx-auto">
      <h1 className="text-2xl font-bold">Call history</h1>

      <div className="flex flex-wrap gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-5 gap-[2px] px-2  ">
              <Plus />
              Date After
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" initialFocus />
            <div className="p-4 border-t flex items-center justify-between">
              <span className="text-sm font-medium">Time</span>
              <div className="flex items-center gap-1">
                <Input type="text" placeholder="--" className="w-12 text-center" />
                <span className="text-muted-foreground">:</span>
                <Input type="text" placeholder="--" className="w-12 text-center" />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-5 gap-[2px] px-2 ">
              <Plus />
              Date Before
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" initialFocus />
            <div className="p-4 border-t flex items-center justify-between">
              <span className="text-sm font-medium">Time</span>
              <div className="flex items-center gap-1">
                <Input type="text" placeholder="--" className="w-12 text-center" />
                <span className="text-muted-foreground">:</span>
                <Input type="text" placeholder="--" className="w-12 text-center" />
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-5 gap-[2px] px-2 ">
              <Plus />
              Evaluation
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Success</DropdownMenuItem>
            <DropdownMenuItem>Failure</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center justify-between">
              <Label htmlFor="unknown-evaluation">Unknown</Label>
              <Switch id="unknown-evaluation" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-5 gap-[2px] px-2 ">
              <Plus />
              Agent
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2">
            <Input placeholder="Search agents..." className="mb-2" />
            <div className="text-center text-sm text-muted-foreground py-4">No agents found.</div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-5 gap-[2px] px-2 ">
              <Plus className=" " />
              User
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-2">
            <Input placeholder="Enter user ID..." />
          </PopoverContent>
        </Popover>
      </div>

      <Card className="flex flex-col items-center justify-center p-8 text-center rounded-xl border shadow-none  bg-[#fafafa] ">
        <div className=" p-3 bg-white border rounded-2xl mb-4">
          <MessagesSquare className="h-4 w-4 text-muted-foreground " />
        </div>
        <h3 className="text-lg font-semibold my-1">No results</h3>
        <p className="text-sm text-muted-foreground">No conversations were found.</p>
      </Card>
    </div>
  );
}
