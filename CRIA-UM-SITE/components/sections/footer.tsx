"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertCircle, Zap, Sparkles, TrendingUp, DollarSign } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GradientText } from "@/components/gradient-text";
import { useContactModal } from "@/components/contact-modal-context";

export function Footer() {
  const { openModal } = useContactModal();

  return (
    <div className="bg-[#0a0a0a] relative overflow-hidden">

      {/* ----------------------------------------------------------------------- */}
      {/* FONDO GLOBAL                                                            */}
      {/* ----------------------------------------------------------------------- */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] pointer-events-none" />

      {/* ----------------------------------------------------------------------- */}
      {/* 1. SECCIÓN: COMPARATIVA (Wix vs Next.js)                                */}
      {/* ----------------------------------------------------------------------- */}
      <section className="relative z-10 py-20 px-4 md:py-32 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <Badge className="bg-red-500/10 text-red-400 border-red-500/20 px-4 py-2 text-sm mb-6">
                <AlertCircle className="w-4 h-4 mr-2" />
                A verdade sobre construtores tradicionais
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
                Por que <GradientText>construtores tradicionais</GradientText> não entregam resultados <span className="text-white">Enterprise</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xl text-zinc-400 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
              Plataformas como Wix, Wordpress, Hostinger, Base44, Hosgator oferecem soluções rápidas mas não são construídas sobre <span className="text-cyan-400 font-semibold">Next.js</span> nem <span className="text-purple-400 font-semibold">Framer Motion</span>. Isso limita rendimento, personalização e experiência de usuário em projetos Enterprise. Nosso método usa o mesmo stack que entregamos a clientes corporativos para resultados escaláveis e otimizados.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Tarjeta Tradicional */}
            <ScrollReveal delay={0.2}>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                    <X className="w-6 h-6 text-red-400 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">Wix / Wordpress / Hostinger</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      Plantillas e gestores, <span className="text-red-400 font-semibold">NO usam Next.js nem Framer Motion</span>.
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400" /> <span>Sem otimização Enterprise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-400" /> <span>Personalização limitada</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Tarjeta Vibe Coding */}
            <ScrollReveal delay={0.3}>
              <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.1)] h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                    <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      <GradientText>Nosso stack</GradientText>
                    </h3>
                    <p className="text-zinc-300 leading-relaxed text-sm">
                      <span className="text-cyan-400 font-semibold">Next.js</span> + <span className="text-purple-400 font-semibold">Framer Motion</span> = rendimento Enterprise.
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" /> <span>Performance otimizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" /> <span>Animações profissionais</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                onClick={openModal}
              >
                <Zap className="w-5 h-5 mr-2" />
                Aprender o Método Enterprise
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. SECCIÓN: ROI & JUSTIFICATIVA (Completa)                              */}
      {/* ----------------------------------------------------------------------- */}
      <section className="relative z-10 py-20 px-4 md:py-32 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">

          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-2 text-sm mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Retorno garantido
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
                Invista <span className="text-green-400">R$ 197</span> uma vez. Economize <span className="text-white">R$ 5.000+</span> em cada projeto.
              </h2>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                O mercado cobra caro pelo que você pode fazer sozinho. Veja os números reais:
              </p>
            </div>
          </ScrollReveal>

          {/* Bloque 1: Costo del Mercado */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                Quanto você pagaria hoje por um site profissional?
              </h3>
              <p className="text-center text-zinc-400 mb-8 max-w-2xl mx-auto">
                Estes são os valores praticados por agências e freelancers no Brasil em 2025-2026:
              </p>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-6 font-semibold text-white">Tipo de Projeto</th>
                      <th className="p-6 font-semibold text-right text-white">Valor Cobrado</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-white/5">
                      <td className="p-6">Landing Page Profissional</td>
                      <td className="p-6 text-right font-mono">R$ 497 - R$ 7.100</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6">Site Institucional Básico</td>
                      <td className="p-6 text-right font-mono">R$ 2.500 - R$ 7.000</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6">Site Next.js Customizado</td>
                      <td className="p-6 text-right font-mono">R$ 3.000 - R$ 15.000</td>
                    </tr>
                    <tr className="bg-red-500/5">
                      <td className="p-6 font-bold text-white">Média por projeto:</td>
                      <td className="p-6 text-right font-bold text-red-400 text-xl">R$ 5.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-zinc-500 flex items-center justify-center gap-2">
                <DollarSign className="w-4 h-4 text-red-400" />
                E você paga isso cada vez que precisa de um novo site.
              </p>
            </div>
          </ScrollReveal>

          {/* Bloques 2 y 3: Economía y ROI */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Columna Economía */}
            <ScrollReveal delay={0.2}>
              <div className="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Com <GradientText>Vibe Coding</GradientText>, você faz tudo isso sozinho.
                  </h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-zinc-300">
                      <div className="p-1 bg-green-500/20 rounded-full mt-1">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span>Landing page premium → Economize <span className="text-green-400 font-mono">R$ 2.500 - R$ 7.100</span></span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-300">
                      <div className="p-1 bg-green-500/20 rounded-full mt-1">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span>Site Next.js institucional → Economize <span className="text-green-400 font-mono">R$ 3.000 - R$ 7.000</span></span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                  <p className="font-semibold text-white">Faça apenas 1 projeto e você já recuperou o investimento.</p>
                  <p className="text-sm text-zinc-400 mt-1">A partir do segundo, é lucro puro.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Columna ROI */}
            <ScrollReveal delay={0.3}>
              <div className="h-full backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-20">
                  <TrendingUp className="w-24 h-24 text-green-500" />
                </div>
                <Badge className="bg-green-500 text-black border-none mb-6 font-bold">ROI COMPROVADO</Badge>
                <h3 className="text-4xl font-bold mb-2 text-white">ROI de 234%</h3>
                <p className="text-zinc-400 mb-8">no primeiro projeto</p>

                <div className="space-y-3 font-mono text-sm border-t border-white/10 pt-6">
                  <div className="flex justify-between text-zinc-400">
                    <span>Investimento no Vibe Coding:</span>
                    <span>R$ 297</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Economia no 1º projeto:</span>
                    <span className="text-green-400">R$ 5.000</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-white/10">
                    <span>Retorno líquido:</span>
                    <span>R$ 3.503</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-zinc-300 text-sm mb-2">Cenário real em 1 ano (3 projetos):</p>
                  <p className="text-2xl font-bold text-white">Lucro líquido: <span className="text-green-400">R$ 13.503</span></p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bloque 4: Tabla Comparativa Soluciones */}
          <ScrollReveal delay={0.4}>
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-white">
                Compare: quanto você vai gastar nos próximos 12 meses?
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-white/10">
                <table className="w-full text-left border-collapse bg-white/5 backdrop-blur-xl min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-6 font-semibold text-white">Solução</th>
                      <th className="p-6 font-semibold text-center text-white">Custo Anual</th>
                      <th className="p-6 font-semibold text-center text-white">Autonomia</th>
                      <th className="p-6 font-semibold text-center text-white">Escalabilidade</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base text-zinc-300">
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-medium text-white">Contratar Freelancer (3 proj)</td>
                      <td className="p-6 text-center">R$ 7.500</td>
                      <td className="p-6 text-center text-red-400"><div className="flex flex-col items-center"><X className="w-4 h-4 mb-1" /> Zero</div></td>
                      <td className="p-6 text-center text-red-400"><div className="flex flex-col items-center"><X className="w-4 h-4 mb-1" /> Depende sempre</div></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-medium text-white">Agência (2 projetos)</td>
                      <td className="p-6 text-center">R$ 10k - R$ 30k</td>
                      <td className="p-6 text-center text-red-400"><div className="flex flex-col items-center"><X className="w-4 h-4 mb-1" /> Total dependência</div></td>
                      <td className="p-6 text-center text-red-400"><div className="flex flex-col items-center"><X className="w-4 h-4 mb-1" /> Custo proibitivo</div></td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 font-medium text-white">Wix/WordPress Pro</td>
                      <td className="p-6 text-center">R$ 2.400 - R$ 6.000</td>
                      <td className="p-6 text-center text-yellow-500"><div className="flex flex-col items-center"><AlertCircle className="w-4 h-4 mb-1" /> Limitada</div></td>
                      <td className="p-6 text-center text-yellow-500"><div className="flex flex-col items-center"><AlertCircle className="w-4 h-4 mb-1" /> Preso em templates</div></td>
                    </tr>
                    <tr className="bg-green-500/10 text-white font-medium">
                      <td className="p-6 text-lg"><GradientText>Vibe Coding</GradientText></td>
                      <td className="p-6 text-center text-green-400 font-bold">R$ 197 (único)</td>
                      <td className="p-6 text-center text-green-400"><div className="flex flex-col items-center"><Check className="w-4 h-4 mb-1" /> 100% sua</div></td>
                      <td className="p-6 text-center text-green-400"><div className="flex flex-col items-center"><Check className="w-4 h-4 mb-1" /> Ilimitada</div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-zinc-400 text-sm">
                <span className="text-yellow-400">💡</span> A diferença? Com Vibe Coding, você paga uma vez e usa para sempre.
              </p>
            </div>
          </ScrollReveal>

          {/* Bloque 6: Facilidade de Pagamento & CTA */}
          <ScrollReveal delay={0.5}>
            <div className="backdrop-blur-xl bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto mb-20">
              <h3 className="text-3xl font-bold mb-8 text-white">
                Investimento acessível. Retorno garantido.
              </h3>

              <div className="mb-10">
                <p className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                  <span className="text-green-500">R$ 297</span> <span className="text-2xl font-normal text-zinc-400">à vista</span>
                </p>
                <p className="text-xl text-zinc-300 mb-2">ou 6x de <span className="font-bold text-white">R$ 49.5</span></p>
                <p className="text-sm text-zinc-500 italic">(Menos que 1 jantar para 2 pessoas por mês)</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 mb-10 text-left max-w-lg mx-auto border border-white/5">
                <p className="text-zinc-300 mb-4 font-semibold text-center">Pense assim:</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>1 projeto com agência:</span>
                    <span className="text-red-400 font-mono">R$ 5.000+</span>
                  </div>
                  <div className="flex justify-between items-center text-white font-bold">
                    <span>Vibe Coding:</span>
                    <span className="text-green-400 font-mono">R$ 297</span>
                  </div>
                </div>
                <p className="text-center mt-4 text-white font-bold">A escolha é óbvia.</p>
              </div>

              <Button
                size="lg"
                className="w-full md:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-8 text-xl shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105"
                onClick={openModal}
              >
                Quero Ter Autonomia Tecnológica <Zap className="w-5 h-5 ml-2 fill-current" />
              </Button>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-zinc-500 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Acesso imediato</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Garantia de 7 dias</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-purple-500" /> Vagas limitadas</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================================================================================== */}
      {/* EL FOOTER ORIGINAL (Links y Copyright)                                             */}
      {/* ================================================================================== */}

      <footer className="relative py-12 border-t border-white/10 bg-[#0a0a0a] mt-20">
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

          <div
            id="pated-text"
            className="pated-text mt-8 text-[10px] text-zinc-800 text-center select-none"
            aria-label="pated-text-footer"
          >
            pated-text
          </div>
        </div>
      </footer>
    </div>
  )
}