import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { settingsData } from '@/lib/settingdata'; // Default import

import Secretdrawer from '@/component/setting/secretdrawer';
import Webhookdrawer from '@/component/setting/webhookdrawer';
import Webhookmodal from '@/component/setting/webhookmodal';
import { CircleCheckBig } from 'lucide-react';

const drawerComponents = {
  Webhookdrawer: Webhookdrawer,
  Secretdrawer: Secretdrawer,
  Webhookmodal: Webhookmodal,
};

export default function SettingsPage() {
  return (
    <div className="flex-1 max-w-[750px] md:mt-6 mx-auto w-full p-6 bg-white">
      <div className="mb-5">
        <h1 className="text-lg inline-flex items-center gap-3 font-semibold text-gray-900">
          Conversational AI Settings <CircleCheckBig className="h-5 w-5 text-gray-300" />
        </h1>
        <p className="text-muted-foreground text-sm">
          Configure workspace-wide settings for Conversational AI
        </p>
      </div>
      <hr />

      <div className="mt-6 space-y-6">
        {settingsData.map(({ id, title, description, buttonLabel, drawerComponent }) => {
          const DrawerComponent = drawerComponents[drawerComponent];
          return (
            <Card key={id} className="bg-[#fafafa] rounded-2xl shadow-none">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 ">{title}</h3>
                    <p className="text-sm !mt-0 text-gray-600 ">{description}</p>
                  </div>
                  <div className="flex-shrink-0  md:m-auto">
                    <DrawerComponent>
                      <Button
                        variant="outline"
                        className="rounded-lg w-full sm:w-auto whitespace-nowrap bg-white"
                      >
                        {buttonLabel}
                      </Button>
                    </DrawerComponent>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
