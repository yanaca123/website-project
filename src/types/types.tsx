export interface ThumbnailFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ThumbnailFormats {
  thumbnail: ThumbnailFormat;
}

export interface Thumbnail {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ThumbnailFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Product {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: Thumbnail;
}
export interface ProductAPIResponse {
  data: Product[];
}

export interface SimplifiedProduct {
  slug: string;
  title: string;
  description: string;
  thumbnail: {
    thumbnail: string;
  };
}

export interface ProductListProps {
  products?: SimplifiedProduct[];
}
