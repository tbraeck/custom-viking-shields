'use client'
import Image from 'next/image'

const Symbols = () => {
  return (
    <div>
       <Image
            src="/symbols.png"
            width={500}
            height={500}
            alt="Viking Symbols"
            // className="logo-image"
        />
    </div>
  )
}

export default Symbols
