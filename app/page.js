import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1 className='text-5xl mb-8 font-bold capitalize'>Do something bro</h1>
      <Link href='/client' className="btn btn-accent capitalize mr-8">
        get started
      </Link>
      <Link href='/tasks' className="btn btn-accent capitalize">
        start tasks
      </Link>
    </>
  )
}

export default HomePage