export interface Service {
  id: string;
  tag: string;
  tagPosition: "left" | "center" | "right";
  title: string;
  description: string;
  descriptionSecond: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
}
