


export interface Translations {
    t: (key: string) => string;
    locale?: string;
}

export interface InfoItemType {
    icon?: () => React.ReactElement
    title: string,
    description?: string
}

export type Lang = 'en' | 'vi';
export interface PaginationType<T> {
    data: T[];
    page: number | undefined;
    limit: number | undefined;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    totalPages: number | undefined;
    totalDocs: number | undefined;
    nextPage: number | null;
    prevPage: number | null;
}

export type SizeMedia = 'thumbnail' | 'small' | 'medium' | 'large' | 'original';


export interface MediaType {
    id: string;
    alt?: string | null;
    caption?: string | null;
    blurData?: string | null;
    prefix?: string | null;
    updatedAt: string;
    createdAt: string;
    url?: string | null;
    thumbnailURL?: string | null;
    filename?: string | null;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
    focalX?: number | null;
    focalY?: number | null;
    sizes?: {
        thumbnail?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        small?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        medium?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        large?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
        original?: {
            url?: string | null;
            width?: number | null;
            height?: number | null;
            mimeType?: string | null;
            filesize?: number | null;
            filename?: string | null;
        };
    };
}


export interface Block {
    id:string,
    blockName?:string | null,
    blockType:string,
}
