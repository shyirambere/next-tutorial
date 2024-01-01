'use client';

const error = (error) => {
    console.log(error);
    // //there was an error
  return (
    <div>
        
        {error.error.message}
    </div>
  )
}

export default error