import Card from "@/components/Card";
import Pagination from "@/components/tables/Pagination";
import Table from "@/components/tables/Table";
import Image from "next/image";
import Link from "next/link";
import {role, studentsData} from "@/lib/data";
import {StudentProps} from "@/types/index.d";
import TableNavigation from "@/components/tables/TableNavigation";

const columns = [
    {
        header: 'Info',
        accessor: 'info',
    },
    {
        header: 'Student ID',
        accessor: 'studentId',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Grade',
        accessor: 'grade',
        className: 'hidden md:table-cell',
    },
    // {
    //     header: 'Class',
    //     accessor: 'class',
    //     className: 'hidden md:table-cell',
    // },
    {
        header: 'Phone',
        accessor: 'phone',
        className: 'hidden lg:table-cell',
    },
    {
        header: 'Address',
        accessor: 'address',
        className: 'hidden lg:table-cell',
    },
    {
        header: 'Actions',
        accessor: 'actions',
    },
]

const renderRow = (item: StudentProps) =>
    (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td>
                <div className="flex gap-4 p-4">
                    <Image
                        src={item.photo}
                        alt={'photo'}
                        width={40}
                        height={40}
                        className={'md:hidden xl:block w-10 h-10 rounded-full object-cover'}
                    />
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item?.email}</p>
                    </div>
                </div>
            </td>
            <td className='hidden md:table-cell'>{item.studentId}</td>
            <td className='hidden md:table-cell'>{item.grade}</td>
            {/*<td className='hidden md:table-cell'>{item.class}</td>*/}
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden md:table-cell'>{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`students/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                            <Image src='/images/view.png' alt={'view'} width={16} height={16}/>
                        </button>
                    </Link>
                    {role === 'admin' && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                            <Image src='/images/delete.png' alt={'delete'} width={16} height={16}/>
                        </button>
                    )}
                </div>
            </td>
        </tr>
    )

const StudentListPage = () =>
    (
        <div className='mx-4'>
            <Card className='p-4'>
                {/*TOP*/}
                <TableNavigation title={'All students'}/>
                {/*LIST*/}
                <Table columns={columns} renderRow={renderRow} data={studentsData}/>
                {/*PAGINATION*/}
                <Pagination/>
            </Card>
        </div>
    )

export default StudentListPage