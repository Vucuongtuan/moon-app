import { MediaType, SizeMedia } from "@/src/types";
import { ImageProps } from "expo-image";
import { VideoViewProps } from "expo-video";
import ImageComp from "./Image";
import Video from "./Video";

export interface MediaImageProps extends Omit<ImageProps, 'source'> {
    resource?: string | MediaType;
    type?: 'image';
    sizes?: SizeMedia;
}

export interface MediaVideoProps extends Omit<VideoViewProps, 'player'> {
    resource?: string | MediaType;
    type?: 'video';
    sizes?: SizeMedia;
    isPlaying?: boolean;
    isMuted?: boolean;
    volume?: number;
    loop?: boolean;
}

export type MediaProps = MediaImageProps | MediaVideoProps;

function detectTypeFromUrl(url: string): 'video' | 'image' {
    const videoExtensions = ['.mp4', '.mov', '.avi', '.webm', '.mkv', '.m4v', '.3gp'];
    const lowerUrl = url.toLowerCase();
    
    for (const ext of videoExtensions) {
        if (lowerUrl.endsWith(ext)) {
            return 'video';
        }
    }
    
    return 'image';
}

export default function Media(props: MediaProps) {
    const { resource, type, sizes, ...rest } = props;

    if (type === 'video') {
        return <Video resource={resource} sizes={sizes} {...(rest as any)} />;
    }
    
    if (type === 'image') {
        return <ImageComp resource={resource} sizes={sizes} {...(rest as any)} />;
    }

    if (typeof resource === 'object' && resource?.mimeType) {
        const detectedType = resource.mimeType.startsWith('video/') ? 'video' : 'image';

        if (detectedType === 'video') {
            return <Video resource={resource} sizes={sizes} {...(rest as any)} />;
        }
        return <ImageComp resource={resource} sizes={sizes} {...(rest as any)} />;
    }

    if (typeof resource === 'string') {
        const detectedType = detectTypeFromUrl(resource);
        
        if (detectedType === 'video') {
            return <Video resource={resource} sizes={sizes} {...(rest as any)} />;
        }
        return <ImageComp resource={resource} sizes={sizes} {...(rest as any)} />;
    }

    return <ImageComp resource={resource} sizes={sizes} {...(rest as any)} />;
}