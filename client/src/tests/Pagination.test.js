import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setCurrentPage } from "../pages/CatalogSectionPage/CatalogSectionPage";
import Pagination from "../pages/CatalogSectionPage/components/Pagination/Pagination";

describe("Pagination renders correctly", () => {
  it("Pagination with 0 elements", () => {
    const view = render(
      <BrowserRouter>
        <Pagination
          itemsPerPage={12}
          totalItems={0}
          setCurrentPage={setCurrentPage}
          allCollectionArrayIsFiltered={false}
        ></Pagination>
        ;
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("Pagination with 24 elements", () => {
    const view = render(
      <BrowserRouter>
        <Pagination
          itemsPerPage={12}
          totalItems={24}
          setCurrentPage={setCurrentPage}
          allCollectionArrayIsFiltered={false}
        ></Pagination>
        ;
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
