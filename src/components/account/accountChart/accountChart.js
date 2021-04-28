import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const AccountChart = () => {

    return(
        <div className="main-activity__chart">
            <Doughnut 
            data={
                {
                    labels: ['Done', 'Failed', 'In Process'],
                    datasets: [{
                        label: 'dataset',
                        data: [300, 50, 100],
                        backgroundColor: [
                            '#33e2a0',
                            'red',
                            '#7c60d5'
                        ],
                        hoverOffset: 100,
                        weight: 3
                    }]}
            }    
            options={{
                legend: {
                    display: true
                }
            }}
            />
            
        </div>
    )
}

export default AccountChart;