import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                <table id="getRequestData">
                    <tr>
                        <th>Название города</th>
                        <th>Широта</th>
                        <th>Долгота</th>
                        <th>Количество населения</th>
                    </tr>
                    <tr><td>Кировское</td>
                        <td>31</td>
                        <td>23</td>
                        <td>27000</td>
                    </tr> 
                </table>
            </div>
        );
    }
}

export default Table;
