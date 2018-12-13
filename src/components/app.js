

import React from 'react';
import Table from './table';

const students=[
        {
            name: 'Jordan',
            course: 'OOP',
            grade: 90,
        },
        {
            name: 'Justen',
            course: 'React',
            grade: 86,
        },
        {
            name: 'Capo',
            course: 'Node.js',
            grade: 89,
        }
        ];




export default () =>{
    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

