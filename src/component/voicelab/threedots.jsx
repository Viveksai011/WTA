import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Copy, Edit, History, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Threedots = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="p-1">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex items-center space-x-2">
          <Copy className="w-4 h-4" />
          <span>Copy voice ID</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2">
          <Edit className="w-4 h-4" />
          <span>Edit voice</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2">
          <History className="w-4 h-4" />
          <span>View history</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center space-x-2 ">
          <Trash2 className="w-4 h-4" />
          <span>Delete voice</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Threedots;
