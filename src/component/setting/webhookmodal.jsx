import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Webhookmodal = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-sm !w-[510px] !max-w-none max-sm:!w-full flex flex-col !rounded-3xl ">
        <DialogHeader>
          <DialogTitle>Create a Webhook</DialogTitle>
          <DialogDescription>
            Please enter the webhook callback URL, name, and configure the authentication method to
            use. Once created, these details cannot be changed.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="webhook-name">Enter a valid display name for the webhook</Label>
            <Input id="webhook-name" placeholder="Webhook Name..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="callback-url">Enter a valid callback URL</Label>
            <Input id="callback-url" placeholder="https://..." />
          </div>

          <div className="flex justify-between items-center">
            <Label htmlFor="auth-method">Webhook Auth Method</Label>
            <Select defaultValue="HMAC">
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="HMAC">HMAC</SelectItem>
                <SelectItem value="Bearer">Bearer Token</SelectItem>
                <SelectItem value="None">None</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-muted-foreground">
            HMAC will generate a shared secret used to sign all webhook payloads. You should verify
            the "ElevenLabs-Signature" header using this secret.
          </p>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" className="rounded-xl">
              Cancel
            </Button>
            <Button className="disabled:bg-gray-alpha-400 rounded-xl bg-gray-400">Create</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Webhookmodal;
