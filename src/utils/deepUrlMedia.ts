import { MediaType, SizeMedia } from "../types";





const sizePriority: SizeMedia[] = ['thumbnail', 'small', 'medium', 'large', 'original']




export const deepUrlMedia = (media: string | MediaType, size?: SizeMedia): string => {
    if (!media) return '@/assets/staticImage/plaholder.png'
    if (typeof media === 'string') return media

    if (size && media.sizes) {
        const sizeIdx = sizePriority.indexOf(size)
        if (sizeIdx !== -1) {
            for (let i = sizeIdx; i < sizePriority.length; i++) {
                const key = sizePriority[i];
                const variant = media.sizes[key];
                if (variant?.url) {
                    return variant.url;
                }
            }
        }
    }
    return media.url || '@/assets/staticImage/plaholder.png'
}