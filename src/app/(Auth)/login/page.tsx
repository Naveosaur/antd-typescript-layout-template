import Image from "next/image";
import FormLogin from "./_components/FormLogin";

const LoginPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-primary flex justify-center items-center bg-login-bg bg-cover">
      <div className="bg-white border-2 border-gray bg-opacity-75 bg-clip-padding backdrop-filter backdrop-blur-md  min-h-screen min-w-full rounded-lg  md:min-h-[500px] md:min-w-[500px] md:opacity-100 transition-all duration-300 ">
        <div className=" text-black flex flex-col justify-center items-center mt-48 md:mt-10">
          <Image src="/fps-logo.svg" width={120} height={120} alt="logo" />
          <p className="text-xl font-semibold mt-8 text-primary md:text-2xl">Please Login to your account</p>
        </div>
        <div className="mt-10 mx-10">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
