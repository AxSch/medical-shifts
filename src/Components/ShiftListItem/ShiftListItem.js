import React from 'react'

const ShiftListItem = ({ shift }) => {
    const shiftStartDate = new Date(shift.startDatetime).toLocaleDateString()
    const shiftStartDateTime = new Date(shift.startDatetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const shiftEndDate = new Date(shift.endDatetime).toLocaleDateString()
    const shiftEndDateTime = new Date(shift.endDatetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
    return (
        <div className="m-3 bg-secondary p-3 rounded-lg" key={shift.id}>
            <div className="flex flex-row text-gray-700 text-xl font-medium">
                <h1>{shift.practice.name}</h1>
            </div>
            <div id="shiftPosition" className="text-sm text-gray-700 mt-2">
                <span>Position available: {shift.staffType.toUpperCase()}</span>
            </div>
            <div id="shift-metadata" className="flex flex-row text-xs justify-between flex-wrap text-gray-700 pt-6 pb-2">
                <span>Rate: <b>£{shift.hourlyRate} p/h</b></span>
                <span>Start: {`${shiftStartDateTime} on ${shiftStartDate}`}</span>
                <span>End: {`${shiftEndDateTime} on ${shiftEndDate}`}</span>
                <span>No. of applicants: {shift.applicationIds.length}</span>
            </div>
        </div>
        
    )
}

export default ShiftListItem
