import React, { Component } from 'react'
import ShiftList from '../Components/ShiftList/ShiftList'
import fetchShiftsAPI from '../api/api'

class Shifts extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                id: '1234',
                firstName: 'John',
                lastName: 'Doe',
                staffType: 'gp',
                staffTypeId: '1',
            },
            shifts: [],
            error: []
        }
    }

    async fetchShifts() {
        try {
            const res = await fetchShiftsAPI()
            const filteredData = this.filterData(res.data)
            this.setState({ shifts: filteredData })
        } catch (error) {
            this.setState({ error: JSON.stringify(error) })
        }

    }

    filterData(data) {
        const { user } = this.state
        const currentDate = new Date()

        return data.filter(entry => {
            const entryStartDate = new Date(entry.startDatetime)
            if (entry.status === "POSTED" &&
                entry.locum === null &&
                entry.staffType === user.staffType &&
                entryStartDate >= currentDate) {
                return entry
            }
        })
    }

    componentDidMount() {
        this.fetchShifts()
    }


    render() {
        const { shifts } = this.state

        return (
            <>
                <div className="flex flex-row text-gray-700 text-xl p-3">
                    <h1>Available Shifts</h1>
                </div>
                <span id="results" className="p-3 text-sm text-gray-700">showing {shifts.length} results</span>
                <ShiftList shifts={shifts} />
            </>
        )
    }
}
export default Shifts
