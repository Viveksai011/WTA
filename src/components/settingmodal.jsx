import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ChartNoAxesCombined, GripVertical, Plus, Settings, Trash } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open dashboard settings">
            <Settings className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <Settings className="h-5 w-5 mr-2 inline-block" aria-hidden="true" />
              Dashboard settings
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Configure custom dashboard charts to better suit your needs.
            </p>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <ChartNoAxesCombined className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <div>
                  <p className="font-medium">Overall success rate</p>
                  <p className="text-sm text-muted-foreground">Conversation success chart</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" aria-label="Delete chart">
                  <Trash className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Drag to reorder">
                  <GripVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" aria-label="Add new chart">
                <Plus className="h-4 w-4" /> Add
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem>Conversation success</DropdownMenuItem>
              <DropdownMenuItem>Evaluation criteria</DropdownMenuItem>
              <DropdownMenuItem>Data collection</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DialogContent>
      </form>
    </Dialog>
  );
}
