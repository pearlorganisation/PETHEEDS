import React ,{useEffect} from "react";
import { ArrowRight } from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUp } from "../../../features/actions/auth";
import { ClipLoader } from "react-spinners";


export function FormSignUp() {

  const navigate= useNavigate();
  const dispatch = useDispatch();
  
  const {userData,isLoading,emailDataChangePassword} = useSelector((state)=>state.auth)

  const {register,handleSubmit,formState: { errors },} =useForm()
  

  const onSubmit = data=>{
    console.log("data",data)
   
    const newData = {...data,email:emailDataChangePassword.email}

    dispatch(signUp(newData))
   
  }
  
useEffect(()=>{  if(userData?.status){
        navigate('/login')
      }
},[navigate,userData])



  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img
              src="https://petheeds.in/wp-content/uploads/2022/09/Petheeds-Aspect-Logo-1.png"
              className="w-[150px]"
            />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Fill the details to create account
          </h2>
        
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                  {...register("fullName",{required: "name is required"})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  />
                   {errors.fullName && (
                    <span className="text-red-500">
                      Full Name is required
                    </span>
                  )}
                </div>
              </div>
           
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                  {...register('password',{required:'password is required'})}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                  />
                   {errors.password && (
                    <span className="text-red-500">
                      Password is required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <button
                  
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#1D4ED8] px-3.5 py-2.5 font-semibold leading-7 text-white"
                >{isLoading ? (
                  <ClipLoader color="#c4c2c2" />
                ) : (<> Create Account <ArrowRight className="ml-2" size={16} /></>)}
                 
                </button>
              </div>
            </div>
          </form>

      
        </div>
      </div>
    </section>
  );
}
