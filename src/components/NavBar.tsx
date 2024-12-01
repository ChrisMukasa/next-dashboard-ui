import Image from "next/image";
import NavItem from "@/components/NavItem";
import NavSearch from "@/components/NavSearch";

const NavBar = () => {
  return (
      <div className='w-full flex items-center justify-between gap-4 p-4'>
        {/* SEARCH BAR */}
          <NavSearch placeholder='Search ...' className='hidden md:flex'/>
        {/* ICONS AND USERS */}
          <div className="flex items-center gap-6 w-full justify-end">
              <NavItem icon='message'/>
              <NavItem icon='announcement' badge='10'/>
              <div className="flex flex-col">
                  <span className="text-xs leading-3 font-medium">Chris Mukasa</span>
                  <span className="text-[10px] text-gray-500 text-right">Admin</span>
              </div>
              <Image src='/images/avatar.png' alt='avatar' width={36} height={36} className='rounded-full'/>
          </div>
      </div>
  )
}

export default NavBar