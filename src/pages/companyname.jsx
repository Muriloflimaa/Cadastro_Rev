import * as yup from 'yup'
import { useFormik } from 'formik'
import Button from './components/Button'
import TextField from '@material-ui/core/TextField'
import { useRouter } from 'next/router'
import { useLocalStorage } from '../utils/useLocalStorage'

export default function companyname() {
  const [companyname] = useLocalStorage('companyname', '')
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      companyname: companyname,
    },
    validationSchema: yup.object({
      companyname: yup
        .string()
        .required('Campo nome é Obrigatório!')
        .min(8, 'Nome muito curto!')
        .max(40, 'Nome muito longo!'),
    }),
    onSubmit: (values) => {
      localStorage.setItem('companyname', JSON.stringify(values.companyname))
      router.push('/postal')
    },
  })

  return (
    <>
      <h1 className="pb-5 text-black text-xl font-semibold">
        Escreva o nome da sua empresa como está na Receita Federal
      </h1>
      <form className="gap-3 h-auto" onSubmit={formik.handleSubmit}>
        <TextField
          label="Empresa"
          type="text"
          name="companyname"
          fullWidth
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.companyname}
        />
        <h2 className="text-Loja opacity-50 text-sm mt-2">
          Pode ser o nome fantasia ou a razão social
        </h2>
        {formik.touched.companyname && formik.errors.companyname ? (
          <div className="badge badge-warning badge-lg bg-opacity-80 text-xs mt-[1.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="pl-2"> {formik.errors.companyname}</span>
          </div>
        ) : null}
        <Button />
      </form>
    </>
  )
}
