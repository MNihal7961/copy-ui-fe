import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <h1 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">Footer</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer