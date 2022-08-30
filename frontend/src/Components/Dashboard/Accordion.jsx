import { Collapse } from 'antd';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import json from '../../locales/dashboard.json'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { ReactNode } from 'react';

const { Panel } = Collapse;

export default function Accordion(){
    return(
        json.map(item =>{
            return(
                <Collapse className='accordions' ghost={true} bordered={false} defaultActiveKey={['1']} expandIcon={(panelProps) => ReactNode}>
                <Panel className='accordion-header' header={item.symbol} key={item.id}>
                    <TradingViewWidget
                        symbol={item.symbol}
                        theme={Themes.DARK}
                        locale='uk'
                        width='autosize'
                    />
                </Panel>
        
            </Collapse>
            )
        })
    )
}