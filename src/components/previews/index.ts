import type { ComponentType } from "react";
import ButtonPreview from "./ButtonPreview";
import CardPreview from "./CardPreview";
import InputPreview from "./InputPreview";

export const previewRegistry: Record<string, ComponentType> = {
  ButtonPreview,
  InputPreview,
  CardPreview,
};

