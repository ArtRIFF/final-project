import CategoryFilter from '../pages/CatalogSectionPage/components/CategoryFilter/CategoryFilter'
import '@testing-library/jest-dom';
import { render, cleanup, screen, fireEvent} from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

const onClickFunc = jest.fn();
const filterRequest = jest.fn();

const renderComponent = () => {
  return (render(<CategoryFilter
    onClickFunc={onClickFunc}
    setResult={10}
    filterRequest={filterRequest}
    allCollectionArray={[
      {
        statusProduct: 'NEW',
        currentPrice: 12
      },
      {
        statusProduct: 'BESTSELLER',
        currentPrice: 6
      },
      {
        statusProduct: 'BESTSELLER',
        currentPrice: 3
      }

    ]}
    hasAnyFilters={true}
  />))
}

it("renders with snapshot", () => {
  const categoryFilter = renderer.create(<CategoryFilter
    onClickFunc={onClickFunc}
    setResult={10}
    filterRequest={filterRequest}
    allCollectionArray={[]}
  />).toJSON()
  expect(categoryFilter).toMatchSnapshot();
});

it("renders first result from arrayCollection", () => {
  renderComponent();
  expect(screen.getByText("3")).toBeInTheDocument();
});

it("test onclick event", () => {
  renderComponent();
  fireEvent.click(screen.getByText(/Filter/i))
  expect(onClickFunc).toHaveBeenCalled();
});

it("test onchange event", () => {
  renderComponent();
  const selectElem = screen.getByTestId("select-sortBy");
  fireEvent.change(selectElem, { target: { value: 'price' } });
  expect(filterRequest).toHaveBeenCalledTimes(1);
});