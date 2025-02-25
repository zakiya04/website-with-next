'use client';

const Error = ({error}) => {
  return (
    <div>
      <h1 className='bg-white'>{error.message}</h1>
    </div>
  )
}

export default Error
