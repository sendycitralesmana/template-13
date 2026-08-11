import React from 'react'
import {
  Check,
  ChevronRight,
  MapPin,
  Terminal,
  X,
} from 'lucide-react'

const PanduanT1 = () => {
  return (
    <details
      id="t1"
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
          01
        </span>

        {/* Title */}

        <span>
          Login VPS & Membuat User Baru
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

          Terminal lokal → VPS
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
        {/* TUJUAN                                            */}
        {/* ================================================= */}

        <p className="text-[15px] text-[#8FA8B8]">
          <b className="text-[#E8F1F5]">
            Tujuan:
          </b>{' '}
          Login pertama sebagai{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            root
          </code>
          , segera buat user baru dengan hak{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            sudo
          </code>
          . Root sebaiknya tidak dipakai untuk operasional harian.
        </p>

        {/* ================================================= */}
        {/* LOCAL TERMINAL                                    */}
        {/* ================================================= */}

        <h4
          className="
            mt-7
            mb-3
            flex
            items-center
            gap-2
            font-['IBM_Plex_Mono']
            text-[15px]
            font-semibold
            text-[#E8F1F5]
          "
        >
          <Terminal
            size={16}
            strokeWidth={1.8}
            className="text-[#4FD1E8]"
          />

          Jalankan di: Komputer lokal
        </h4>

        {/* SSH ROOT */}

        <div className="my-3 overflow-hidden border border-[#2A6478]">
          <div
            className="
              border-b
              border-[#2A6478]
              bg-[#132D43]
              px-3
              py-2
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#5C7A8C]
            "
          >
            bash
          </div>

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
            ssh root@IP_VPS_ANDA
          </pre>
        </div>

        {/* ================================================= */}
        {/* VPS TERMINAL                                      */}
        {/* ================================================= */}

        <h4
          className="
            mt-7
            mb-3
            flex
            items-center
            gap-2
            font-['IBM_Plex_Mono']
            text-[15px]
            font-semibold
            text-[#E8F1F5]
          "
        >
          <Terminal
            size={16}
            strokeWidth={1.8}
            className="text-[#4FD1E8]"
          />

          Jalankan di: Terminal VPS (sebagai root)
        </h4>

        {/* ================================================= */}
        {/* COMMAND 1                                         */}
        {/* ================================================= */}

        <div className="my-3 overflow-hidden border border-[#2A6478]">
          <div
            className="
              border-b
              border-[#2A6478]
              bg-[#132D43]
              px-3
              py-2
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#5C7A8C]
            "
          >
            1 — buat user baru
          </div>

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
            adduser sendy
          </pre>
        </div>

        {/* ================================================= */}
        {/* COMMAND 2                                         */}
        {/* ================================================= */}

        <div className="my-3 overflow-hidden border border-[#2A6478]">
          <div
            className="
              border-b
              border-[#2A6478]
              bg-[#132D43]
              px-3
              py-2
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#5C7A8C]
            "
          >
            2 — beri hak sudo
          </div>

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
            usermod -aG sudo sendy
          </pre>
        </div>

        {/* ================================================= */}
        {/* COMMAND 3                                         */}
        {/* ================================================= */}

        <div className="my-3 overflow-hidden border border-[#2A6478]">
          <div
            className="
              border-b
              border-[#2A6478]
              bg-[#132D43]
              px-3
              py-2
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#5C7A8C]
            "
          >
            3 — (opsional) salin SSH key ke user baru
          </div>

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
            rsync --archive --chown=sendy:sendy ~/.ssh /home/sendy
          </pre>
        </div>

        {/* ================================================= */}
        {/* COMMAND 4                                         */}
        {/* ================================================= */}

        <div className="my-3 overflow-hidden border border-[#2A6478]">
          <div
            className="
              border-b
              border-[#2A6478]
              bg-[#132D43]
              px-3
              py-2
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#5C7A8C]
            "
          >
            4 — keluar, login ulang sebagai sendy
          </div>

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
{`exit
ssh sendy@IP_VPS_ANDA`}
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

        {/* WHOAMI */}

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
            whoami
          </pre>
        </div>

        <div
          className="
            my-3
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            px-4
            py-3
            font-['IBM_Plex_Mono']
            text-[14px]
            text-[#5FD68C]
          "
        >
          sendy
        </div>

        {/* SUDO WHOAMI */}

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
            sudo whoami
          </pre>
        </div>

        <div
          className="
            my-3
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            px-4
            py-3
            font-['IBM_Plex_Mono']
            text-[14px]
            text-[#5FD68C]
          "
        >
          root{' '}
          <span className="text-[#5C7A8C]">
            # setelah masukkan password sendy
          </span>
        </div>

        {/* ================================================= */}
        {/* ERROR                                              */}
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
          Jika gagal
        </h4>

        {/* ERROR */}

        <div
          className="
            my-2
            flex
            items-center
            gap-3
            rounded-r
            border-l-[3px]
            border-[#E05252]
            bg-[rgba(224,82,82,0.07)]
            px-4
            py-3
            text-[15px]
            leading-6
            text-[#8FA8B8]
          "
        >
          <X
            size={18}
            strokeWidth={2}
            className="flex-none text-[#E05252]"
          />

          <span>
            <b className="text-[#E8F1F5]">
              sendy is not in the sudoers file
            </b>
          </span>
        </div>

        {/* SOLUTION */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#5FD68C]
            bg-[rgba(95,214,140,0.06)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <Check
            size={18}
            strokeWidth={2}
            className="mt-1 flex-none text-[#5FD68C]"
          />

          <span>
            Login lagi sebagai root, ulangi{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              usermod -aG sudo sendy
            </code>
            , lalu logout-login ulang.
          </span>
        </div>
      </div>
    </details>
  )
}

export default PanduanT1