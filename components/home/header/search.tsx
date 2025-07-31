import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <form action="">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform h-4 w-4 -translate-y-1/2 text-gray-800" />
        <Input
          type="text"
          name="search"
          placeholder="Search Articles"
          className="pl-10 w-48 focus-visible:ring-1"
        />
      </div>
    </form>
  );
};

export default SearchInput;
