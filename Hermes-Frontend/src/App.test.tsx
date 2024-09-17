import { screen, waitFor } from "@testing-library/react"
import App from "./App"
import { renderWithProviders } from "./utils/test-utils"

test("App should have correct initial render", () => {
  renderWithProviders(<App />)

  // The app should be rendered correctly
  expect(screen.getByText(/learn/i)).toBeInTheDocument()

  // Initial state: count should be 0, incrementValue should be 2
  expect(screen.getByLabelText("Count")).toHaveTextContent("0")
  expect(screen.getByLabelText("Set increment amount")).toHaveValue(2)
})
