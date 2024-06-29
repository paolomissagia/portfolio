export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-t-accent py-8">
            <div className="flex flex-row justify-between pb-8">
                <span>copyright &#169; {currentYear}</span>
                <span>all rights reserverd</span>
            </div>
        </footer>
    )
}
