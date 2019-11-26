import React, { useCallback } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';

export type PieChartProps = {
  title: string;
  data: {
    name: string;
    value: number;
  }[];
  theme?: 'westeros' | 'roma'
};

const PieChart = ({title, data, theme = 'westeros'}: PieChartProps) => {

  const root = useCallback((el) => {
    if(el) {
      const myChart = echarts.init(el, theme);
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: title,
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }, [data, theme, title]);

  return (
    <div ref={root} style={{width: 400, height: 300}}/>
  );
};

export default PieChart;
