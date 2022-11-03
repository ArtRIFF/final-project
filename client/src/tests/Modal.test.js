import Modal from '../components/modal/Modal';

import {cleanup,render} from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders with a header text", () => {
  const{container}= render(<Modal header="header"/>);
  expect(container.textContent).toBe("header");
});

it("renders with a  text", () => {
  const{container}=render(<Modal header="modal" text="text"/> );
  expect(container.textContent).toBe("modaltext");
});

it('test SnapShot', () => {
  const modalComp = renderer.create(<Modal header="header" text="text"><button/></Modal>).toJSON()
  expect(modalComp).toMatchSnapshot(); 
});



