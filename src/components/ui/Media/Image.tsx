import { DefaultBlurImage } from '@/src/constants/theme';
import { MediaType, SizeMedia } from '@/src/types';
import { deepUrlMedia } from '@/src/utils/deepUrlMedia';
import { Image, ImageProps } from 'expo-image';

interface ImageCompProps extends Omit<ImageProps, 'source'> {
  resource?: string | MediaType;
  sizes?: SizeMedia;
}

export default function ImageComp(props: ImageCompProps) {
  const { resource, sizes, placeholder, ...rest } = props;

  const source = resource ? deepUrlMedia(resource, sizes) : undefined;

  const blurhash =
    typeof resource === 'object' && resource.blurData
      ? resource.blurData
      : undefined;

  return (
    <Image
      source={typeof source === 'string' ? { uri: source } : source}
      placeholder={blurhash || placeholder || DefaultBlurImage}
      transition={200}
      contentFit={props.contentFit || 'cover'}
      contentPosition={
        typeof resource === 'object'
          ? {
              top: `${resource.focalY ?? 50}%`,
              left: `${resource.focalX ?? 50}%`,
            }
          : undefined
      }
      {...rest}
    />
  );
}
