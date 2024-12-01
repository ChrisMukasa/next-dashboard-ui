import Card from "@/components/Card";
import Pagination from "@/components/tables/Pagination";
import Table from "@/components/tables/Table";
import Image from "next/image";
import Link from "next/link";
import { resultsData, role} from "@/lib/data";
import { ResultProps} from "@/types/index.d";
import TableNavigation from "@/components/tables/TableNavigation";

const columns = [
    {
        header: 'Subject',
        accessor: 'subject',
    },
    {
        header: 'Student',
        accessor: 'student',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Score',
        accessor: 'score',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Teacher',
        accessor: 'teacher',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Class',
        accessor: 'class',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Date',
        accessor: 'date',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Actions',
        accessor: 'actions',
    },
]

const renderRow = (item: ResultProps) =>
    (
        <tr key={item.id} className='py-4 border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='p-4 font-bold'>{item.subject}</td>
            <td className='hidden md:table-cell font-bold'>{item.student}</td>
            <td className='hidden md:table-cell font-bold'>{item.score}</td>
            <td className='hidden md:table-cell font-bold'>{item.teacher}</td>
            <td className='hidden md:table-cell font-bold'>{item.class}</td>
            <td className='hidden md:table-cell font-bold'>{item.date}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`parents/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaYellow">
                            <Image src='/images/edit.png' alt={'edit'} width={16} height={16}/>
                        </button>
                    </Link>
                    <Link href={`parents/${item.id}`}>
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

const TeacherListPage = () =>
    (
        <div className='mx-4'>
            <Card className='p-4'>
                <TableNavigation title={'All results'}/>
                {/*LIST*/}
                <Table columns={columns} renderRow={renderRow} data={resultsData}/>
                {/*PAGINATION*/}
                <Pagination/>
            </Card>
        </div>
    )

export default TeacherListPage