// src/components/ui/progress.jsx
"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils"; // Note: You might need to create this utils file

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-3 w-full overflow-hidden rounded-full bg-gray-100",
      className
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-blue-600 transition-all"
      style={{
        transform: `translateX(-${100 - (value || 0)}%)`,
      }}
    />
  </div>
));

Progress.displayName = "Progress";

export { Progress };
