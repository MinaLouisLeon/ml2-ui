import React from 'react';
import Table from './Table';

export default {
    title : 'Table',
    component : Table,
    argTypes : {onDataChange : {action : 'new data after change :'}}
}

const Template = (args) => <Table {...args} />

export const TableComponent = Template.bind({});
TableComponent.args={
    columns:[
        {
            name : "ID",
            dataIndex : "id"
        },{
            name : "First Name",
            dataIndex : 'fname'
        },{
            name : "Last Name",
            dataIndex : "lname"
        },{
            name : "Age",
            dataIndex : 'age'
        }
    ],
    dataSource : [{
        id : 1,
        fname : "Mike",
        lname : "Nelson",
        age : 28
    },{
        id:2,
        lname:"Chad",
        fname:"Kyle",
        age:26
    }],
    enableEdit : true,
    enableDelete : true,
    enbaleInsert : true
}

export const SimpleTable = Template.bind({});
SimpleTable.args={
    columns:[
        {
            name : "ID",
            dataIndex : "id"
        },{
            name : "First Name",
            dataIndex : 'fname'
        },{
            name : "Last Name",
            dataIndex : "lname"
        },{
            name : "Age",
            dataIndex : 'age'
        }
    ],
    dataSource : [{
        id : 1,
        fname : "Mike",
        lname : "Nelson",
        age : 28
    },{
        id:2,
        lname:"Chad",
        fname:"Kyle",
        age:26
    }],
}
