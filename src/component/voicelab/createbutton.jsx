import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const CreateButton = () => (
  <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2">
    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
      <Plus className="w-3 h-3 text-blue-600" />
    </div>
    <span>Create or Clone a Voice</span>
  </Button>
);

export default CreateButton;
