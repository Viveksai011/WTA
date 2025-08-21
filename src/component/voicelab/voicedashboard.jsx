import Voicedashboarddesktop from '@/component/voicelab/voicedashboarddesktop';
import Voicedashboardmobile from '@/component/voicelab/voicedashboardmobile';

const voiceItem = {
  name: 'tootpick',
  description: 'A deep, booming male voice of a massive evil ogre in his middle years....',
  language: 'English',
  category: 'Not specified',
  timeAgo: '0d',
};

export default function VoiceManagementDashboard() {
  return (
    <div className="min-h-screen bg-white md:pt-20">
      <Voicedashboardmobile voiceItem={voiceItem} />

      <Voicedashboarddesktop voiceItem={voiceItem} />
    </div>
  );
}
