import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchValue(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchValue.trim()) {
      params.set("q", searchValue.trim());
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };

  const handleClear = () => {
    setSearchValue("");
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    setSearchParams(params);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search insights..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="pl-10 pr-10 bg-secondary border-border"
      />
      {searchValue && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </form>
  );
};

export default BlogSearch;
