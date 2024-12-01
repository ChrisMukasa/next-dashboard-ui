import Card from "@/components/Card";
import Pagination from "@/components/tables/Pagination";
import Table from "@/components/tables/Table";
import Image from "next/image";
import Link from "next/link";
import {parentsData, role} from "@/lib/data";
import {ParentProps} from "@/types/index.d";
import TableNavigation from "@/components/tables/TableNavigation";

const columns = [
    {
        header: 'Info',
        accessor: 'info',
    },
    {
        header: 'Student Name',
        accessor: 'students',
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

const renderRow = (item: ParentProps) =>
    (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td>
                <div className="flex gap-4 p-4">
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item?.email}</p>
                    </div>
                </div>
            </td>
            <td className='hidden md:table-cell'>{item.students.join(',')}</td>
            {/*<td className='hidden md:table-cell'>{item.class}</td>*/}
            <td className='hidden md:table-cell'>{item.phone}</td>
            <td className='hidden md:table-cell'>{item.address}</td>
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

const ParentListPage = () =>
    (
        <div className='mx-4'>
            <Card className='p-4'>
                {/*TOP*/}
                <TableNavigation title={'All parents'}/>
                {/*LIST*/}
                <Table columns={columns} renderRow={renderRow} data={parentsData}/>
                {/*PAGINATION*/}
                <Pagination/>
            </Card>
        </div>
    )

export default ParentListPage