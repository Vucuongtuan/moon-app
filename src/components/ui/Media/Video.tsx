import { MediaType, SizeMedia } from '@/src/types';
import { deepUrlMedia } from '@/src/utils/deepUrlMedia';
import { useVideoPlayer, VideoView, VideoViewProps } from 'expo-video';
import { useEffect } from 'react';

interface VideoProps extends Omit<VideoViewProps, 'player'> {
    resource?: string | MediaType;
    sizes?: SizeMedia;
    isPlaying?: boolean;
    isMuted?: boolean;
    volume?: number;
    loop?: boolean;
}

export default function Video(props: VideoProps) {
    const {
        resource,
        sizes,
        isPlaying = false,
        isMuted = false,
        volume = 1.0,
        loop = false,
        ...rest
    } = props;

    const source = resource ? deepUrlMedia(resource, sizes) : undefined;

    const player = useVideoPlayer(source || '', (player) => {
        player.loop = loop;
        player.muted = isMuted;
        player.volume = volume;
    });

    useEffect(() => {
        if (!player) return;

        if (isPlaying) {
            player.play();
        } else {
            player.pause();
        }
    }, [isPlaying, player]);

    useEffect(() => {
        if (player) {
            player.muted = isMuted;
        }
    }, [isMuted, player]);

    useEffect(() => {
        if (player) {
            player.volume = volume;
        }
    }, [volume, player]);

    return <VideoView player={player} {...rest} />;
}