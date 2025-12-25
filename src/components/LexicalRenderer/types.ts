import { MediaType } from "@/src/types";

export type LexicalNode = {
  type: string;
  children?: LexicalNode[];
  text?: string;
  format?: number;
  tag?: string; // h1, h2...
  url?: string; // link
  value?: MediaType; // media
  [key: string]: any; // Cho các prop custom khác
};

export type LexicalRoot = {
  root: LexicalNode;
};

// Text Format Constants
export const TEXT_FORMAT_BOLD = 1;
export const TEXT_FORMAT_ITALIC = 2;
export const TEXT_FORMAT_STRIKETHROUGH = 4;
export const TEXT_FORMAT_UNDERLINE = 8;
export const TEXT_FORMAT_CODE = 16;
