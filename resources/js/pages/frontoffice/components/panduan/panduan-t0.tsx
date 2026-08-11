import React from 'react'
import {
  Check,
  ClipboardList,
  ChevronRight,
} from 'lucide-react'

const PanduanT0 = () => {
  return (
    <details
      id="t0"
      open
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
          00
        </span>

        {/* Title */}

        <span>
          Persiapan
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
            text-[11px]
            font-medium
            text-[#5C7A8C]

            max-[640px]:ml-0
          "
        >
          <ClipboardList
            size={13}
            strokeWidth={1.8}
          />

          Checklist
        </span>

        {/* Caret */}

        <ChevronRight
          size={16}
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

          max-[640px]:px-4
          max-[640px]:pb-6
        "
      >
        {/* Intro */}

        <p className="text-[#8FA8B8]">
          Pastikan semua ini siap sebelum mulai, supaya proses tidak
          terhenti di tengah jalan.
        </p>

        {/* Checklist */}

        <ul
          className="
            my-4
            list-none
            space-y-[10px]
            pl-0
            text-[14.5px]
            text-[#8FA8B8]
          "
        >
          <li className="grid grid-cols-[20px_1fr] gap-2">
            <Check
              size={17}
              strokeWidth={2}
              className="mt-[3px] text-[#5FD68C]"
            />

            <span>
              IP VPS dan akses SSH (password root atau SSH key)
            </span>
          </li>

          <li className="grid grid-cols-[20px_1fr] gap-2">
            <Check
              size={17}
              strokeWidth={2}
              className="mt-[3px] text-[#5FD68C]"
            />

            <span>
              Domain sudah dibeli, dan Anda punya akses ke pengaturan
              DNS-nya
            </span>
          </li>

          <li className="grid grid-cols-[20px_1fr] gap-2">
            <Check
              size={17}
              strokeWidth={2}
              className="mt-[3px] text-[#5FD68C]"
            />

            <span>
              URL repository GitHub — dan Anda tahu apakah{' '}
              <b className="text-[#E8F1F5]">
                public
              </b>{' '}
              atau{' '}
              <b className="text-[#E8F1F5]">
                private
              </b>
            </span>
          </li>

          <li className="grid grid-cols-[20px_1fr] gap-2">
            <Check
              size={17}
              strokeWidth={2}
              className="mt-[3px] text-[#5FD68C]"
            />

            <span>
              Jika private: siapkan Personal Access Token, atau siap
              membuat SSH key baru
            </span>
          </li>

          <li className="grid grid-cols-[20px_1fr] gap-2">
            <Check
              size={17}
              strokeWidth={2}
              className="mt-[3px] text-[#5FD68C]"
            />

            <span>
              Akses ke server PostgreSQL yang dipakai (di VPS ini atau
              server terpisah)
            </span>
          </li>

          <li className="grid grid-cols-[20px_1fr] gap-2">
            <Check
              size={17}
              strokeWidth={2}
              className="mt-[3px] text-[#5FD68C]"
            />

            <span>
              VPS Ubuntu 22.04/24.04 LTS, RAM minimal 2GB (idealnya 4GB
              untuk build Vite)
            </span>
          </li>
        </ul>

        {/* ================================================= */}
        {/* CALLOUT                                           */}
        {/* ================================================= */}

        <div
          className="
            my-4
            rounded-r
            border-l-[3px]
            border-[#F5A623]
            bg-[rgba(245,166,35,0.07)]
            px-4
            py-3
            text-[14.5px]
            text-[#8FA8B8]
          "
        >
          <b className="text-[#E8F1F5]">
            Catatan penting:
          </b>{' '}
          Panduan ini mengasumsikan database{' '}
          <b className="text-[#E8F1F5]">
            sudah dibuat manual lewat pgAdmin
          </b>
          , dan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[#BEEAF2]">
            php artisan migrate
          </code>{' '}
          <b className="text-[#E8F1F5]">
            tidak akan pernah dijalankan
          </b>{' '}
          — schema database dianggap sudah siap sebelumnya.
        </div>
      </div>
    </details>
  )
}

export default PanduanT0