import PaginationButton from "@/components/tables/PaginationButton";
import PaginationNumber from "@/components/tables/PaginationNumber";

const Pagination = () => {
  return (
      <div className='flex items-center p-4 justify-between text-gray-500'>
          <PaginationButton disabled={true} title={'Prev'}/>
          <div className="flex items-center gap-2 text-sm">
            <PaginationNumber count={1} active={true}/>
            <PaginationNumber count={2}/>
            <PaginationNumber count={3}/>
              ...
            <PaginationNumber count={10}/>
          </div>
          <PaginationButton disabled={false} title={'Next'}/>
      </div>
  )
}

export default Pagination