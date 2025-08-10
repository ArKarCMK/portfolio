import { useEffect } from "react"
import data from "../../data/about.json"

export const usePageTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `${data.name} | ${pageTitle}`
  }, [pageTitle])
}