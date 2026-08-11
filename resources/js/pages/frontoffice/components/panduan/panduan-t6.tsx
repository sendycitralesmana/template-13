import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT6 = () => {
  return (
    <details
      id="t6"
      className="
        group
        relative
        my-4
        border
        border-[#2A6478]
        bg-[#0F2438]
      "
    >
      {/* ===================================================== */}
      {/* SUMMARY                                               */}
      {/* ===================================================== */}

      <summary
        className="
          flex
          cursor-pointer
          list-none
          items-center
          gap-[18px]
          px-6
          py-5
          font-['IBM_Plex_Mono']
          text-base
          font-semibold
          select-none

          [&::-webkit-details-marker]:hidden

          max-[640px]:flex-wrap
          max-[640px]:p-4
        "
      >
        {/* Number */}

        <span
          className="
            flex
            h-11
            w-11
            flex-none
            items-center
            justify-center
            rounded-full
            border-[1.5px]
            border-[#4FD1E8]
            font-['IBM_Plex_Mono']
            text-[15px]
            text-[#4FD1E8]
          "
        >
          06
        </span>

        {/* Title */}

        <span>
          Install Composer
        </span>

        {/* Location */}

        <span
          className="
            ml-auto
            inline-flex
            items-center
            gap-1.5
            whitespace-nowrap
            rounded-[2px]
            border
            border-[#2A6478]
            px-[10px]
            py-1
            font-['IBM_Plex_Mono']
            text-[12px]
            font-medium
            text-[#5C7A8C]

            max-[640px]:ml-0
          "
        >
          <MapPin
            size={14}
            strokeWidth={1.8}
          />

          Terminal VPS
        </span>

        {/* Caret */}

        <ChevronRight
          size={17}
          strokeWidth={2}
          aria-hidden="true"
          className="
            flex-none
            text-[#5C7A8C]
            transition-transform
            duration-200
            ease-in-out
            group-open:rotate-90
          "
        />
      </summary>

      {/* ===================================================== */}
      {/* BODY                                                  */}
      {/* ===================================================== */}

      <div
        className="
          px-6
          pb-7
          pl-[86px]
          text-[15px]
          leading-7

          max-[640px]:px-4
          max-[640px]:pb-6
        "
      >
        {/* ================================================= */}
        {/* INSTALL COMPOSER                                  */}
        {/* ================================================= */}

        <div className="my-3 overflow-hidden border border-[#2A6478]">
          <pre
            className="
              overflow-x-auto
              px-4
              py-3
              font-['IBM_Plex_Mono']
              text-[14px]
              leading-6
              text-[#BEEAF2]
            "
          >
{`curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer`}
          </pre>
        </div>

        {/* ================================================= */}
        {/* CHECK                                              */}
        {/* ================================================= */}

        <h4
          className="
            mt-8
            mb-3
            font-['IBM_Plex_Mono']
            text-[15px]
            font-semibold
            text-[#E8F1F5]
          "
        >
          Cara mengecek berhasil
        </h4>

        <div className="my-3 overflow-hidden border border-[#2A6478]">
          <pre
            className="
              overflow-x-auto
              px-4
              py-3
              font-['IBM_Plex_Mono']
              text-[14px]
              leading-6
              text-[#BEEAF2]
            "
          >
            composer --version
          </pre>
        </div>

        {/* ================================================= */}
        {/* OUTPUT                                             */}
        {/* ================================================= */}

        <div
          className="
            my-3
            overflow-x-auto
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            px-4
            py-3
            font-['IBM_Plex_Mono']
            text-[14px]
            leading-7
            text-[#5FD68C]
          "
        >
          Composer version 2.x.x
        </div>
      </div>
    </details>
  )
}

export default PanduanT6