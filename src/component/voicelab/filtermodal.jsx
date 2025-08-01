import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ListFilter } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const FiltersModal = ({ children }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="max-w-[610px]  w-full !rounded-3xl">
      <DialogHeader>
        <DialogTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ListFilter className="w-5 h-5" />
            <span>Voice Filters</span>
          </div>
        </DialogTitle>
      </DialogHeader>
      <form className="space-y-6">
        <div className="w-full">
          <Label className="text-sm font-medium">Category</Label>
          <div className="flex gap-2 flex-wrap bg-gray-200 rounded-md w-full p-3">
            {[
              { value: 'any', label: 'Any' },
              { value: 'voice-design', label: 'Voice Design' },
              { value: 'instant-voice-clone', label: 'Instant Voice Clone' },
              { value: 'professional-voice-clone', label: 'Professional Voice Clone' },
            ].map(option => (
              <div key={option.value} className="relative">
                <input
                  type="radio"
                  id={`category-${option.value}`}
                  name="category"
                  value={option.value}
                  className="sr-only peer"
                />
                <Label
                  htmlFor={`category-${option.value}`}
                  className="cursor-pointer  rounded-xl  px-3 py-2 text-sm transition-colors bg-gray-200 peer-checked:bg-white peer-checked:border "
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Type</Label>
          <div className="flex flex-wrap justify-between gap-2 bg-gray-200 rounded-md w-full p-3">
            {[
              { value: 'any', label: 'Any' },
              { value: 'personal', label: 'Personal' },
              { value: 'community', label: 'Community' },
            ].map(option => (
              <div key={option.value} className="relative ">
                <input
                  type="radio"
                  id={`type-${option.value}`}
                  name="type"
                  value={option.value}
                  className="sr-only peer "
                />
                <Label
                  htmlFor={`type-${option.value}`}
                  className="cursor-pointer rounded-xl !w-[400px]  px-6 py-2 bg-gray-200 text-sm transition-colors border-input bg-transparent  peer-checked:bg-white peer-checked:border  peer-checked:border-transparent"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end border-t gap-3 pt-4">
          <Button type="button" variant="outline" className=" hover:text-gray-800 rounded-xl">
            Reset all
          </Button>
          <Button type="submit" className="bg-black hover:bg-black/90 text-white rounded-xl">
            Apply filters
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
);

export default FiltersModal;
