import { render, screen } from "@testing-library/react";
import SummaryPage from "../SummaryPage";
import userEvent from "@testing-library/user-event";

test("주문 확인 체크 박스를 눌러야만 주문 확인 버튼을 누를 수 있다.", () => {
  render(<SummaryPage />);

  const checkBoxElement = screen.getByRole("checkbox");
  const submitButtonElement = screen.getByRole("button", { name: /submit/i });

  expect(submitButtonElement).toBeDisabled();
  userEvent.click(checkBoxElement);

  if (checkBoxElement.getAttribute("checked")) {
    userEvent.click(submitButtonElement);
  }

  expect(submitButtonElement).toBeEnabled();
});
