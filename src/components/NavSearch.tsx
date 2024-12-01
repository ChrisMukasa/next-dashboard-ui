import Image from "next/image";

type Props = {
    placeholder: string,
    className?:string
}
const NavSearch = ({placeholder, className}:Props) => {
  return (
      <div className={`items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ${className}`}>
          <Image src='/images/search.png' alt='search' width={14} height={14}/>
          <input type="text" placeholder={placeholder} className='w-[200px] bg-transparent p-2 outline-none'/>
      </div>
  )
}
export default NavSearch