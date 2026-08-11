import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT14 = () => {
  return (
    <details
      id="t14"
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
          14
        </span>

        {/* Title */}

        <span>
          Application Key & Cek Koneksi DB
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
          Membuat{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            APP_KEY
          </code>{' '}
          Laravel dan memastikan aplikasi dapat terhubung ke
          PostgreSQL dengan benar tanpa mengubah schema database.
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
          1 — generate application key
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
            Laravel Artisan
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
            php artisan key:generate
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Perintah ini akan membuat atau memperbarui nilai{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            APP_KEY
          </code>{' '}
          di file{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>
          . Laravel membutuhkan key ini untuk proses enkripsi
          aplikasi.
        </p>

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
          2 — cek koneksi database (read-only, aman)
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
            Laravel Tinker
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
{`php artisan tinker --execute="DB::select('SELECT 1 as test'); echo 'Koneksi database berhasil!';"`}
          </pre>
        </div>

        <div
          className="
            my-4
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
          Perintah di atas hanya menjalankan query{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            SELECT
          </code>{' '}
          sederhana. Query ini tidak membuat, mengubah, atau
          menghapus data maupun struktur database.
        </div>

        {/* ================================================= */}
        {/* ALTERNATIVE CHECK                                  */}
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
          Alternatif — cek daftar tabel yang sudah ada
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Jika ingin memastikan tabel yang sudah tersedia di schema{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            public
          </code>
          , jalankan query read-only berikut:
        </p>

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
{`php artisan tinker --execute="print_r(DB::select(\\"SELECT table_name FROM information_schema.tables WHERE table_schema='public'\\"));"`}
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
{`Koneksi database berhasil!`}
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Jika pesan tersebut muncul tanpa error SQL, berarti Laravel
          berhasil membaca database menggunakan konfigurasi di{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>
          .
        </p>

        {/* ================================================= */}
        {/* IMPORTANT WARNING                                  */}
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
            Penting:
          </b>{' '}
          Jangan jalankan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            php artisan migrate
          </code>{' '}
          pada tahap ini atau tahap berikutnya. Schema database
          dianggap sudah lengkap dan dibuat secara manual melalui
          pgAdmin pada Tahap 9.
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

        {/* ERROR 1 */}

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
              SQLSTATE[08006] could not connect to server
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
            Cek{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_HOST
            </code>{' '}
            dan{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_PORT
            </code>{' '}
            di{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              .env
            </code>
            . Jika database berada di server terpisah, pastikan
            firewall server database mengizinkan koneksi dari IP VPS.
          </span>
        </div>

        {/* ERROR 2 */}

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
              SQLSTATE[3D000] database does not exist
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
            Nama{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_DATABASE
            </code>{' '}
            di{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              .env
            </code>{' '}
            tidak cocok dengan nama database yang dibuat melalui
            pgAdmin pada Tahap 9. Pastikan penulisannya sama persis.
          </span>
        </div>

        {/* ================================================= */}
        {/* FINAL NOTE                                        */}
        {/* ================================================= */}

        <p className="mt-4 text-[15px] text-[#8FA8B8]">
          Setelah{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            APP_KEY
          </code>{' '}
          berhasil dibuat dan koneksi database berhasil diuji,
          konfigurasi dasar aplikasi Laravel sudah siap untuk
          dilanjutkan ke tahap berikutnya.
        </p>
      </div>
    </details>
  )
}

export default PanduanT14