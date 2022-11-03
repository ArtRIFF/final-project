import Button from '../components/button/Button'
import '@testing-library/jest-dom';
import {render, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders with a text", () => {
  const{container}= render(<Button text="Button"/>);
  expect(container.textContent).toBe("Button");
});

it("renders with background", () => {
  const {getByTestId} = render(<Button backgroundColor='brown'/>);
  expect(getByTestId('test')).toHaveStyle('background-color: brown');
});


it('test SnapShot', () => {
  const buttonComp = renderer.create(<Button text="Button" backgroundColor="black"/>).toJSON()
  expect(buttonComp).toMatchSnapshot();
});

