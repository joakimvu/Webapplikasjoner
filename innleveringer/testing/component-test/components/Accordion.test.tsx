import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Accordion from "./Accordion";

// tutorial from
// https://www.eternaldev.com/blog/testing-a-react-application-with-vitest/

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="Testing">
        <h4>Content</h4>
      </Accordion>
    );
  });

  test.skip("should show title all the time", () => {
    expect(screen.getByText(/Testing/i)).toBeInTheDocument();
  });

  test.skip("should not show the content at the start", () => {
    expect(screen.queryByText(/Content/i)).not.toBeInTheDocument();
  });

  test.skip("should show the content on accordion click", async () => {
    const title = screen.getByText(/Show/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Content/i)).toBeInTheDocument();
  });
});
