import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Lock } from 'lucide-react';

const Webhookdrawer = ({ children }) => {
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

        <div className="flex-1 space-y-6 mt-6">
          <p className="text-sm text-muted-foreground font-normal">
            Add a webhook to retrieve conversation_initiation_client_data when a{' '}
            <span className="font-medium text-black">Twilio call</span> is initiated. Response
            format must be a valid{' '}
            <span className="font-medium text-black">conversation_initiation_client_data</span>{' '}
            event.
          </p>

          <div className="flex gap-2">
            <div className="space-y-2">
              <Label htmlFor="method" className="text-md text-foreground font-medium">
                Method
              </Label>
              <Select defaultValue="POST">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="GET">GET</SelectItem>
                  <SelectItem value="PUT">PUT</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 w-full">
              <Label htmlFor="url" className="text-md text-foreground font-medium">
                URL
              </Label>
              <Input id="url" />
            </div>
          </div>

          <div className="bg-[#fafafa] p-6  border border-gray-alpha-200 rounded-2xl flex justify-between items-center">
            <div>
              <Label className="text-md text-foreground font-medium ">Headers</Label>
              <p className="text-sm text-muted-foreground">
                Define headers that will be sent with the request
              </p>
            </div>
            <Button variant="outline" className="text-sm rounded-xl p-2.5">
              Add header
            </Button>
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

export default Webhookdrawer;
