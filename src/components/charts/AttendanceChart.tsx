'use client'

import CardTitle from "@/components/cards/CardTitle";

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tue',
        present: 34,
        absent: 68,
    },
    {
        name: 'Wed',
        present: 55,
        absent: 45,
    },
    {
        name: 'Thu',
        present: 33,
        absent: 63,
    },
    {
        name: 'Fri',
        present: 45,
        absent: 55,
    },
];

const AttendanceChart = () => {
    return (
        <div className='p-4 w-full h-full'>
            {/*TITLE*/}
            <CardTitle title={'Attendance'} type={'attendance'} color='text-grey-500'/>
            {/*CHART*/}
            <div className="relative w-full h-full pb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={500} height={300} data={data} barSize={20}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                        <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
                        <YAxis  axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}/>
                        <Tooltip contentStyle={{borderRadius: 10, borderColor: 'lightgray'}}/>
                        <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: 20, paddingBottom: 40}}/>
                        <Bar dataKey="absent" fill="#FAE27C" legendType='circle' radius={[10, 10, 0, 0]} />
                        <Bar dataKey="present" fill="#C3EBFA" legendType='circle' radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendanceChart