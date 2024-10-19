export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-row items-center justify-center py-9 text-lg sm:justify-between">
      <span>copyright &#169; {currentYear}</span>
      <span className="hidden sm:flex">all rights reserverd</span>
    </footer>
  );
}
