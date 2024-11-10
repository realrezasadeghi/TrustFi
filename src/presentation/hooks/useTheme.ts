import { useContext } from "react"
import { ThemeContext } from "@/presentation/contexts"

const useTheme = () => {
  return useContext(ThemeContext)
}

export default useTheme