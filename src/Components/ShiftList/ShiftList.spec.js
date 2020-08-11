import { shallow } from 'enzyme'
import React from 'react'
import ShiftList from './ShiftList'
import ShiftListItem from '../ShiftListItem/ShiftListItem'


describe('ShiftList component', () => {
    const mockShifts = [
        {
            "id": "1240",
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
              "name": "The No1 GP"
            },
            "locum": null,
            "hourlyRate": 115,
            "staffType": "gp",
            "staffTypeId": "1"
        },
        {
            "id": "1241",
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
              "name": "The GP of Mediocrity"
            },
            "locum": null,
            "hourlyRate": 115,
            "staffType": "gp",
            "staffTypeId": "1"
        },
        {
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
              "name": "The GP of Misery"
            },
            "locum": null,
            "hourlyRate": 115,
            "staffType": "gp",
            "staffTypeId": "1"
        },
        
    ]
    
    it('render a list of shifts correctly', () => {
        const instance = shallow(<ShiftList shifts={mockShifts} />)
        expect(instance.find(ShiftListItem)).toHaveLength(3)
    });

    it('render a list of shifts correctly - no shifts', () => {
        const instance = shallow(<ShiftList shifts={[]} />)
        expect(instance.text()).toContain('No available shifts')
    });
})