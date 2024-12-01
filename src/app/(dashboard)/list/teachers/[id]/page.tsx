import React from 'react';

type Props = {
    id:number
}
const SingleTeacherPage = ({id}:Props) => {
    return (
        <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
            <div className="w-full xl:w-2/3 bg-lamaYellow"></div>
            <div className="w-full xl:w-1/3 bg-lamaSkyLight"></div>
        </div>
    );
}

export default SingleTeacherPage;