import { Button } from '@/components/ui/button';
import Threedots from '@/component/voicelab/threedots';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const VoiceItem = ({ name, description, language, category, timeAgo }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center space-x-4">
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
        <h3 className="font-medium text-base">{name}</h3>
        <p className="text-gray-500 text-sm line-clamp-1">{description}</p>
      </div>
    </div>
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <Image
          src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg"
          alt="Language Icon"
          width={16}
          height={12}
          className=" rounded-sm flex items-center justify-center"
        />

        <span className="text-sm">{language}</span>
      </div>
      <span className="text-sm text-gray-500 min-w-[80px]">{category}</span>
      <span className="text-sm text-gray-500 min-w-[30px]">{timeAgo}</span>
      <Button variant="ghost" size="sm" className="p-1">
        <ExternalLink className="w-4 h-4" />
      </Button>
      <Threedots />
    </div>
  </div>
);

export default VoiceItem;
