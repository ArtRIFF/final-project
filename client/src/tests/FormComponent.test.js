import FormComponent from '../components/formComponent/FormComponent'
import {render, cleanup} from "@testing-library/react";

import {store} from "../store";
import {Provider} from 'react-redux';

afterEach(cleanup);

describe('FormComponent component', () => {
  it('find input type', () => {
    const {container} = render(<Provider store={store}><FormComponent/></Provider>);
      const professionInput = container.querySelector('[name="firstName"]').type;
      expect(professionInput).toBe("text")
  })

  it('find button submit', () => {
    const {container} = render(<Provider store={store}><FormComponent/></Provider>);
      const professionInput = container.querySelector('[value="Checkout"]').type;
      expect(professionInput).toBe("submit")
  })
})

