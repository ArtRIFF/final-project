import Input from '../components/formComponent/components/input/Input'
import '@testing-library/jest-dom';
import {render, cleanup} from "@testing-library/react";

afterEach(cleanup);

describe('input component', () => {
  it('lable text', () => {
    const {getByLabelText} = render(<Input label={"text"}/>);
      expect(getByLabelText('text')).toBeInTheDocument();
  })

  it('input Required', () => {

      const {getByTestId} = render(<Input data-testid='test'/>);
      expect(getByTestId('test')).not.toBeRequired();
  })

  it('input visible', () => {

      const {getByTestId} = render(<Input data-testid='test'/>)
      expect(getByTestId('test')).toBeVisible();
  })

  it('input disabled', () => {

      const {getByTestId} = render(<Input data-testid='test'/>)
      expect(getByTestId('test')).not.toBeDisabled();
  })

 
})