import React from 'react'

type TitleProps = {
  title: string
}

export default function Title({ title }: TitleProps) {
  return <div className="title">{title}</div>
}
