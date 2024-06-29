import Divider from "./Divider"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-t-accent py-8">
            <div className="flex flex-row justify-between pb-8">
                <span>Copyright &#169; {currentYear}</span>
                <span>All rights reserverd</span>
            </div>
        </footer>
    )
}
