import { shallow, mount } from 'enzyme'
import React from 'react'
import Shifts from './Shifts'
import ShiftList from '../Components/ShiftList/ShiftList'


describe('Shifts container', () => {
    it('should render successfully', () => {
        expect(shallow(<Shifts />).length).toEqual(1)
    });

    it('should render the ShiftList component', () => {
        const instance = shallow(<Shifts />)
        expect(instance.find(ShiftList)).toHaveLength(1)
    });

    it('should load the ShiftData via componentDidMount', () => {
        const mockState = {
            "user": {
                "id": '1234',
                "firstName": 'John',
                "lastName": 'Doe',
                "staffType": 'gp',
                "staffTypeId": '1',
            },
            "shifts": [],
            "error": []
        }
        const fetchSpy = jest.spyOn(Shifts.prototype, 'fetchShifts')
        const instance = mount(<Shifts />)
        expect(fetchSpy).toHaveBeenCalled()
        expect(instance.state()).toEqual(mockState)
        instance.unmount()
    });

});
