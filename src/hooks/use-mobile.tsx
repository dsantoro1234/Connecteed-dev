
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to check if the device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Check immediately on mount
    checkIsMobile()

    // Set up event listener for resize
    window.addEventListener("resize", checkIsMobile)
    
    // Clean up event listener
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return !!isMobile
}
