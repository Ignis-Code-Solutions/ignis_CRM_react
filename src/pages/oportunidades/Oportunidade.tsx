import {
  PlusIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";

export default function Oportunidades() {
  return (
    <main className="grow w-full bg-[#080f1d] text-white">

      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-14 md:pt-16 pb-64">

        {/* Cabeçalho */}
        <div className="flex flex-col p-10 md:flex-row md:items-center md:justify-between gap-6 mb-4">

          <div>
            <span className="text-xs text-blue-400 uppercase tracking-widest">
              Entidade
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Oportunidades
            </h1>

            <p className="text-slate-400 text-sm md:text-base mt-2 max-w-2xl">
              Cadastro completo das oportunidades comerciais:
              solicitante, descrição, status e valor.
            </p>
          </div>

          <button
            className="
              flex items-center justify-center gap-2
              bg-linear-to-r from-blue-600 to-cyan-400
              text-[#07111f] font-semibold
              px-5 py-3 rounded-xl
              hover:opacity-90 transition-all
              shrink-0
            "
          >
            <PlusIcon size={18} weight="bold" />
            Nova oportunidade
          </button>

        </div>


        {/* Cards de resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          {/* Registros */}
          <div
            className="
              rounded-2xl
              border border-slate-700
              bg-[#111a2b]
              p-5
            "
          >
            <p className="text-xs text-slate-400 uppercase">
              Registros
            </p>

            <p className="text-2xl font-bold mt-2">
              3
            </p>
          </div>


          {/* Em aberto */}
          <div
            className="
              rounded-2xl
              border border-slate-700
              bg-[#111a2b]
              p-5
            "
          >
            <p className="text-xs text-slate-400 uppercase">
              Em aberto
            </p>

            <p className="text-2xl font-bold mt-2">
              1
            </p>
          </div>


          {/* Valor total */}
          <div
            className="
              rounded-2xl
              border border-blue-500/50
              bg-[#0c1c35]
              p-5
            "
          >
            <p className="text-xs text-blue-400 uppercase">
              Valor total
            </p>

            <p className="text-2xl font-bold mt-2">
              R$ 29.100,50
            </p>
          </div>

        </div>


        {/* Tabela */}
        <div
          className="
            overflow-x-auto
            rounded-2xl
            border border-slate-700
            bg-[#111a2b]
          "
        >

          <table className="w-full text-sm">

            {/* Cabeçalho da tabela */}
            <thead>
              <tr
                className="
                  border-b border-slate-700
                  text-left text-slate-400
                "
              >

                <th className="px-4 py-3 font-medium">
                  ID
                </th>

                <th className="px-4 py-3 font-medium">
                  Nome
                </th>

                <th className="px-4 py-3 font-medium">
                  Descrição
                </th>

                <th className="px-4 py-3 font-medium">
                  Status
                </th>

                <th className="px-4 py-3 font-medium">
                  Valor
                </th>

                <th className="px-4 py-3 font-medium">
                  Ações
                </th>

              </tr>
            </thead>


            <tbody>

              {/* Linha 1 */}
              <tr
                className="
                  border-b border-slate-700/70
                  hover:bg-slate-800/40
                  transition-colors
                "
              >

                <td className="px-4 py-3 text-slate-400">
                  #1
                </td>

                <td className="px-4 py-3 font-semibold">
                  Marina Alves
                </td>

                <td className="px-4 py-3 text-slate-400">
                  Implantação do CRM para rede de farmácias com 4 unidades.
                </td>

                <td className="px-4 py-3">
                  <span
                    className="
                      inline-flex
                      px-3 py-1
                      text-xs
                      rounded-full
                      border border-green-500/50
                      bg-green-500/10
                      text-green-400
                    "
                  >
                    Aprovada
                  </span>
                </td>

                <td className="px-4 py-3 font-semibold whitespace-nowrap">
                  R$ 18.500,00
                </td>

                <td className="px-4 py-3">
                  <div className="flex gap-3">

                    <button
                      className="
                        text-slate-400
                        hover:text-blue-400
                        transition-colors
                      "
                    >
                      <PencilSimpleIcon size={18} />
                    </button>

                    <button
                      className="
                        text-slate-400
                        hover:text-red-400
                        transition-colors
                      "
                    >
                      <TrashIcon size={18} />
                    </button>

                  </div>
                </td>

              </tr>


              {/* Linha 2 */}
              <tr
                className="
                  border-b border-slate-700/70
                  hover:bg-slate-800/40
                  transition-colors
                "
              >

                <td className="px-4 py-3 text-slate-400">
                  #2
                </td>

                <td className="px-4 py-3 font-semibold">
                  Carlos Menezes
                </td>

                <td className="px-4 py-3 text-slate-400">
                  Migração de planilhas para o módulo de clientes e follow-up.
                </td>

                <td className="px-4 py-3">
                  <span
                    className="
                      inline-flex
                      px-3 py-1
                      text-xs
                      rounded-full
                      border border-blue-500/50
                      bg-blue-500/10
                      text-blue-400
                    "
                  >
                    Em aberto
                  </span>
                </td>

                <td className="px-4 py-3 font-semibold whitespace-nowrap">
                  R$ 7.400,50
                </td>

                <td className="px-4 py-3">
                  <div className="flex gap-3">

                    <button
                      className="
                        text-slate-400
                        hover:text-blue-400
                        transition-colors
                      "
                    >
                      <PencilSimpleIcon size={18} />
                    </button>

                    <button
                      className="
                        text-slate-400
                        hover:text-red-400
                        transition-colors
                      "
                    >
                      <TrashIcon size={18} />
                    </button>

                  </div>
                </td>

              </tr>


              {/* Linha 3 */}
              <tr
                className="
                  hover:bg-slate-800/40
                  transition-colors
                "
              >

                <td className="px-4 py-3 text-slate-400">
                  #3
                </td>

                <td className="px-4 py-3 font-semibold">
                  Studio Vértice
                </td>

                <td className="px-4 py-3 text-slate-400">
                  Integração de propostas comerciais com assinatura digital.
                </td>

                <td className="px-4 py-3">
                  <span
                    className="
                      inline-flex
                      px-3 py-1
                      text-xs
                      rounded-full
                      border border-red-500/50
                      bg-red-500/10
                      text-red-400
                    "
                  >
                    Reprovada
                  </span>
                </td>

                <td className="px-4 py-3 font-semibold whitespace-nowrap">
                  R$ 3.200,00
                </td>

                <td className="px-4 py-3">
                  <div className="flex gap-3">

                    <button
                      className="
                        text-slate-400
                        hover:text-blue-400
                        transition-colors
                      "
                    >
                      <PencilSimpleIcon size={18} />
                    </button>

                    <button
                      className="
                        text-slate-400
                        hover:text-red-400
                        transition-colors
                      "
                    >
                      <TrashIcon size={18} />
                    </button>

                  </div>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </main>
  );
}