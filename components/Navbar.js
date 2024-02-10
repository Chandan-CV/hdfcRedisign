import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex flex-row items-center bg-blue-900">
      <div className="flex flex-row w-full items-center ">
        <div>
          <Image
            src="https://logolook.net/wp-content/uploads/2021/11/HDFC-Bank-Logo.svg"
            width={150}
            height={300}
            className="ml-5"
          />
        </div>
        <div className="flex flex-row w-full justify-evenly text-white font-light text-xlz">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Pay</p>
          <p className="cursor-pointer">Save</p>
          <p className="cursor-pointer">Invest</p>
          <p className="cursor-pointer">Borrow</p>
          <p className="cursor-pointer">Insure</p>
          <p className="cursor-pointer">Shop</p>
        </div>
      </div>
      <div className="w-1/3 flex">
        <div className="flex flex-row  p-5 w-full  text-sm text-white font-semibold justify-evenly">
          <p className="cursor-pointer underline">Personal</p>
          <p className="cursor-pointer">NRI</p>
          <p className="cursor-pointer">SME</p>
          <p className="cursor-pointer">Wholesale</p>
          <p className="cursor-pointer">Agri</p>
        </div>
      </div>
    </div>
  );
}
