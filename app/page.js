"use client";

function Home() {
  async function handleSignIn() {
    console.log("sign in");
    const res = await fetch("http://localhost:3000/api/auth/signIn");
  }
  return (
    <>
      <div className="flex justify-center align-middle ">
        <button onClick={handleSignIn} className="border border-gray-900">
          Sign in
        </button>
      </div>
    </>
  );
}

export default Home;
