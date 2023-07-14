import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import TravelDuration from "../TravelDuration";

const date1 = "2018-07-06";
const date2 = "2019-08-07";

describe("TravelDuration", () => {
  it("should render TravelDuration component", () => {
    render(<TravelDuration startDateStr={date1} endDateStr={date2} />);

    expect(screen.getByText("06/07/2018 to 07/08/2019")).toBeDefined();

    // screen.debug();
  });
});
