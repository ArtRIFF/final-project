import CategoryFilter from '../pages/CatalogSectionPage/components/CategoryFilter/CategoryFilter'
import '@testing-library/jest-dom';
import {render, cleanup,screen} from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

const onClickFunc = jest.fn();
const filterRequest = jest.fn();

const renderComponent = () => {
return(render(<CategoryFilter
    onClickFunc = {onClickFunc}
    setResult = {10}
    filterRequest = {filterRequest}
    allCollectionArray = {[]}
  />))
}

it("renders with a text result", () => {
  // expect(screen.getByText("10")).toBeInTheDocument();
  const categoryFilter = renderer.create(<CategoryFilter
    onClickFunc = {onClickFunc}
    setResult = {10}
    filterRequest = {filterRequest}
    allCollectionArray = {[]}
  />).toJSON()
  expect(categoryFilter).toMatchSnapshot();
});
