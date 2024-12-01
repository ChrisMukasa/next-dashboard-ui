import UserCardTitle from "@/components/cards/UserCardTitle";

type Props = {
  title: string
  type: string
}

const UserCard = ({title,type}:Props) => {
    return (
        <div className='flex-1 rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 min-w-[150px]'>
            <UserCardTitle type={type} title={title}/>
            <h1 className='text-2xl font-semibold my-4'>1.234</h1>
            <h2 className='text-sm font-medium text-gray-500 capitalize'>{type}</h2>
        </div>
    )
}
export default UserCard