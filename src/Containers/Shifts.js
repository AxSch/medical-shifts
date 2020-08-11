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
            error:[]
        }
    }

    async fetchShifts() {
        try {
            const res = await fetchShiftsAPI()
            this.setState({ shifts: res.data })
        } catch (error) {
            this.setState({ error: JSON.stringify(error) })
        }

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
                <div>List</div>
            </>
        )
    }
}
export default Shifts
