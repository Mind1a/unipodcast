export interface NewsType {
  id: number;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  eager?: boolean;
}
