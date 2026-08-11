import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT13 = () => {
  return (
    <details
      id="t13"
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
          13
        </span>

        {/* Title */}

        <span>
          Install Dependency Node & Build Vite
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
          Menginstall dependency Node.js yang dibutuhkan oleh project,
          kemudian menjalankan proses build Vite agar asset frontend
          siap digunakan oleh Laravel di environment production.
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
          1 — install dependency Node.js
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
            npm
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
            npm install
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Perintah ini membaca{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            package.json
          </code>{' '}
          dan menginstall seluruh package Node.js yang dibutuhkan
          project.
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
          2 — build asset Vite
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
            npm
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
            npm run build
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Vite akan mengcompile dan mengoptimalkan asset frontend
          seperti JavaScript, CSS, dan file terkait ke dalam folder
          production.
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
            ls public/build/
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
{`manifest.json
assets/`}
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Jika{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            manifest.json
          </code>{' '}
          dan folder{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            assets/
          </code>{' '}
          tersedia, proses build Vite sudah berhasil.
        </p>

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
              Proses macet / mati mendadak (out of memory)
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
            VPS kehabisan RAM saat Vite melakukan proses build.
            Tambahkan swap file sebelum mengulangi proses build.
            Konfigurasi swap dibahas pada Tahap 23.
          </span>
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
          Build Vite dapat menggunakan memory cukup besar, terutama
          pada project frontend yang memiliki banyak dependency.
          Karena itu VPS dengan RAM 2GB atau kurang dapat mengalami
          out-of-memory saat menjalankan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            npm run build
          </code>
          .
        </div>

        {/* ================================================= */}
        {/* FINAL CHECK                                       */}
        {/* ================================================= */}

        <p className="mt-4 text-[15px] text-[#8FA8B8]">
          Setelah{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            npm run build
          </code>{' '}
          selesai tanpa error dan folder{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            public/build/
          </code>{' '}
          berisi hasil build, asset frontend siap digunakan oleh
          aplikasi Laravel.
        </p>
      </div>
    </details>
  )
}

export default PanduanT13