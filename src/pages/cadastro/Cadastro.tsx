import { Link } from "react-router-dom"

function Cadastro() {
	return (
		<main className="flex min-h-screen w-full">
			<div className="hidden md:block md:w-1/2 h-screen sticky top-0">
				<div className="bg-[url('https://ik.imagekit.io/dy8ytykq9/Gemini_Generated_Image_sh2rztsh2rztsh2r.jpg')] bg-no-repeat w-full h-full bg-cover bg-center"></div>
			</div>

			<div className="flex flex-1 items-start md:items-center justify-center px-4 pt-20 pb-8 md:py-24">
				<div className="w-full max-w-sm flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<h2 className="text-3xl md:text-4xl font-semibold text-slate-800 text-center">
							Cadastrar Usuário
						</h2>
					</div>

					<form className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label
								htmlFor="nome"
								className="text-sm font-medium text-slate-700"
							>
								Nome
							</label>
							<input
								id="nome"
								name="nome"
								type="text"
								required
								className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
								placeholder="Seu nome completo"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="usuario"
								className="text-sm font-medium text-slate-700"
							>
								Usuário (e-mail)
							</label>
							<input
								id="usuario"
								name="usuario"
								type="usuario"
								required
								className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
								placeholder="seu@email.com"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="senha"
								className="text-sm font-medium text-slate-700"
							>
								Senha
							</label>
							<input
								id="senha"
								name="senha"
								type="password"
								required
								className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
								placeholder="••••••••"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label
								htmlFor="confirmarSenha"
								className="text-sm font-medium text-slate-700"
							>
								Confirmar Senha
							</label>
							<input
								id="confirmarSenha"
								name="confirmarSenha"
								type="password"
								required
								className="border border-slate-300 rounded-lg px-4 py-2 text-base text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
								placeholder="••••••••"
							/>
						</div>

						<div className="flex gap-3 mt-2">
							<Link to="/">
              <button
								className="flex-1 text-center border border-slate-300 text-slate-700 text-base px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors font-medium"
							>
								Cancelar
							</button></Link>
							<button
								type="submit"
								className="flex-1 bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
							>
								Cadastrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	)
}

export default Cadastro
