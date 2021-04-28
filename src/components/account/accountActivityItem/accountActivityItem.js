import React from 'react';
import Tooltip from '../../tooltip';

export default class AccountActivityItem extends React.Component {
    render() {
        const {typeOfOperaiton, count, data, statusOfOperation, statusClass} = this.props;

        return(
            <tr className="main-activity__table-row">
                <td className={"main-activity__table-cell " + statusClass}>
                {typeOfOperaiton}
                </td>
                <td className={"main-activity__table-cell " + statusClass}>
                    {count}
                </td>
                <td className={"main-activity__table-cell " + statusClass}>
                    {data}
                </td>
                <td className={"main-activity__table-cell " + statusClass}>
                    <Tooltip text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui rem mollitia fugit doloribus nesciunt repellat temporibus quisquam hic aliquid, suscipit similique officiis dicta commodi consectetur, eum adipisci quam maiores labore!"}>
                        <span className="none">{statusOfOperation}</span>
                    </Tooltip>
                </td>
            </tr>
        )
    }
}