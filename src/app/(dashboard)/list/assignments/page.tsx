import Card from "@/components/Card";
import Pagination from "@/components/tables/Pagination";
import Table from "@/components/tables/Table";
import Image from "next/image";
import Link from "next/link";
import {assignmentsData, role} from "@/lib/data";
import {AssignmentProps} from "@/types/index.d";
import TableNavigation from "@/components/tables/TableNavigation";

const columns = [
    {
        header: 'Subject Name',
        accessor: 'subject',
    },
    {
        header: 'Class',
        accessor: 'class',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Teacher',
        accessor: 'teacher',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Due Date',
        accessor: 'dueDate',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Actions',
        accessor: 'actions',
    },
]

const renderRow = (item: AssignmentProps) =>
    (
        <tr key={item.id} className='py-4 border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='p-4'>{item.subject}</td>
            <td className='hidden md:table-cell font-bold'>{item.class}</td>
            <td className='hidden md:table-cell font-bold'>{item.teacher}</td>
            <td className='hidden md:table-cell'>{item.dueDate}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`assignments/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src='/images/edit.png' alt={'edit'} width={16} height={16}/>
                        </button>
                    </Link>
                    <Link href={`assignments/${item.id}`}>
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

const ExamListPage = () =>
    (
        <div className='mx-4'>
            <Card className='p-4'>
                <TableNavigation title={'All assignments'}/>
                {/*LIST*/}
                <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
                {/*PAGINATION*/}
                <Pagination/>
            </Card>
        </div>
    )

export default ExamListPage