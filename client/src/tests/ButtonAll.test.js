import ButtonAll from '../components/Button/ButtonAll/ButtonAll'
import '@testing-library/jest-dom';
import {render, cleanup,screen} from "@testing-library/react";

afterEach(cleanup);

it("renders with a text", () => {
  const{container}= render(<ButtonAll text="Button"/>);
  expect(container.textContent).toBe("Button");
});


it("renders with class name", () => {
  render(<ButtonAll text="Button" className="button-class"/>);
  const buttonText = screen.getByText('Button');
  expect(buttonText.className).toBe("button-class");
});