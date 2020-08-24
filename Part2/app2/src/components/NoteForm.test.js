import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NoteForm from "./NoteForm";

test("<NoteForm /> updates parent state and calls onSubmit", () => {
  const addNote = jest.fn();

  const component = render(<NoteForm addNote={addNote} />);

  const input = component.container.querySelector("input");
  const form = component.container.querySelector("form");

  fireEvent.change(input, {
    target: { value: "testing of forms could be easier" },
  });
  fireEvent.submit(form);

  expect(addNote.mock.calls).toHaveLength(1);
  expect(addNote.mock.calls[0][0].content).toBe(
    "testing of forms could be easier"
  );
});
