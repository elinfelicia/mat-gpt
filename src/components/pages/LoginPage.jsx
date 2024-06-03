import { Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "../../Api/axios";
const LOGIN_URL = '/Auth/login';

function LoginPage() {
    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = async (data) => {
        console.log('Form submitted', data);
        const user = data.email;
        const pwd = data.password;
        try {
            const response = await axios.post(LOGIN_URL,JSON.stringify({user,pwd}),{
                headers: {'Content-Type': 'application/json'},
                withCredentials:true
            });
            console.log(JSON.stringify(response))
        } catch (error) {
            console.error(error.message)
        }
    };

    return (
        <div className="containerLogin flex justify-center p-10">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-lg">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-10">
                    Login to your account
                </h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Your email
                        </label>
                        <input type="email" name="email" id="email" placeholder="name@email.com"
                               className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               {...register("email", { required: 'Email is required' })}/>
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className="w-full px-3">
                        <label htmlFor="password" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Password
                        </label>
                        <input type="password" name="password" id="password" placeholder="Password"
                               className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                               {...register("password", { required: 'Password is required' })}/>
                        <p className="error">{errors.password?.message}</p>
                    </div>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
                    Don’t have an account yet? <Link className="font-medium text-blue-600 hover:underline dark:text-blue-500" to="/signup">Sign up</Link>
                </p>
                <button type="submit" className="landingButton1" >
                    Login
                </button>
            </form>
            <DevTool control={control}/>
        </div>
    );
}

export default LoginPage;
