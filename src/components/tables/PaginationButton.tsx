type Props = {
    title: string,
    disabled: boolean
}
const PaginationButton = ({title, disabled}:Props) => {
  return <button disabled={disabled} className='px-4 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed'>{title}</button>
}

export default PaginationButton