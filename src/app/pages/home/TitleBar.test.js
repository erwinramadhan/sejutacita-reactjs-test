import TitleBar from "./TitleBar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Titlebar renders with correct bookmark list button", () => {
  const { getByTestId } = render(<TitleBar />);
  const bookmarkListBtnEl = getByTestId("bookmarkListBtn");

  expect(bookmarkListBtnEl.textContent).toBe("Bookmark List")
})