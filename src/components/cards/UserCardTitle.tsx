'use client'

import Image from "next/image";
import {useState} from "react";

type Props = {
  title: string
  type: string
}
type OpenProps = {
    type: string,
    show: boolean
}
const UserCardTitle = ({ title, type }:Props) => {
    const [open, setOpen] = useState<OpenProps>({type: 'student', show: false})
    const handleOpen = (props) => {
        setOpen((prev) => ({
            ...prev, show: (type === props && !open.show)
        }))
    }
  return (
      <div className="flex justify-between items-center">
          <span className='text-[10px] bg-white text-green-600 rounded-full px-2 py-1'>{title}</span>
          <div className='cursor-pointer relative' onClick={() => handleOpen(type)}>
              <Image src='/images/more.png' alt='image' width={20} height={20}/>
              {open.show && (
                  <div className="absolute left-1/2 z-10 mt-5 flex  max-w-[200px] -translate-x-1/2 px-2">
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 p-2">
                          <div className="group relative flex gap-x-2 rounded-lg">
                              <div className="flex size-7 flex-none items-center justify-center rounded-lg bg-gray-50">
                                  <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                                  </svg>
                              </div>
                              <div>
                                  <a href="#" className="font-semibold text-gray-900 capitalize">
                                      Show more
                                      <span className="absolute inset-0"></span>
                                  </a>
                                  <p className="text-gray-600 text-sm">{title} details</p>
                              </div>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      </div>
  )
}
export default UserCardTitle