import "../sass/SignUp.scss"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { registerUserService } from "../Services/userServices";


export const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        navigate(`/login`)
        console.log("usuario creado");
      }
    } catch (error) {
      console.log(`Error en signup: ${error}`);
    }
  }

  return (
    <form className="form container-fluid" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">Bienvenido a Total Store</h2>
      <h3 className="form__subtitle">Por favor, ingresa los siguientes datos</h3>

      <section className="form__fields-container">


        <div className="form__field form-floating">
          <input
            className="form__field-input form-control"
            id="name"
            type="text"
            placeholder="Nombre"
            {...register('name')}
          />
          <p>{errors.name?.message}</p>
          <label className="form__field-label" htmlFor="name">Nombre</label>
        </div>


        <div className="form__field form-floating">
          <input
            className="form__field-input form-control"
            type="text"
            id="last_name"
            placeholder="Apellido"
            {...register('last_name')}
          />
          <p>{errors.last_name?.message}</p>
          <label className="form__field-label" htmlFor="last_name">Apellido</label>
        </div>

        <select className="form-field-select" aria-label="Default select example" name="gender" id="gender" {...register('gender')}>
          <option value="">Genero</option>
          <option value={"M"}>Hombre</option>
          <option value={"F"}>Mujer</option>
          <p>{errors.gender?.message}</p>
        </select>


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

      <button className="form__button" type="submit">Registrar</button>
      <p className="form__rights">© Todos los derechos reservados</p>
    </form>
  )
}
