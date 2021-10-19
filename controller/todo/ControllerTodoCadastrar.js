import UiTodoCadastrarForm from '../../ui/todo/UiTodoCadastrarForm.js'
import {cadastrar} from '../../services/todo.js'

export default function ControllerTodoCadastrar(){

	async function OnCadastrarCall(textoParam){
		if (await cadastrar(textoParam)){
			return 1;
		}else{
			return 0;
		}
	}

	return (
		<UiTodoCadastrarForm OnCadastrarCall={OnCadastrarCall} />
	)
}