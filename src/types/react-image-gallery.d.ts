declare module 'react-image-gallery' {
  import * as React from 'react';

  export interface ReactImageGalleryItem {
    original: string;
    thumbnail?: string;
    originalTitle?: string;
    thumbnailTitle?: string;
    description?: string;
    renderItem?: () => React.ReactNode;
    renderThumbInner?: () => React.ReactNode;
    originalAlt?: string;
    thumbnailAlt?: string;
  }

  export interface ReactImageGalleryProps {
    items: ReactImageGalleryItem[];
    showNav?: boolean;
    showFullscreenButton?: boolean;
    showPlayButton?: boolean;
    showThumbnails?: boolean;
    showBullets?: boolean;
    autoPlay?: boolean;
    slideInterval?: number;
    onSlide?: (currentIndex: number) => void;
    renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
    renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode;
    additionalClass?: string;
    disableThumbnailScroll?: boolean;
    useTranslate3D?: boolean;
    isRTL?: boolean;
    lazyLoad?: boolean;
    infinite?: boolean;
    slideDuration?: number;
  }

  const ImageGallery: React.FC<ReactImageGalleryProps>;

  export default ImageGallery;
}
