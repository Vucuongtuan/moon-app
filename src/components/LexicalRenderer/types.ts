
export type LexicalNode = {
 type: string;
      children: {
        type: any;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
};

export type LexicalRoot = {
    root: LexicalNode
}

// Text Format Constants
export const TEXT_FORMAT_BOLD = 1;
export const TEXT_FORMAT_ITALIC = 2;
export const TEXT_FORMAT_STRIKETHROUGH = 4;
export const TEXT_FORMAT_UNDERLINE = 8;
export const TEXT_FORMAT_CODE = 16;
