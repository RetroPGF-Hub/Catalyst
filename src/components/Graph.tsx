import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import { SeriesGraphType } from '../types/impactCata'

interface ProjectData {
  'Download': number[]
  'Total Forks': number[]
  'Total Stars': number[]
}

const TempGraph = ({
    staredArr,
    forkedArr,
    downloadArr,
}
:{
    staredArr:SeriesGraphType
    forkedArr:SeriesGraphType
    downloadArr:SeriesGraphType
}) => {
  const metrics = ['Download', 'Total Forks', 'Total Stars']

  const [currentMetric, setCurrentMetric] = useState<string>('Download')
  const [options, setOptions] = useState<Highcharts.Options>({})
  const [mockData, setMockData] = useState<SeriesGraphType>(downloadArr)

//   console.log(currentMetric)
// console.log(mockData)
  useEffect(() => {
    setOptions(prev => {
        return {
            chart: {
              type: 'area',
              height: 450,
            },
            title: {
              text: 'Impact Calculator',
              align: 'center',
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              x: 0,
              y: 0,
              floating: false,
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
            },
            xAxis: {
              title: {
                text: 'Month',
              },
            },
            yAxis: {
              title: {
                text: `${currentMetric}`,
              },
            },
            tooltip: {
              shared: true,
              valueSuffix: '',
              headerFormat: '<b>Month {point.x}</b><br>',
            },
            credits: {
              enabled: false,
            },
            plotOptions: {
              series: {
                pointStart: 1,
              },
              areaspline: {
                fillOpacity: 0.03,
              },
            },
            series: mockData
          }
    })
  }, [mockData, currentMetric])


  console.log(staredArr)
  console.log(forkedArr)
  console.log(downloadArr)

  const selectMetric = (metric:string) => {
    
    if(metric === "Download"){
        setMockData(downloadArr)
    }
    if(metric === "Total Forks") {
        setMockData(forkedArr)
    }
    if(metric === "Total Stars"){
        setMockData(staredArr)
    }
    console.log(mockData)
    setCurrentMetric(metric)
  }

  return (
    <div>
      <div className="mx-40">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className="text-center mt-4 mb-12"></div>
      <div className="flex flex-row justify-center space-x-10 mt-4">
        {metrics.map((metric, index) => (
          <button
            key={index}
            className="btn px-4 border-2 rounded-lg"
            onClick={() => selectMetric(metric)}
            value={metric}
          >
            {metric}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TempGraph
