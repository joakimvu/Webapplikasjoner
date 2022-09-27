import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Counter } from "./Counter";

describe("Testing Counter component", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test("Should return a Count is: 0", () => {
    expect(document.querySelector("p")).toHaveTextContent("Count is: 0");
  });

  test("Should increase when pressing + button", () => {
    fireEvent.click(screen.getByText("+"));
    expect(document.querySelector("p")).toHaveTextContent("Count is: 1");
  });

  test("Should decrese when pressing - button", () => {
    fireEvent.click(screen.getByText("-"));
    expect(document.querySelector("p")).toHaveTextContent("Count is: -1");
  });
});
