'use client'

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import CardTitle from "@/components/cards/CardTitle";
import ChartItemCountLegend from "@/components/charts/ChartItemCountLegend";
import Image from "next/image";

const data = [
    {
        name: 'Total',
        count: 100.00,
        fill: '#fff',
    },
    {
        name: 'Girls',
        count: 61.47,
        fill: '#FAE27C',
    },
    {
        name: '25-29',
        count: 38.53,
        fill: '#C3EBFA',
    }
];

const CountChart = () => {
    return (
        <div className='p-4 w-full h-full'>
            {/*TITLE*/}
            <CardTitle title={'Students'} type={'student'} color='text-grey-500'/>
            {/*CHART*/}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar background dataKey="count"/>
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src='/images/maleFemale.png' alt='gender' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/*BOTTOM*/}
            <div className="flex items-center justify-center gap-16">
                <ChartItemCountLegend title='1.140' label='Boys' count='35' color='bg-lamaSky'/>
                <ChartItemCountLegend title='1.234' label='Girls' count='65' color='bg-lamaYellow'/>
            </div>
        </div>
    )
}

export default CountChart