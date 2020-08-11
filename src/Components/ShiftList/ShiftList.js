import React from 'react'


const ShiftList = ({ shifts }) => {
    if (shifts && shifts.length > 0) {
        return shifts.map((shift, key) => {
            return (
                <div key={key}>{shift.id}</div>
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
