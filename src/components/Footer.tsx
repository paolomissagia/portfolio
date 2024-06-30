export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-t-accent py-4 sm:py-8 text-xl">
            <div className="flex flex-row justify-between">
                <span>copyright &#169; {currentYear}</span>
                <span>all rights reserverd</span>
            </div>
        </footer>
    )
}
