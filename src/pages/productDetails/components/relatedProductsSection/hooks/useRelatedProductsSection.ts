import { useTranslation } from "react-i18next"


const useRelatedProductsSection = () => {
      const { i18n } = useTranslation()
  return {
    i18n
  }
}

export default useRelatedProductsSection