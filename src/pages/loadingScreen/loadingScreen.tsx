import { Spinner } from "@nextui-org/react"


const LoadingScreen = () => {
  return (
    <div className="absolute inset-0 bg-background/40 z-50 flex justify-center items-center">
    <Spinner color="secondary" size="lg" label="Loading..." labelColor="secondary" />
    </div>
  )
}

export default LoadingScreen