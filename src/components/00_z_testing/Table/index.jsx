import React from 'react';
// useTable
const tableTemplate = {
    className: "table",
    dataObj: [
        {company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany"},
        {company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico"}
    ]
};

export default function Table(tableInfo = tableTemplate) {
    return (
        <table className={tableInfo.className}>
            <tr>
                {tableInfo.dataObj.keys().map((header)=> {
                    return <th> {header} </th>
                })}
            </tr>
            {tableInfo.dataObj.map((objItem) => {
                return (
                    <tr>
                        {objItem.map((info) => {
                            return <td> {info} </td>
                        })}
                    </tr>
                )
            })}
        </table>
    )
};
