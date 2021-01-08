import React, {useEffect, useState} from 'react'
import {Company} from '../../services/company'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import {getTrades} from '../../services/trade'

type StockChartProps = {
    company: Company
}
const StockChart = (props: StockChartProps): JSX.Element => {
    const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
        yAxis: [{
            labels: {
                align: 'left'
            },
            height: '80%',
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'left'
            },
            top: '80%',
            height: '20%',
            offset: 0
        }],
        rangeSelector: {
            selected: 1
        },
        credits: {
            enabled: false,
        },
        series: []
    })

    useEffect(() => {
        async function fetchData() {
            const result = await getTrades(props.company.code)
            const closePrices = result.map(d => [d.timestamp, d.closePrice])
            const volumes = result.map(d => [d.timestamp, d.volume])
            setChartOptions({
                series: [
                    {
                        type: 'line',
                        name: 'Close Price',
                        data: closePrices
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: volumes,
                        yAxis: 1
                    }
                ]
            })
        }
        if (props.company.code) {
            fetchData()
        }
    }, [props.company.code])

    return (
        <div className="mt-2">
            <HighchartsReact
                constructorType={'stockChart'}
                highcharts={Highcharts}
                options={chartOptions}
            />
        </div>
    )
}

export default StockChart
