export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-t-accent py-4 sm:py-8 text-xl">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <span>copyright &#169; {currentYear}</span>
                <span className="hidden sm:flex">all rights reserverd</span>
            </div>
        </footer>
    )
}
