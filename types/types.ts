// types.ts
import { ComponentType } from "react";
import { LucideIcon } from "lucide-react";

export interface CleaningCategory {
  id: number;
  title: string;
  icon: LucideIcon;
  subServices: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
  services: string[];
}
