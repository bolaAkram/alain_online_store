import { Input } from '@nextui-org/react'
import { t } from 'i18next'
import SearchIcon from '../../../../../assets/svg/components/SearchIcon'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../routing/Routes'

const GlobalSearch = () => {
    return (
        <>
            <Input
                classNames={{
                    base: "max-w-full w-[15rem] sm:max-w-[20rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                        "rounded-full border border-1 h-full font-normal text-default-500 bg-transparent dark:bg-default-500/20",
                }}
                placeholder={t("let-us-help-you-by-search")}
                size="sm"
                startContent={
                    <Link to={ROUTES.PRODUCTS_FILTER}>
                      <SearchIcon />
                    </Link>
              
            }
                type="search"
            />
        </>
    )
}

export default GlobalSearch