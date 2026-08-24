import { ChartBarIcon, ShieldCheckIcon, LightningIcon, ChatCircleTextIcon, EnvelopeIcon, PaperPlaneTiltIcon, UserIcon, UserGearIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="grow w-full">

      {/* Seção Hero */}
      <section className=" flex flex-col w-full bg-[#0b1426]  items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center justify-between gap-14 md:gap-20">

            {/* Conteúdo */}
            <div className="flex-1 flex flex-col items-start gap-6">

              {/* Badge */}
              <span className="border border-blue-500/50 text-blue-400 text-xs md:text-sm px-3 py-1.5 rounded-full">
                ⚡ GRUPO IGNIS CORE — JAVA / GENERATION BRASIL
              </span>

              {/* Título */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Ignis Core
              </h1>

              {/* Descrição */}
              <p className="text-base md:text-lg text-slate-400 leading-7 max-w-xl">
                Sistema de Gestão de Relacionamento com Clientes para
                Pequenas e Médias Empresas. Organize leads, acompanhe
                vendas e escale o atendimento da sua empresa.
              </p>

              {/* Botões */}
              <div className="flex flex-wrap gap-4 mt-2">

                <Link
                  to="/oportunidades"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors font-medium"
                >
                  Começar Agora →
                </Link>

                <Link
                  to="/sobre"
                  className="border border-slate-700 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors font-medium"
                >
                  Saber Mais
                </Link>

              </div>

              {/* Benefícios */}
              <div className="flex flex-wrap gap-6 mt-3 text-sm text-slate-400">

                <span className="flex items-center gap-2">
                  <span className="text-green-400 text-base">✓</span>
                  Fácil de usar
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-green-400 text-base">✓</span>
                  100% responsivo
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-green-400 text-base">✓</span>
                  Feito para PMEs
                </span>
              </div>
            </div>

            {/* Gráfico / Imagem */}
            <div className="flex-1 w-full">

              <div className="w-full h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-slate-700 bg-[#111c30] shadow-xl">

                <img
                  className="w-full h-full object-cover"
                  alt="Painel de gestão do Ignis Core"
                  src="https://ik.imagekit.io/dy8ytykq9/Gemini_Generated_Image_7gw8ny7gw8ny7gw8.jfif"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="w-full bg-[#080f1d] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group rounded-2xl border border-slate-800 bg-[#080f1d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-5">
                <UserGearIcon
                  size={22}
                  weight="regular"
                  className="text-red-500"
                />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Gestão de Clientes
              </h3>
              <p className="text-sm text-slate-400 leading-6">
                Cadastros completos, histórico de interações e segmentação
                simples.
              </p>
            </div>
            <div className="group min-h-45 rounded-2xl border border-slate-800 bg-[#080f1d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-5">
                <ChartBarIcon
                  size={22}
                  weight="regular"
                  className="text-green-500"
                />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Painéis em Tempo Real
              </h3>
              <p className="text-sm text-slate-400 leading-6">
                Acompanhe métricas de vendas, conversão e retenção num só
                lugar.
              </p>
            </div>
            <div className="group min-h-45 rounded-2xl border border-slate-800 bg-[#080f1d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-5">
                <ShieldCheckIcon
                  size={22}
                  weight="regular"
                  className="text-yellow-500"
                />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Segurança e Controle
              </h3>
              <p className="text-sm text-slate-400 leading-6">
                Dados protegidos com controle de acesso e auditoria
                integrada.
              </p>
            </div>
            <div className="group min-h-45 rounded-2xl border border-slate-800 bg-[#080f1d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                <LightningIcon
                  size={22}
                  weight="regular"
                  className="text-blue-500"
                />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Automação Simples
              </h3>
              <p className="text-sm text-slate-400 leading-6">
                Tarefas repetitivas automatizadas para sua equipe vender
                mais.
              </p>
            </div>
          </div>
        </div>

        {/* Título */}
<div className="text-center mb-10 max-w-2xl mx-auto">
  <span className="inline-flex items-center gap-2 border border-blue-500/40 bg-blue-500/5 text-blue-400 px-4 py-1 rounded-full text-xs font-medium">
    <ChatCircleTextIcon size={14} />
    CONTATO
  </span>
  <h2 className="text-3xl md:text-4xl font-bold text-white mt-5">
    Fale Conosco
  </h2>
  <p className="text-slate-400 text-sm md:text-base mt-3 leading-relaxed">
    Tem uma dúvida, sugestão ou quer saber mais sobre o Ignis Core?
    Preencha o formulário abaixo e nossa equipe responderá em breve.
  </p>
</div>

{/* Formulário */}
<div className="w-full max-w-7xl mx-auto px-4 md:px-8">
  <div className="w-full bg-[#111c30] border border-slate-700/60 rounded-2xl p-6 md:p-8 shadow-lg">
    <form className="flex flex-col gap-5">

      {/* Nome */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-medium">
          Nome
        </label>

        <div className="relative">
          <UserIcon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="text"
            placeholder="Seu nome completo"
            className="w-full bg-[#0b1525] border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* E-mail */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-medium">
          E-mail
        </label>

        <div className="relative">
          <EnvelopeIcon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full bg-[#0b1525] border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Assunto */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-medium">
          Assunto
        </label>

        <div className="relative">
          <ChatCircleTextIcon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="text"
            placeholder="Qual o motivo do contato?"
            className="w-full bg-[#0b1525] border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Mensagem */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-sm font-medium">
          Mensagem
        </label>

        <div className="relative">
          <ChatCircleTextIcon
            size={18}
            className="absolute left-3 top-3 text-slate-500"
          />
          <textarea
            placeholder="Escreva sua mensagem aqui..."
            rows={5}
            className="w-full bg-[#0b1525] border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none resize-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Botão */}
      <button
        type="submit"
        className="w-full mt-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3 rounded-xl transition-all duration-300 cursor-pointer"
      >
        <PaperPlaneTiltIcon size={18} />
        Enviar Mensagem
      </button>

    </form>
  </div>
</div>
</section>
</main>
  );
}