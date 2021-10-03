import './Form.css'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <section className="ctn_2">
            <form action="/dashboard" className="sect_2">
                <h2>Ingresa Tus Datos</h2>
                <label htmlFor="sex" className="inputs">
                    <span>Sexo:</span>
                    <input list="sex" name="sex-user" required/>
                    <datalist name="sex" id="sex">
                        <option value="Femenino" />
                        <option value="Masculino" />
                    </datalist>
                </label>
                <label htmlFor="d2" className="inputs">
                    <span>Estado:</span>
                    <input list="state" name="state" required/>
                    <datalist id="state">
						<option value="Alabama"></option>
						<option value="Alaska"></option>
						<option value="Arizona"></option>
						<option value="Arkansas"></option>
						<option value="California"></option>
						<option value="Colorado"></option>
						<option value="Connecticut"></option>
						<option value="Delaware"></option>
						<option value="District of Columbia"></option>
						<option value="Florida"></option>
						<option value="Georgia"></option>
						<option value="Hawaii"></option>
						<option value="Idaho"></option>
						<option value="Illinois"></option>
						<option value="Indiana"></option>
						<option value="Iowa"></option>
						<option value="Kansas"></option>
						<option value="Kentucky"></option>
						<option value="Louisiana"></option>
						<option value="Maine"></option>
						<option value="Maryland"></option>
						<option value="Massachusetts"></option>
						<option value="Michigan"></option>
						<option value="Minnesota"></option>
						<option value="Mississippi"></option>
						<option value="Missouri"></option>
						<option value="Montana"></option>
						<option value="Nebraska"></option>
						<option value="Nevada"></option>
						<option value="New Hampshire"></option>
						<option value="New Jersey"></option>
						<option value="New Mexico"></option>
						<option value="New York"></option>
						<option value="North Carolina"></option>
						<option value="North Dakota"></option>
						<option value="Ohio"></option>
						<option value="Oklahoma"></option>
						<option value="Oregon"></option>
						<option value="Pennsylvania"></option>
						<option value="Rhode Island"></option>
						<option value="South Carolina"></option>
						<option value="South Dakota"></option>
						<option value="Tennessee"></option>
						<option value="Texas"></option>
						<option value="Utah"></option>
						<option value="Vermont"></option>
						<option value="Virginia"></option>
						<option value="Washington"></option>
						<option value="West Virginia"></option>
						<option value="Wisconsin"></option>
						<option value="Wyoming"></option>
					</datalist>
                </label>
                <label htmlFor="d3" className="inputs">
                    <span>Edad:</span>
                    <input list="age" name="age-user" required/>
                    <datalist name="age" id="age">
                        <option value="Menor de edad" />
                        <option value="18-29" />
                        <option value="30-39" />
                        <option value="40-49" />
                        <option value="50-65" />
                        <option value="65-85" />
                        <option value="Mayor de 85" />
                    </datalist>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </section>
    )
}

export default Form;