import { Badge } from "@/components/ui/badge";
import { categoryConfig, type Category } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CategoryBadge({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  const config = categoryConfig[category];
  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-medium border", config.bg, className)}
    >
      {config.label}
    </Badge>
  );
}
