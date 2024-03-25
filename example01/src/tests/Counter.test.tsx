import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../counter/Counter";

// 카운터는 0부터 시작한다.
test("카운터는 0부터 시작한다.", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");
});

// - 버튼이  있다.
test("- 버튼이 있다.", () => {
  render(<Counter />);
  const minusButton = screen.getByRole("button", { name: /minus/i });
  expect(minusButton).toHaveTextContent("-");
});

// + 버튼이 있다.
test("+ 버튼이 있다.", () => {
  render(<Counter />);
  const plusButton = screen.getByRole("button", { name: /plus/i });
  expect(plusButton).toHaveTextContent("+");
});

// + 버튼을 클릭하면 카운터가 1 증가한다.
test("+ 버튼을 클릭하면 카운터가 1 증가한다.", async () => {
  render(<Counter />);
  const plusButton = screen.getByRole("button", { name: /plus/i });
  await waitFor(async () => {
    await userEvent.click(plusButton);
  });

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
});

// - 버튼을 클릭하면 카운터가 1 감소한다.
test("- 버튼을 클릭하면 카운터가 1 감소한다.", async () => {
  render(<Counter />);
  const minusButton = screen.getByRole("button", { name: /minus/i });
  await waitFor(async () => {
    await userEvent.click(minusButton);
  });

  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");
});

// 카운터가 0일 때 - 버튼을 클릭하면 카운터는 0이다.
test("카운터가 0일 때 - 버튼을 클릭하면 카운터는 0이다.", async () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");

  const minusButton = screen.getByRole("button", { name: /minus/i });
  await waitFor(async () => {
    await userEvent.click(minusButton);
  });

  expect(counterElement).toHaveTextContent("0");
});

// on/off 버튼을 클릭하면 +, - 버튼이 비활성화된다.
test("on/off 버튼을 클릭하면 +, - 버튼이 비활성화된다.", async () => {
  render(<Counter />);
  const onOffButton = screen.getByRole("button", { name: /onoff/i });
  await waitFor(async () => await userEvent.click(onOffButton));

  const minusButton = screen.getByRole("button", { name: /minus/i });
  const plusButton = screen.getByRole("button", { name: /plus/i });

  expect(minusButton).toBeDisabled();
  expect(plusButton).toBeDisabled();
});

// on/off 버튼의 배경색은 하얀색이다.
test("on/off 버튼의 배경색은 하얀색이다.", () => {
  render(<Counter />);
  const onOffButton = screen.getByRole("button", { name: /onoff/i });

  expect(onOffButton).toHaveStyle({
    backgroundColor: "white",
  });
});
