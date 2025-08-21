import { Button } from '@/components/ui/button';

import Threedots from '@/component/voicelab/threedots';
import CreateVoiceModal from '@/component/voicelab/createvoicemodal';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Plus, CirclePause, AudioLines, Heart, Play, LoaderCircle } from 'lucide-react';

import SearchBar from '@/component/voicelab/searchbar';
import Image from 'next/image';
import Collectionmodal from '@/component/voicelab/collectionmodal';

const voicedashboardmobile = ({ voiceItem }) => {
  return (
    <div className="md:hidden">
      <div className="p-4">
        <Sheet>
          <SheetTrigger asChild>
            <div className="bg-gray-800 text-white rounded-full px-4 py-2 flex items-center justify-center space-x-2 cursor-pointer">
              <Heart className="w-4 h-4" />
              <span>My Voices</span>
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[60vh]">
            <div className="space-y-6 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Voices</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <LoaderCircle className="w-4 h-4" />
                  <span>1/ 3 slots used</span>
                </div>
              </div>

              <div className="space-y-4">
                {['explore', 'my-voices', 'default-voices'].map(tab => (
                  <div
                    key={tab}
                    className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    {tab === 'my-voices' && <Heart className="w-4 h-4" />}
                    {tab === 'explore' && <AudioLines className="w-4 h-4" />}
                    {tab === 'default-voices' && <CirclePause className="w-4 h-4" />}
                    <span>
                      {tab
                        .split('-')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium ">Collections</h3>
                  <Collectionmodal>
                    <div className="flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Create collection</span>
                    </div>
                  </Collectionmodal>
                </div>
                <p className="text-sm text-gray-600">
                  You can organize voices into personal collections. Create first collection to get
                  started.
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="p-4 space-y-4">
        <SearchBar />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">My Voices</h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full ">
                <Image
                  src="https://elevenlabs.io/app_assets/image_assets/_next/image?url=%2Fapp_assets%2F_next%2Fstatic%2Fmedia%2Forb-2.54da9161.png&w=128&q=75"
                  alt="Voice Icon"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-base">{voiceItem.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-1">{voiceItem.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Play className="w-4 h-4 text-gray-400" />
              <Threedots />
            </div>
          </div>

          <div className="flex justify-center pt-8">
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
      </div>
    </div>
  );
};

export default voicedashboardmobile;
