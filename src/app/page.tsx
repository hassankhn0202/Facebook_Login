

export default async function Home() {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="text-3xl w-1/2 px-10">
        <img src="/logo.svg" alt="image" width={300} height={100} />
        <p className= "ml-8 -mt-3">Facebook helps you connect and share with the people in your life</p>
      </div>


      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
        <input className="mt-5 py-3 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="Email address or phone number" />
        <input className="mt-5 py-3 border border-1 border-gray-100 p-4 rounded-md focus:outline-1 outline-blue-600" type="password" placeholder="password" />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white hover:bg-blue-700 rounded-md">Log In</button>
        <p className="text-blue-500 text-center text-sm py-1 px-1 hover:underline cursor-pointer">forgotten password?</p>
        <span>
          <hr className="my-2" />
        </span>
        <button className= "mx-auto bg-green-600 my-2 py-2 px-2 text-lg font-bold text-white hover:bg-green-700 rounded-md w-fit">create new account</button>
      </div>
    </div>
  )
};

