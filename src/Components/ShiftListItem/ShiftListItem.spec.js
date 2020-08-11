import { shallow } from 'enzyme'
import React from 'react'
import ShiftListItem from './ShiftListItem'


describe('ShiftListItem component', () => {
    const mockShift = {
        "id": "1242",
        "status": "POSTED",
        "startDatetime": "2020-08-21T09:30:00+00:00",
        "endDatetime": "2020-08-21T20:30:00+00:00",
        "applicationIds": [
          5512,
          5517,
          5519,
          5590
        ],
        "practice": {
          "id": "11812",
          "name": "The GP of Deus"
        },
        "locum": null,
        "hourlyRate": 115,
        "staffType": "gp",
        "staffTypeId": "1"
    }

    it('renders successfully', () => {
        expect(shallow(<ShiftListItem shift={mockShift} />).length).toEqual(1)
    });

    it('renders book correctly', () => {
        const instance = shallow(<ShiftListItem shift={mockShift} />)
        expect(instance.find('h1').html()).toContain(mockShift.practice.name)
        expect(instance.find('#shift-position').html()).toContain(`Position available: ${mockShift.staffType.toUpperCase()}`)
        expect(instance.find('#shift-metadata').children()).toHaveLength(4)
    });
})