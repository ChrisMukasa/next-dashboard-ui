'use client'

import CardTitle from "@/components/cards/CardTitle";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 400,
        expense: 200,
    },
    {
        name: 'Fev',
        income: 300,
        expense: 138,
    },
    {
        name: 'Mar',
        income: 200,
        expense: 980,
    },
    {
        name: 'Apr',
        income: 280,
        expense: 398,
    },
    {
        name: 'May',
        income: 190,
        expense: 400,
    },
    {
        name: 'Jun',
        income: 290,
        expense: 800,
    },
    {
        name: 'Jul',
        income: 390,
        expense: 300,
    },
    {
        name: 'Aug',
        income: 340,
        expense: 430,
    },
    {
        name: 'Oct',
        income: 490,
        expense: 300,
    },
    {
        name: 'Nov',
        income: 490,
        expense: 300,
    },
    {
        name: 'Dec',
        income: 490,
        expense: 400,
    },
];

const FinanceChart = () => {
    return (
        <div className='p-4 w-full h-full'>
            {/*TITLE*/}
            <CardTitle title={'Finance'} type={'finance'} color='text-grey-500'/>
            {/*CHART*/}
            <div className="relative w-full h-full">
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                        <XAxis dataKey="name" axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false} tickMargin={10}/>
                        <YAxis  axisLine={false} tick={{fill: '#d1d5db'}} tickLine={false}  tickMargin={20}/>
                        <Tooltip contentStyle={{borderRadius: 10, borderColor: 'lightgray'}}/>
                        <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop: 10, paddingBottom: 30}}/>
                        <Line dataKey="expense" type="monotone" stroke="#C3EBFA" strokeWidth={5} />
                        <Line dataKey="income" type="monotone" stroke="#CFCEFF" strokeWidth={5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart