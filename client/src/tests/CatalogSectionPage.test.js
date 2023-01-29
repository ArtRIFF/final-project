import CatalogSectionPage from "../pages/CatalogSectionPage/CatalogSectionPage";
import "@testing-library/jest-dom";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store/store";

import LoadingSpinner from "../pages/CatalogSectionPage/components/LoadingSpinner/LoadingSpinner";


afterEach(cleanup);

it("renders with snapshot", () => {
  const catalogSectionPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <CatalogSectionPage />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(catalogSectionPage).toMatchSnapshot();
});

describe("CatalogSectionPage works correctly", () => {
  it("CatalogSectionPage renders", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CatalogSectionPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

 
});
