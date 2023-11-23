import { useState } from "react";

const App = () => {
	const [imagemPerfil, setImagemPerfil] = useState();

	const mudandoImagemPerfil = (evento) => {
		if (evento.target.files && evento.target.files.length == 1) {
			console.log(evento.target.files[0]);
			setImagemPerfil(evento.target.files[0]);
		}
	};

	return (
		<>
			<h1>projeto react criado</h1>
			<form action="http://localhost:3000/alunos/perfil" method="POST">
				<div>
					<label htmlFor="apelido">Apelido</label>
					<input type="text" name="apelido" />
				</div>
				<div>
					<label htmlFor="descricao">Eu sou...</label>
					<input type="text" name="descricao" />
				</div>
				<div>
					<label htmlFor="url">Imagem do perfil</label>
					<input type="text" name="url" />
					<input
						type="file"
						name="arquivo"
						accept="image/*"
						onChange={mudandoImagemPerfil}
					/>
				</div>
				<div hidden={!imagemPerfil}>
					<label htmlFor="imagem">Preview de imagem do perfil</label>
					<img
						alt="imagem do perfil"
						name="imagem"
						src={imagemPerfil && URL.createObjectURL(imagemPerfil)}
					/>
				</div>
				<div>
					<button type="submit">Salvar foto</button>
					<button type="submit">Salvar perfil</button>
				</div>
			</form>
		</>
	);
};

export default App;
