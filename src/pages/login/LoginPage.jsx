import { Link } from "react-router-dom";
import background from "../../assets/images/logo.png";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="w-screen h-[100dvh] bg-neutral-100 bg-center bg-cover flex justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:w-[70%] lg:h-96 w-full h-full gap-y-6 mx-auto rounded-xl flex flex-col items-center pt-12 pb-6 px-12 bg-[rgba(80,80,80,0.9)] ">
        <h1 className="text-5xl text-center text-white font-bold capitalize">
          <span className="text-primary font-extrabold">qader</span> dashboard
          login
        </h1>
        <form
          action="/"
          method="post"
          className="flex flex-col items-center h-full w-full bgred-400 py-5  gap-y-8"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 text-white bg-transparent outline-none  rounded-xl placeholder:text-white  border border-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 text-white bg-transparent outline-none  rounded-xl placeholder:text-white border border-white"
          />
          <button type="submit">
            <Link
              to="/dashboard"
              className="w-[9rem] bg-primary text-white text-lg font-bold capitalize py-4 px-8 rounded-md hover:bg-[#0d7dfd] transition ease-in-out duration-300"
            >
              login
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
