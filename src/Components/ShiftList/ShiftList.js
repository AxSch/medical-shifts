import React from 'react'
import ShiftListItem from '../ShiftListItem/ShiftListItem'


const ShiftList = ({ shifts }) => {
    if (shifts && shifts.length > 0) {
        return shifts.map((shift, key) => {
            return (
                <ShiftListItem shift={shift} key={key} />
            )
        })
    } else {
        return (
            <div className="flex flex-row justify-end lg:flex lg:flex-col lg:items-center text-gray-700 text-xl">
                No available shifts
            </div>
        )
    }
}

export default ShiftList
