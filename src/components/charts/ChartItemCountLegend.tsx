type Props = {
    title: string,
    label: string,
    count: string,
    color: string
}
const ChartItemCountLegend = ({title, label, count, color}:Props) => {
  return (
      <div className='flex flex-col gap-1'>
        <div className={`w-5 h-5 ${color} rounded-full`}/>
          <h1 className="font-bold">{title}</h1>
          <h2 className="text-xs text-gray-300">{label} ({count}%)</h2>
      </div>
  )
}

export default ChartItemCountLegend