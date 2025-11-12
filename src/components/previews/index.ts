import type { ComponentType } from "react";
import ButtonPreview from "./ButtonPreview";
import CardPreview from "./CardPreview";
import InputPreview from "./InputPreview";
import SwitchPreview from "./SwitchPreview";
import TextareaPreview from "./TextareaPreview";

export const previewRegistry: Record<string, ComponentType> = {
  ButtonPreview,
  InputPreview,
  CardPreview,
  SwitchPreview,
  TextareaPreview,
};

