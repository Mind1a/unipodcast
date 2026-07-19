export type CardPropsType = {
  id: number
  image: string
  title: string
  description: string
  guests: string[]
  time: string
  date: string
}


export type DataType = {
  data: CardPropsType;
};
