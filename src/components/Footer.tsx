export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex flex-row items-center justify-center sm:justify-between py-8 text-lg">
            <span>copyright &#169; {currentYear}</span>
            <span className="hidden sm:flex">all rights reserverd</span>
        </footer >
    )
}
