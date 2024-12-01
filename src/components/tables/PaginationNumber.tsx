type Props = {
    count: number,
    active?: boolean
}
const PaginationNumber = ({count, active}:Props) => {
  return <button className={`px-2 rounded-sm ${active ? 'bg-lamaSky' : ''}`}>{count}</button>
}

export default PaginationNumber