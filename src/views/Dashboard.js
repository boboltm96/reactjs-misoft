import React from 'react'
import { Line } from '@ant-design/charts';
import { Statistic, Card, Row, Col, Divider } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'

const MyDashboard = () => {
    const data = [
        { year: '2013', value: -3 },
        { year: '2014', value: 4 },
        { year: '2015', value: -3.5 },
        { year: '2016', value: 5 },
        { year: '2017', value: -4.9 },
        { year: '2018', value: 6 },
        { year: '2019', value: 7 },
        { year: '2020', value: -9 },
        { year: '2021', value: 13 },
      ];
    
      const config = {
        data,
        width: 800,
        height: 400,
        autoFit: true,
        xField: 'year',
        yField: 'value',
        point: {
          size: 5,
          shape: 'diamond',
        },
        label: {
          style: {
            fill: '#aaa',
          },
        },
        tooltip: {
            title: "Revenue (in thousand)",
        }
      };
    
      let chart;

      return (
        <>
            <h1>Dashboard</h1>
            <div className="site-statistic-demo-card">
                <Row gutter={16}>
                <Col span={8}>
                    <Card>
                    <Statistic
                        title="Loss (in thousand)"
                        value={20.4}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix="- MYR"
                        suffix="K"
                    />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                    <Statistic
                        title="Gross Profit (in thousand)"
                        value={35}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix="+ MYR"
                        suffix="K"
                    />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                    <Statistic
                        title="Net Profit (in thousand)"
                        value={14.6}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix="+ MYR"
                        suffix="K"
                    />
                    </Card>
                </Col>
                </Row>
            </div>
            <Divider />
            <h3>Graph</h3>
            <Line {...config} onReady={(chartInstance) => (chart = chartInstance)} />
        </>
      );
}

export default MyDashboard
