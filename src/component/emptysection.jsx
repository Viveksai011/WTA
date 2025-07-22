import { ChartNoAxesCombined } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { emptyData } from "@/lib/emptycarddata";

const Emptysection = () => {
  return (
    <div className="space-y-8 p-6">
      {emptyData.map((section, index) => (
        <div key={index}>
          {section.title && (
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border-4 border-gray-200"></div>
              <h3 className="text-lg font-semibold">{section.title}</h3>
            </div>
          )}
          <Card className="h-64 bg-[#fafafa]">
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="h-12 w-12 border border-gray-200 flex items-center bg-white justify-center rounded-lg mx-auto  mb-4">
                  <ChartNoAxesCombined className="h-6 w-6 mx-auto " />
                </div>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {section.description}
                </p>
                {!section.title && (
                  <Button className="rounded-xl">
                    {section.buttonText || "Create an agent"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Emptysection;
