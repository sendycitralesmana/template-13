import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT8 = () => {
  return (
    <details
      id="t8"
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
          08
        </span>

        {/* Title */}

        <span>
          Konfigurasi User PostgreSQL
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
        {/* TUJUAN                                            */}
        {/* ================================================= */}

        <p className="text-[15px] text-[#8FA8B8]">
          <b className="text-[#E8F1F5]">
            Tujuan:
          </b>{' '}
          Menyiapkan{' '}
          <b className="text-[#E8F1F5]">
            user
          </b>{' '}
          PostgreSQL (
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            sendy
          </code>
          ) untuk dipakai Laravel.{' '}
          <b className="text-[#E8F1F5]">
            Database TIDAK dibuat di sini
          </b>{' '}
          — akan dibuat manual lewat pgAdmin di Tahap 9.
        </p>

        {/* ================================================= */}
        {/* CALLOUT                                            */}
        {/* ================================================= */}

        <div
          className="
            my-4
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.06)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          Jika PostgreSQL berada di{' '}
          <b className="text-[#E8F1F5]">
            server terpisah
          </b>{' '}
          (bukan VPS ini), lewati instalasi dan buat user ini
          langsung lewat pgAdmin/tool client yang Anda pakai untuk
          akses server itu.
        </div>

        {/* ================================================= */}
        {/* STEP 1                                            */}
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
          1 — install PostgreSQL (lewati jika sudah ada / server
          terpisah)
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
            sudo apt install postgresql postgresql-contrib -y
          </pre>
        </div>

        {/* ================================================= */}
        {/* STEP 2                                            */}
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
          2 — masuk shell PostgreSQL
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
            sudo -u postgres psql
          </pre>
        </div>

        {/* ================================================= */}
        {/* STEP 3                                            */}
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
          3 — buat user/role (dijalankan di dalam prompt psql)
        </h4>

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
            SQL
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
            CREATE USER sendy WITH PASSWORD 'sendy123';
          </pre>
        </div>

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
            \q
          </pre>
        </div>

        {/* ================================================= */}
        {/* SECURITY WARNING                                  */}
        {/* ================================================= */}

        <div
          className="
            my-4
            rounded-r
            border-l-[3px]
            border-[#EC6A6A]
            bg-[rgba(236,106,106,0.07)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <b className="text-[#E8F1F5]">
            Penting soal keamanan:
          </b>{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            sendy123
          </code>{' '}
          hanyalah contoh. Untuk production sungguhan, gunakan
          password kuat (16+ karakter, kombinasi huruf/angka/simbol),
          dan{' '}
          <b className="text-[#E8F1F5]">
            jangan pernah
          </b>{' '}
          commit password ke GitHub — hanya boleh ada di{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>{' '}
          server, dan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>{' '}
          wajib ada di{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .gitignore
          </code>
          .
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
            sudo -u postgres psql -c "\du"
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
{`Role name : sendy
...`}
        </div>
      </div>
    </details>
  )
}

export default PanduanT8