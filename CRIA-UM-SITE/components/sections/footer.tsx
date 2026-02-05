import { GradientText } from "@/components/gradient-text"

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <GradientText>Vibe</GradientText>
              <span className="text-white">Coding</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </nav>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Vibe Coding. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
