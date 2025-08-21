'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bookmark, CirclePlus } from 'lucide-react';

const Collectionmodal = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!rounded-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-7">
            <div className="p-2 border border-gray-300 rounded-md flex items-center justify-center">
              <CirclePlus className="w-4 h-4" />
            </div>
            <span>Create collection</span>
          </DialogTitle>
          <DialogDescription className="text-sm py-4">
            This will allow you to access that voice in your My Voices but also in a collection for
            your projects.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Bookmark className="w-4 h-4 " />
            </div>
            <Input placeholder="Collection name" className="pl-10 rounded-xl" />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-xl max-md:mt-2"
          >
            Cancel
          </Button>
          <Button className="bg-gray-400 hover:bg-gray-500 rounded-xl text-white flex items-center  ">
            <CirclePlus className="w-4 h-4" />
            <span>Create collection</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Collectionmodal;
