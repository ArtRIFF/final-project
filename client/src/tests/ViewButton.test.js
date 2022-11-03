import ViewButton from '../components/header/viewButton/ViewButton'
import '@testing-library/jest-dom';
import {render, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders with an id", () => {
  const{getByTestId}= render(<ViewButton idComponent='test-id' />);
  expect(getByTestId('test').id).toBe('test-id');
});


it("renders with active", () => {
  const {getByTestId} = render(<ViewButton isActive={true}/>);
  expect(getByTestId('test')).toHaveStyle('color: gold');
});


it('test SnapShot', () => {
  const buttonComp = renderer.create(<ViewButton idComponent='test-element' active={true}/>).toJSON()
  expect(buttonComp).toMatchSnapshot();
});

