import { FC } from "react"

interface Props {
    name: string;
    desc: string;
    img: string;
}

export const ProfileCard:FC<Props> = ({desc, img, name}) => {
  return (
    <div>ProfileCard</div>
  )
}
