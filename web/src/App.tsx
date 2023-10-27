const App = () => {
	return (
		<>
			<h1>projeto react criado</h1>
			<form>
				<div>
					<label htmlFor="apelido">Apelido</label>
					<input type="text" name="apelido" />
				</div>
				<div>
					<label htmlFor="descricao">Eu sou...</label>
					<input type="text" name="descricao" />
				</div>
				<div>
					<label htmlFor="upload">Imagem do perfil</label>
					<input type="file" name="upload" accept="image/*" />
				</div>
				<div>
					<label htmlFor="imagem">Imagem do perfil</label>
					<img name="imagem" alt="imagem do perfil"/>
				</div>
			</form>
		</>
	);
};

export default App;
