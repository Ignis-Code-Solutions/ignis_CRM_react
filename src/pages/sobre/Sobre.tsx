import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TargetIcon,
  HeartIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";

function Sobre() {
  return (
    <main className="grow w-full bg-[#080f1d]">

      {/* Quem Somos */}
      <section className="w-full bg-[#0b1426]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 text-xs px-3 py-1.5 rounded-full">
              &lt;/&gt; SOBRE O PROJETO
            </span>

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">
              Quem somos
            </h1>

            {/* Descrição */}
            <p className="text-base md:text-lg text-slate-400 leading-7 mt-4">
              O Ignis Core nasceu como projeto de conclusão do bootcamp Java
              da Generation Brasil, unindo tecnologia e propósito para
              democratizar o acesso a um CRM de qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO / PROPÓSITO / PÚBLICO */}
      <section className="w-full bg-[#080f1d] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Missão */}
            <div className="rounded-2xl border border-slate-800 bg-[#080f1d] p-6 md:p-7
              hover:-translate-y-1 hover:border-blue-500/30
              transition-all duration-300">

              <div className="w-10 h-10 rounded-xl bg-blue-500/10
                flex items-center justify-center mb-5">
                <TargetIcon
                  size={22}
                  weight="regular"
                  className="text-blue-500"
                />

              </div>
              <h3 className="text-white text-base font-semibold mb-3">
                Missão
              </h3>
              <p className="text-sm text-slate-400 leading-6">
                Simplificar a gestão de relacionamento com clientes para
                pequenas e médias empresas, oferecendo uma ferramenta
                acessível, intuitiva e poderosa.
              </p>
            </div>

            {/* Propósito */}
            <div className="rounded-2xl border border-slate-800 bg-[#080f1d] p-6 md:p-7
              hover:-translate-y-1 hover:border-green-500/30
              transition-all duration-300">

              <div className="w-10 h-10 rounded-xl bg-green-500/10
                flex items-center justify-center mb-5">
                <HeartIcon
                  size={22}
                  weight="regular"
                  className="text-green-500"
                />
              </div>
              <h3 className="text-white text-base font-semibold mb-3">
                Propósito
              </h3>
              <p className="text-sm text-slate-400 leading-6">
                Ajudar empreendedores a organizarem seus processos
                comerciais, ganharem tempo e converterem mais oportunidades
                em vendas reais.
              </p>
            </div>

            {/* Público-alvo */}
            <div className="rounded-2xl border border-slate-800 bg-[#080f1d] p-6 md:p-7
              hover:-translate-y-1 hover:border-yellow-500/30
              transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10
                flex items-center justify-center mb-5">

                <UsersThreeIcon
                  size={22}
                  weight="regular"
                  className="text-yellow-500"
                />
              </div>
              <h3 className="text-white text-base font-semibold mb-3">
                Público-alvo
              </h3>
              <p className="text-sm text-slate-400 leading-6">
                PMEs brasileiras que precisam de um CRM enxuto, sem
                complexidade excessiva e com foco em resultados rápidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="w-full bg-[#080f1d] border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Equipe de desenvolvimento
            </h2>
            <p className="text-sm md:text-base text-slate-400 mt-3 leading-6">
              Um time diverso e comprometido com entrega de valor, boas
              práticas de código e experiência do usuário.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* ================= ANDRE ================= */}
            <div className="group flex flex-col items-center text-center
              rounded-2xl border border-slate-800 bg-[#080f1d]
              p-7 min-h-75
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300">

              <div className="w-28 h-28 rounded-full overflow-hidden
                border-2 border-blue-500/20
                shadow-lg shadow-blue-500/10
                group-hover:border-blue-500/60
                transition-all duration-300">

                <img
                  src="https://ik.imagekit.io/dy8ytykq9/imagem.png"
                  alt="Andre Nunes"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-base mt-5">
                Andre Nunes
              </h3>
              <p className="text-blue-400 text-sm mt-1">
                Fullstack Developer
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://github.com/andrelsrn" target="_blank"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon size={20} weight="fill" />
                </a>

                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://www.linkedin.com/in/andrel-srn/" target="_blank"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* ================= DANIEL ================= */}
            <div className="group flex flex-col items-center text-center
              rounded-2xl border border-slate-800 bg-[#080f1d]
              p-7 min-h-75
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300">

              <div className="w-28 h-28 rounded-full overflow-hidden
                border-2 border-blue-500/20
                shadow-lg shadow-blue-500/10
                group-hover:border-blue-500/60
                transition-all duration-300">

                <img
                  src="https://ik.imagekit.io/dy8ytykq9/188108728%20(2).jfif"
                  alt="Daniel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-base mt-5">
                Daniel
              </h3>
              <p className="text-blue-400 text-sm mt-1">
                Fullstack Developer
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://github.com/DaniChaves10" target="_blank"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon size={20} weight="fill" />
                </a>

                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://www.linkedin.com/in/daniel-araujo10/" target="_blank"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* ================= ELAINE ================= */}
            <div className="group flex flex-col items-center text-center
              rounded-2xl border border-slate-800 bg-[#080f1d]
              p-7 min-h-75
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300">

              <div className="w-28 h-28 rounded-full overflow-hidden
                border-2 border-blue-500/20
                shadow-lg shadow-blue-500/10
                group-hover:border-blue-500/60
                transition-all duration-300">

                <img
                  src="https://ik.imagekit.io/dy8ytykq9/WhatsApp%20Image%202026-07-27%20at%2008.48.37.jpeg?updatedAt=1785152943909"
                  alt="Elaine"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-base mt-5">
                Elaine
              </h3>
              <p className="text-blue-400 text-sm mt-1">
                Fullstack Developer
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://github.com/alveslaine" target="_blank"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon size={20} weight="fill" />
                </a>

                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://www.linkedin.com/in/elaine-alves-silva/" target="_blank"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* ================= JOÃO ================= */}
            <div className="group flex flex-col items-center text-center
              rounded-2xl border border-slate-800 bg-[#080f1d]
              p-7 min-h-75
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300">

              <div className="w-28 h-28 rounded-full overflow-hidden
                border-2 border-blue-500/20
                shadow-lg shadow-blue-500/10
                group-hover:border-blue-500/60
                transition-all duration-300">

                <img
                  src="https://ik.imagekit.io/dy8ytykq9/Imagem%20do%20perfil.png"
                  alt="João"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-base mt-5">
                João
              </h3>
              <p className="text-blue-400 text-sm mt-1">
                Fullstack Developer
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://github.com/Joao-Pedro-Duo" target="_blank"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon size={20} weight="fill" />
                </a>

                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://www.linkedin.com/in/joaopedroduo/" target="_blank"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* ================= JONATHAN ================= */}
            <div className="group flex flex-col items-center text-center
              rounded-2xl border border-slate-800 bg-[#080f1d]
              p-7 min-h-75
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300">

              <div className="w-28 h-28 rounded-full overflow-hidden
                border-2 border-blue-500/20
                shadow-lg shadow-blue-500/10
                group-hover:border-blue-500/60
                transition-all duration-300">

                <img
                  src="https://ik.imagekit.io/dy8ytykq9/dev_jonathan.png"
                  alt="Jonathan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-base mt-5">
                Jonathan
              </h3>
              <p className="text-blue-400 text-sm mt-1">
                Fullstack Developer
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://github.com/jonathanleao19" target="_blank"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon size={20} weight="fill" />
                </a>

                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://www.linkedin.com/in/jonathanleao/" target="_blank"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* ================= LUIZA ================= */}
            <div className="group flex flex-col items-center text-center
              rounded-2xl border border-slate-800 bg-[#080f1d]
              p-7 min-h-75
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300">

              <div className="w-28 h-28 rounded-full overflow-hidden
                border-2 border-blue-500/20
                shadow-lg shadow-blue-500/10
                group-hover:border-blue-500/60
                transition-all duration-300">

                <img
                  src="https://ik.imagekit.io/dy8ytykq9/luiza-paolinelli%20(2).jpg"
                  alt="Luiza"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-base mt-5">
                Luiza
              </h3>
              <p className="text-blue-400 text-sm mt-1">
                Fullstack Developer
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://github.com/luizavpg-bit" target="_blank"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon size={20} weight="fill" />
                </a>

                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  href="https://www.linkedin.com/in/luizavpg" target="_blank"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </div>
            </div>

            {/* ================= PATRICK ================= */}
            <div className="group flex flex-col items-center text-center
              rounded-2xl border border-slate-800 bg-[#080f1d]
              p-7 min-h-75
              hover:-translate-y-1
              hover:border-blue-500/40
              hover:shadow-lg hover:shadow-blue-500/10
              transition-all duration-300">

              <div className="w-28 h-28 rounded-full overflow-hidden
                border-2 border-blue-500/20
                shadow-lg shadow-blue-500/10
                group-hover:border-blue-500/60
                transition-all duration-300">

                <img
                  src="https://ik.imagekit.io/dy8ytykq9/292331618.jpg"
                  alt="Patrick"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-base mt-5">
                Patrick
              </h3>
              <p className="text-blue-400 text-sm mt-1">
                Fullstack Developer
              </p>
              <div className="flex gap-4 mt-5">
                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                 target="_blank" href="https://github.com/phcarneiro9" 
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <GithubLogoIcon size={20} weight="fill" />
                </a>

                <a
                  className="text-slate-500 hover:text-blue-400 transition-all"
                  target="_blank" href="linkedin.com/in/phcarneiro9"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon size={20} weight="fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sobre;