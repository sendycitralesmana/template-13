import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT12 = () => {
  return (
    <details
      id="t12"
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
          12
        </span>

        {/* Title */}

        <span>
          Install Dependency Laravel
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
          Menginstall seluruh dependency PHP/Laravel yang dibutuhkan
          oleh project untuk berjalan di environment production VPS.
        </p>

        {/* ================================================= */}
        {/* INSTALL                                           */}
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
          1 — install dependency Laravel
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
            composer install --no-dev --optimize-autoloader
          </pre>
        </div>

        {/* ================================================= */}
        {/* EXPLANATION                                       */}
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
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            --no-dev
          </code>{' '}
          berarti dependency untuk development tidak ikut
          di-install.{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            --optimize-autoloader
          </code>{' '}
          digunakan untuk mengoptimalkan autoloader Composer sehingga
          lebih sesuai untuk environment production.
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
            ls vendor/
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
{`autoload.php
bin/
composer/
guzzlehttp/
laravel/
...`}
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

        {/* MEMORY ERROR */}

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
              Allowed memory size exhausted
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
            Jika RAM VPS terbatas dan Composer kehabisan memory,
            jalankan perintah berikut untuk menghapus batas memory
            Composer sementara:
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
            COMPOSER_MEMORY_LIMIT=-1 composer install --no-dev --optimize-autoloader
          </pre>
        </div>

        {/* ================================================= */}
        {/* WARNING                                           */}
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
            Catatan:
          </b>{' '}
          Jika masalah memory terus terjadi, jangan hanya bergantung
          pada{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            COMPOSER_MEMORY_LIMIT=-1
          </code>
          . VPS dengan RAM kecil tetap dapat kehabisan memory.
          Solusi swap akan dibahas pada tahap yang sudah disiapkan
          untuk konfigurasi memory VPS.
        </div>

        {/* ================================================= */}
        {/* FINAL CHECK                                       */}
        {/* ================================================= */}

        <p className="mt-4 text-[15px] text-[#8FA8B8]">
          Setelah proses selesai tanpa error dan folder{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            vendor/
          </code>{' '}
          sudah tersedia, dependency Laravel sudah siap digunakan
          oleh aplikasi.
        </p>
      </div>
    </details>
  )
}

export default PanduanT12