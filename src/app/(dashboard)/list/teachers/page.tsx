import Card from "@/components/Card";
import Pagination from "@/components/tables/Pagination";
import Table from "@/components/tables/Table";
import Image from "next/image";
import Link from "next/link";
import {role, teachersData} from "@/lib/data";
import {TeacherProps} from "@/types/index.d";
import TableNavigation from "@/components/tables/TableNavigation";

const columns = [
    {
        header: 'Info',
        accessor: 'info',
    },
    {
        header: 'Teacher ID',
        accessor: 'teacherId',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Subjects',
        accessor: 'subjects',
        className: 'hidden md:table-cell',
    },
    {
        header: 'Classes',
        accessor: 'classes',
        className: 'hidden md:table-cell',
    },
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

const renderRow = (item: TeacherProps) =>
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
            <td className='hidden md:table-cell'>{item.teacherId}</td>
            <td className='hidden md:table-cell'>{item.subjects.join(',')}</td>
            <td className='hidden md:table-cell'>{item.classes.join(',')}</td>
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden md:table-cell'>{item.address}</td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`teachers/${item.id}`}>
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
                {/*TOP*/}
                <TableNavigation title={'All teachers'}/>
                {/*LIST*/}
                <Table columns={columns} renderRow={renderRow} data={teachersData}/>
                {/*PAGINATION*/}
                <Pagination/>
            </Card>
        </div>
    )

export default TeacherListPage