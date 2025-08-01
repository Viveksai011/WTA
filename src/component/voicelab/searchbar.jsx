import { Input } from '@/components/ui/input';
import { Search, Upload, ArrowUpDown, ListFilter } from 'lucide-react';

const SearchBar = () => (
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
    <Input placeholder="Search My Voices..." className="pl-10 pr-20 bg-gray-100 border-0" />
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
      <Upload className="w-4 h-4 text-gray-400" />
      <ArrowUpDown className="w-4 h-4 text-gray-400" />
      <ListFilter className="w-4 h-4 text-gray-400" />
    </div>
  </div>
);

export default SearchBar;
