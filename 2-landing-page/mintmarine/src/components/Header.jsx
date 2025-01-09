import assets from '../assets'

const Header = () => {
    return (
        <header className="absolute top-8 left-8 z-50 max-lg:top-6 max-md:top-4 max-sm:top-2">
            <img
                src={assets.logo}
                alt="MintMarine Logo"
                className="w-[340px] max-lg:w-[200px] max-md:w-[150px] max-sm:w-[120px] h-auto"
            />
        </header>
    )
}

export default Header