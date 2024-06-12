import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
import { loginUserService } from "../Services/userServices";

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        navigate("/")
        console.log("Inicio de sesión correcto");
        login(response.data.token)
      }
    } catch (error) {
      console.log("Error al iniciar sesión");
    }
  }

  return (
    <form className="form container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <img src="../../src/assets/cart.svg" alt="logo" height={"40px"} />
      <h3 className="form__title">Iniciar sesión</h3>

      <section className="form__fields-container">

        <div className="form__field form-floating">
          <input
            className="form__field-input form-control"
            type="email"
            id="email"
            placeholder="Correo"
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
          <label className="form__field-label" htmlFor="last_name">Correo</label>
        </div>

        <div className="form__field form-floating">
          <input
            className="form__field-input form-control"
            type="password"
            id="password"
            placeholder="Contraseña"
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
          <label className="form__field-label" htmlFor="password">Contraseña</label>
        </div>
      </section>

      <button className="form__button" type="submit">Iniciar sesión</button>
      <p className="form__rights">© Todos los derechos reservados</p>
    </form>)
}
