import { IoSearchOutline } from "react-icons/io5";

const Searchbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex relative" onSubmit={handleSubmit}>
      <IoSearchOutline
        className="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-500"
        fontSize={18}
        style={{ pointerEvents: "none" }}
      />
      <input
        className="w-[32rem] h-10 outline-none text-base text-neutral-600 placeholder:text-base placeholder:text-neutral-500 py-2 px-8 rounded-3xl"
        type="text"
        placeholder="Search..."
      />
    </form>
  );
};

export default Searchbar;
