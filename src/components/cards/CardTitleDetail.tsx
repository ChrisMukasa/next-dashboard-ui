'use client'

type Props = {
  title: string
}
const CardTitleDetail = ({ title }:Props) => {
  return (
      <div className="flex justify-between items-center">
          <span className='text-lg font-semibold'>{title}</span>
          <div className='cursor-pointer text-gray-400 text-xs' onClick={() => {}}>
              View all
          </div>
      </div>
  )
}
export default CardTitleDetail