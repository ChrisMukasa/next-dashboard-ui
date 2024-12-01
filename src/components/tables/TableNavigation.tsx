import React from 'react';
import NavSearch from "@/components/NavSearch";
import Actions from "@/components/tables/Actions";
import {role} from "@/lib/data";

type Props = {
    title: string
}
const TableNavigation = ({title}:Props) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className='hidden md:block text-black font-bold'>{title}</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <NavSearch placeholder='Search from table' className='flex w-full md:w-auto'/>
                <div className="flex items-center gap-4 w-full justify-end">
                    <Actions icon='filter'/>
                    <Actions icon='sort'/>
                    {role === 'admin' && (<Actions icon='plus'/>)}
                </div>
            </div>
        </div>
    );
};

export default TableNavigation;
