import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT11 = () => {
  return (
    <details
      id="t11"
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
          11
        </span>

        {/* Title */}

        <span>
          Konfigurasi .env
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
          Mengatur konfigurasi aplikasi Laravel melalui file{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>
          , termasuk URL aplikasi dan koneksi ke PostgreSQL.
        </p>

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
          1 — copy env example
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
{`cp .env.example .env
nano .env`}
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
          2 — sesuaikan baris berikut
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
            .env
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
{`APP_NAME="Nama Aplikasi Anda"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://domain-saya.com

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=nama_database
DB_USERNAME=sendy
DB_PASSWORD=sendy123`}
          </pre>
        </div>

        {/* ================================================= */}
        {/* ENV WARNING                                       */}
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
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <b className="text-[#E8F1F5]">
            Wajib disesuaikan:
          </b>

          <br />

          •{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            APP_URL
          </code>{' '}
          → domain asli Anda

          <br />

          •{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            DB_HOST
          </code>{' '}
          → jika PostgreSQL di server terpisah, ganti dengan
          IP/hostname server tersebut

          <br />

          •{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            DB_DATABASE
          </code>{' '}
          → nama database yang dibuat di pgAdmin (Tahap 9),
          bukan teks literal

          <br />

          •{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            DB_PASSWORD
          </code>{' '}
          → gunakan password kuat untuk production sungguhan
        </div>

        {/* ================================================= */}
        {/* SAVE                                               */}
        {/* ================================================= */}

        <p className="mt-4 text-[15px] text-[#8FA8B8]">
          Simpan di nano:{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            Ctrl+O
          </code>{' '}
          →{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            Enter
          </code>{' '}
          →{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            Ctrl+X
          </code>
          .
        </p>

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
            cat .env | grep DB_
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
{`DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=nama_database
DB_USERNAME=sendy
DB_PASSWORD=********`}
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
          🔒{' '}
          <b className="text-[#E8F1F5]">
            File .env tidak boleh ter-commit ke GitHub.
          </b>{' '}
          Pastikan file{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>{' '}
          ada di{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .gitignore
          </code>
          . Biasanya file tersebut sudah masuk ke{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .gitignore
          </code>{' '}
          secara default pada project Laravel baru.
        </div>

        {/* ================================================= */}
        {/* IF ENV NOT FOUND                                  */}
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

        <div
          className="
            my-3
            flex
            items-start
            gap-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              cat: .env: No such file or directory
            </b>
          </span>
        </div>

        <div
          className="
            my-3
            flex
            items-start
            gap-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Pastikan Anda berada di folder utama project Laravel,
            lalu jalankan kembali:
          </span>
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
            cp .env.example .env
          </pre>
        </div>

        {/* ================================================= */}
        {/* DATABASE NOTE                                     */}
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
          <b className="text-[#E8F1F5]">
            Catatan:
          </b>{' '}
          Pada tahap ini jangan menjalankan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            php artisan migrate
          </code>
          . Database sudah dibuat secara manual melalui pgAdmin
          pada Tahap 9 sesuai asumsi panduan ini.
        </div>
      </div>
    </details>
  )
}

export default PanduanT11