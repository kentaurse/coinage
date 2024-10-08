import React from 'react';
import { shallow } from 'enzyme';
import ControlPanel from '../components/ControlPanel';

const minProps = { selectCoins: [{ id: 9, code: 'GNT', name: 'Golem' }] };
const controlPanel = shallow(<ControlPanel { ...minProps } />);

describe("ControlPanel component", () => {
  it("renders correctly", () => {
    expect(controlPanel).toMatchSnapshot();
  });

  it("add click shows add coins items", () => {
    expect(controlPanel.find('.add-coins').length).toBe(0);
    controlPanel.setProps({addOpen: true});
    expect(controlPanel.find('.add-coins').length).toBe(1);
  });

});