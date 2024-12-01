import Image from "next/image";

type Props = {
    icon: string
}
const Actions = ({icon}:Props) => {
  return (
      <button className='flex items-center justify-center rounded-full bg-lamaYellow w-8 h-8'>
        <Image src={`/images/${icon}.png`} alt={'icon'} width={14} height={14}/>
      </button>
  )
}

export default Actions