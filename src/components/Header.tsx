import { ReactTyped } from "react-typed";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-center py-4 text-lg sm:py-9">
      pmissagia:~$
      <ReactTyped
        className="text-secondary"
        strings={["cd", "git", "sudo", "docker", "vim", "ls", "tmux"]}
        typeSpeed={120}
        backSpeed={120}
        loop
      />
    </header>
  );
}
