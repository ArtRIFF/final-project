import AsideFilter from '../pages/CatalogSectionPage/components/AsideFilter/AsideFilter';
import CategoryFilter from '../pages/CatalogSectionPage/components/CategoryFilter/CategoryFilter';
import '@testing-library/jest-dom';
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';

afterEach(cleanup);

const onClickFunc = jest.fn();
const filterRequest = jest.fn();
const asideFilterRequest = jest.fn();

const renderAsideFilterComponent = () => {
  return (render(<AsideFilter
    filterRequest={asideFilterRequest}
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
  />))
}

const renderCategoryFilterComponent = () => {
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
  const categoryFilter = renderer.create(<AsideFilter
    filterRequest={filterRequest}
    allCollectionArray={[]}
  />).toJSON()
  expect(categoryFilter).toMatchSnapshot();
});

it("test onclick event", () => {
  renderCategoryFilterComponent();
  renderAsideFilterComponent();
  fireEvent.click(screen.getByText(/Reset all/i))
  expect(asideFilterRequest).toHaveBeenCalled();
});