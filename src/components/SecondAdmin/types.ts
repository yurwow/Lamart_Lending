export interface FrameTemplate {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface TextBlock {
    id: number;
    title: string;
    content: string;
    styles: Styles;
}

export interface UpdatedTextBlock extends TextBlock {
    content: string;
    styles: Styles;
}

export interface Styles {
    color: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    mobileFontSize: string;
}

export interface Image {
    id: number;
    image: string;
    description: string;
}

export interface Frame {
    id: number;
    name: string;
    enabled: boolean;
    order: number;
    content: string;
    textBlocks: TextBlock[];
    images: Image[];
}

export interface FrameAll {
    content: string;
    enabled: boolean;
    id: number;
    images: Image[];
    name: string;
    order: number;
    textBlocks: TextBlock[];
}
