import React from 'react'
import HoldingsCard from './HoldingsCard'

export default function HoldingsPage() {

    const holdingItems = [
        {
            "productName": "Crude Oil",
            "NumberOfHoldings": 89,
            "itemPrice": 110.9
        },
        {
            "productName": "Petrol",
            "NumberOfHoldings": 56,
            "itemPrice": 366.9
        },
        {
            "productName": "Diesel",
            "NumberOfHoldings": 72,
            "itemPrice": 73.23
        },
        {
            "productName": "Naptha",
            "NumberOfHoldings": 22,
            "itemPrice": 12.8
        },
    ]

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">

                </div>
            </div>
            <div className="row">
                {holdingItems.map((item) => {
                    return <HoldingsCard item={item}/>
                })}
            </div>
        </div>
    )
}
