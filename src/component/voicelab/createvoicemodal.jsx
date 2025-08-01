import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Lock, Mic, Sparkles, Info } from 'lucide-react';
import { CardContent, Card } from '@/components/ui/card';
const voiceOptions = [
  {
    id: 'voice-design',
    title: 'Voice Design',
    icon: Sparkles,
    iconColor: 'text-purple-600',
    description: 'Design an entirely new voice from a text prompt.',
    duration: 'Less than a minute',
    badge: 'New for V3',
    hasGradient: true,
    isLocked: false,
  },
  {
    id: 'instant-clone',
    title: 'Instant Voice Clone',
    icon: Mic,
    iconColor: 'text-gray-600',
    description: 'Clone your voice with only 10 seconds of audio.',
    duration: '2 minutes',
    isLocked: true,
    lockMessage: 'You need to be on at least the Starter plan to use Instant Voice Cloning',
    hasSubscribeButton: true,
  },
  {
    id: 'professional-clone',
    title: 'Professional Voice Clone',
    icon: Mic,
    iconColor: 'text-gray-600',
    description:
      'Create the most realistic digital replica of your voice. Requires at least 30 minutes of clean audio.',
    duration: '5 minutes',
    hasInfoIcon: true,
    isLocked: true,
    lockMessage: 'You need to be on at least the Creator plan to use Professional Voice Cloning',
    hasSubscribeButton: false,
  },
];
const CreateVoiceModal = ({ children }) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="sm:max-w-lg !rounded-3xl">
      <DialogHeader>
        <DialogTitle className="flex items-center space-x-2">
          <Mic className="w-5 h-5" />
          <span>Add a new voice</span>
        </DialogTitle>
      </DialogHeader>
      <div className=" pb-6 space-y-4">
        {voiceOptions.map(option => {
          const IconComponent = option.icon;

          return (
            <Card
              key={option.id}
              className={`relative overflow-hidden !rounded-3xl border-2 ${
                option.hasGradient
                  ? 'bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border-transparent'
                  : 'border border-gray-200'
              }`}
            >
              {option.hasGradient && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 opacity-50 rounded-lg"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(20, 184, 166, 0.3) 100%)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    padding: '2px',
                  }}
                />
              )}

              <CardContent
                className={`p-4 relative ${option.hasGradient ? 'bg-white rounded-lg m-0.5' : '  p-0'}`}
              >
                <div className={`flex flex-col ${!option.hasGradient && 'p-4'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <IconComponent className={`w-4 h-4 ${option.iconColor}`} />
                      <h3 className="font-medium text-gray-900">{option.title}</h3>
                      {option.hasInfoIcon && <Info className="w-4 h-4 text-gray-400" />}
                    </div>
                    {option.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 rounded-xl text-gray-700 font-semibold text-xs"
                      >
                        {option.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                  <p className="text-[12px] font-medium bg-gray-100 rounded-xl w-fit p-1 px-2 text-gray-900 mb-4">
                    {option.duration}
                  </p>
                </div>

                {option.isLocked && (
                  <div className="flex items-center justify-between p-3 bg-gray-50 border-t">
                    <div className="flex items-center gap-2">
                      <div className=" w-9">
                        <Lock className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="text-[12px] text-gray-700">{option.lockMessage}</span>
                    </div>
                    {option.hasSubscribeButton && (
                      <Button size="sm" variant="outline" className=" text-black">
                        Subscribe
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </DialogContent>
  </Dialog>
);

export default CreateVoiceModal;
