import React from 'react';

type Props = {
    id:number
}
const StudentItemPage = ({id}:Props) => {
    return (
        <div>StudentItemPage {id}</div>
    );
}

export default StudentItemPage;