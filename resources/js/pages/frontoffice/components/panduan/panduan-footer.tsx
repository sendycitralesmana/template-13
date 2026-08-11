import React from 'react'

const Footer = () => {
  return (
    <footer
      className="
        border-t
        border-[#2A6478]
        bg-[#081420]
        px-6
        py-6
        text-center
        font-['IBM_Plex_Mono']
        text-[12px]
        leading-6
        text-[#5C7A8C]

        max-[640px]:px-4
      "
    >
      BLUEPRINT DEPLOY GUIDE · Laravel 13 + Inertia + React → VPS
      Production · disusun untuk deployment manual dengan kontrol penuh
      atas database
    </footer>
  )
}

export default Footer