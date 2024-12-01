import Image from "next/image";

type Props = {
    icon  : string,
    badge?: string
}
const NavItem = ({icon, badge}:Props) => {
    return (
        <div className={`${badge && 'relative'} cursor-pointer bg-white rounded-full w-7 h-7 flex items-center justify-center p-1`}>
            <Image src={`/images/${icon}.png`} alt='search' width={20} height={20}/>
            {badge && (<div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>{badge}</div>)}
        </div>
    )
}

export default NavItem