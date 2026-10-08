export default function NotFound() {
  return (
    <section className="flex flex-col gap-5 text-lg sm:text-xl">
      <h1 className="text-3xl sm:text-[38px]/9">404</h1>
      <p>bash: this page: No such file or directory</p>
      <p>
        <a className="text-secondary underline" href="/">
          cd ~
        </a>
      </p>
    </section>
  );
}
