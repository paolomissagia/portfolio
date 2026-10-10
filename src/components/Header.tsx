import { useTyped } from './useTyped'

const COMMANDS = ['cd', 'git', 'sudo', 'docker', 'vim', 'ls', 'tmux']

export function Header() {
  const command = useTyped(COMMANDS)

  return (
    <header className="site-header">
      {/* Decorative: screen readers would hear the command change every few hundred ms. */}
      <span aria-hidden="true">
        pmissagia:~$ <span className="prompt-command">{command}</span>
        <span className="prompt-cursor" />
      </span>
    </header>
  )
}
