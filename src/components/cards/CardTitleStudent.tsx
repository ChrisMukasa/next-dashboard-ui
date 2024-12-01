'use client'

type Props = {
  title: string
}
const CardTitleStudent = ({ title }:Props) => {
  return (
      <span className='text-lg font-semibold'>{title}</span>
  )
}
export default CardTitleStudent