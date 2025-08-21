import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import CreateVoiceModal from '@/component/voicelab/createvoicemodal';
import {
  Search,
  Upload,
  ChevronDown,
  Plus,
  MessageSquare,
  AudioLines,
  ArrowDownWideNarrow,
  ListFilter,
  LoaderCircle,
} from 'lucide-react';

import VoiceItem from '@/component/voicelab/voiceitem';
import Image from 'next/image';
import FiltersModal from '@/component/voicelab/filtermodal';
import Collectionmodal from '@/component/voicelab/collectionmodal';

const Voicedashboarddesktop = ({ voiceItem }) => {
  return (
    <div className="hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Tabs value="my-voices" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="bg-transparent p-0 h-auto space-x-6">
              {['explore', 'my-voices', 'default-voices'].map(tab => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-black rounded-none pb-2"
                >
                  {tab === 'explore' ? (
                    <div className="flex items-center space-x-2">
                      <AudioLines className="w-4 h-4" />
                      <span>Explore</span>
                    </div>
                  ) : (
                    <span>
                      {tab
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                    </span>
                  )}
                </TabsTrigger>
              ))}

              <TabsTrigger
                value="collections"
                className="bg-transparent p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-black rounded-none pb-2"
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center space-x-1 cursor-pointer">
                      <span>Collections</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-60 rounded-md">
                    <div className="p-3 text-sm text-gray-400 border-b border-gray-200">
                      You can organize voices into personal collections. Create first collection to
                      get started.
                    </div>
                    <DropdownMenuItem
                      className="flex items-center space-x-2 rounded-xl cursor-pointer"
                      asChild
                    >
                      <Collectionmodal>
                        <div className="flex items-center text-sm p-2 cursor-pointer hover:bg-gray-50 mt-1 rounded-md space-x-2">
                          <Plus className="w-4 h-4" />
                          <span>Create collection</span>
                        </div>
                      </Collectionmodal>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <LoaderCircle className="w-4 h-4" />
                <span>1/ 3 slots used</span>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Feedback</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Type your feedback here..."
                      className="min-h-[100px] resize-none"
                    />
                    <div className="text-xs text-gray-500">
                      We don't respond to submissions,
                      <br />
                      but we read all of them carefully
                    </div>
                    <Button className="w-full bg-black hover:bg-gray-800">Submit</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center w-full gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search My Voices..."
                className="pl-10 pr-10 bg-white rounded-xl  border-gray-200"
              />
              <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="latest">
                <SelectTrigger className=" bg-white rounded-xl  border-gray-200">
                  <div className="flex items-center space-x-2">
                    <ArrowDownWideNarrow className="w-4 h-4 " />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>

              <FiltersModal>
                <Button
                  variant="outline"
                  className="flex items-center rounded-xl  space-x-2 bg-white border-gray-200"
                >
                  <ListFilter className="w-4 h-4" />
                  <span>Filters</span>
                </Button>
              </FiltersModal>

              <CreateVoiceModal>
                <Button className="bg-gradient-to-r from-[#1A6BBC] rounded-xl flex gap-3 to-gray-950 text-white items-center ">
                  <Image
                    src={
                      'https://elevenlabs.io/app_assets/image_assets/_next/image?url=%2Fapp_assets%2F_next%2Fstatic%2Fmedia%2Forb.61b0f196.png&w=32&q=75'
                    }
                    alt="Create Voice Icon"
                    width={16}
                    height={16}
                  />
                  <span>Create or Clone a Voice</span>
                </Button>
              </CreateVoiceModal>
            </div>
          </div>

          <TabsContent value="my-voices" className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">My Voices</h2>
            <div className="space-y-3">
              <VoiceItem {...voiceItem} />
            </div>
          </TabsContent>

          {['explore', 'default-voices', 'collections'].map(tab => (
            <TabsContent key={tab} value={tab}>
              <div className="text-center py-12">
                <p className="text-gray-500">
                  {tab
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}{' '}
                  content
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Voicedashboarddesktop;
