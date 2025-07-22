import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

const Secretdrawer = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="sm:max-w-sm !w-[600px] !max-w-none max-sm:!w-full flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-normal font-inter">
            <div className="shrink-0 border border-gray-alpha-200 h-9 w-9 flex items-center justify-center rounded-lg shadow-xs">
              <Lock className="h-4 w-4" />
            </div>
            Add webhook
          </SheetTitle>
        </SheetHeader>

        <div className="gap-4 pb-8 grow ">
          <p className="my-3 text-sm text-muted-foreground font-normal">
            Securely store a value that can be used by the tools. Once added, the value cannot be
            retrieved.
          </p>
          <div className="w-full my-3">
            <Label htmlFor="secret-name">Name</Label>
            <Input id="secret-name" />
          </div>
          <div className="w-full grow ">
            <Label htmlFor="secret-value">Value</Label>
            <Textarea id="secret-value" className="min-h-[400px]" />
          </div>
        </div>

        <SheetFooter className="flex justify-end gap-2 pt-4">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Add webhook</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Secretdrawer;
