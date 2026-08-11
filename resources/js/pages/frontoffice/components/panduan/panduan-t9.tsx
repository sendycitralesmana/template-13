import React from 'react'
import {
  Check,
  ChevronRight,
  MapPin,
  X,
} from 'lucide-react'

const PanduanT9 = () => {
  return (
    <details
      id="t9"
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
          09
        </span>

        {/* Title */}

        <span>
          Membuat Database via pgAdmin
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

          pgAdmin (lokal)
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
          Ini bagian yang paling sering ditanyakan — cara{' '}
          <b className="text-[#E8F1F5]">
            menghubungkan pgAdmin ke server PostgreSQL di VPS
          </b>
          , lalu membuat database di dalamnya secara manual.
        </p>

        {/* ================================================= */}
        {/* ILLUSTRATION                                      */}
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
          Ilustrasi: Dialog "Register Server" di pgAdmin
        </h4>

        <figure
          className="
            my-4
            w-full
            overflow-x-auto
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            p-3
          "
        >
          <svg
            viewBox="0 0 720 400"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto min-w-[680px] w-full"
          >
            {/* Window */}

            <rect
              x="0"
              y="0"
              width="720"
              height="400"
              rx="6"
              fill="#0F2438"
              stroke="#2A6478"
              strokeWidth="1.5"
            />

            {/* Header */}

            <rect
              x="0"
              y="0"
              width="720"
              height="36"
              rx="6"
              fill="#123049"
            />

            <rect
              x="0"
              y="20"
              width="720"
              height="16"
              fill="#123049"
            />

            {/* Window buttons */}

            <circle
              cx="22"
              cy="18"
              r="6"
              fill="#EC6A6A"
            />

            <circle
              cx="44"
              cy="18"
              r="6"
              fill="#F5A623"
            />

            <circle
              cx="66"
              cy="18"
              r="6"
              fill="#5FD68C"
            />

            <text
              x="360"
              y="23"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="13"
              fontWeight="600"
            >
              Register — Server
            </text>

            {/* Tabs */}

            <text
              x="30"
              y="60"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              General
            </text>

            <text
              x="110"
              y="60"
              fill="#4FD1E8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
              fontWeight="700"
              textDecoration="underline"
            >
              Connection
            </text>

            <line
              x1="20"
              y1="70"
              x2="700"
              y2="70"
              stroke="#2A6478"
              strokeWidth="1"
            />

            {/* Host */}

            <text
              x="30"
              y="102"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Host name/address
            </text>

            <rect
              x="260"
              y="86"
              width="430"
              height="26"
              rx="3"
              fill="#081420"
              stroke="#4FD1E8"
              strokeWidth="1"
            />

            <text
              x="270"
              y="103"
              fill="#5FD68C"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              IP_VPS_ANDA (atau host DB Anda)
            </text>

            {/* Port */}

            <text
              x="30"
              y="142"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Port
            </text>

            <rect
              x="260"
              y="126"
              width="120"
              height="26"
              rx="3"
              fill="#081420"
              stroke="#2A6478"
              strokeWidth="1"
            />

            <text
              x="270"
              y="143"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              5432
            </text>

            {/* Maintenance database */}

            <text
              x="30"
              y="182"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Maintenance database
            </text>

            <rect
              x="260"
              y="166"
              width="220"
              height="26"
              rx="3"
              fill="#081420"
              stroke="#2A6478"
              strokeWidth="1"
            />

            <text
              x="270"
              y="183"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              postgres
            </text>

            {/* Username */}

            <text
              x="30"
              y="222"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Username
            </text>

            <rect
              x="260"
              y="206"
              width="220"
              height="26"
              rx="3"
              fill="#081420"
              stroke="#4FD1E8"
              strokeWidth="1"
            />

            <text
              x="270"
              y="223"
              fill="#5FD68C"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              sendy
            </text>

            {/* Password */}

            <text
              x="30"
              y="262"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Password
            </text>

            <rect
              x="260"
              y="246"
              width="220"
              height="26"
              rx="3"
              fill="#081420"
              stroke="#4FD1E8"
              strokeWidth="1"
            />

            <text
              x="270"
              y="263"
              fill="#5FD68C"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              ••••••••
            </text>

            {/* Save password */}

            <text
              x="30"
              y="302"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Save password?
            </text>

            <rect
              x="260"
              y="290"
              width="16"
              height="16"
              rx="2"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <path
              d="M262,298 l5,5 l9,-11"
              stroke="#5FD68C"
              strokeWidth="2"
              fill="none"
            />

            {/* Save button */}

            <rect
              x="560"
              y="350"
              width="130"
              height="34"
              rx="4"
              fill="rgba(79,209,232,0.12)"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="625"
              y="372"
              textAnchor="middle"
              fill="#4FD1E8"
              fontFamily="IBM Plex Mono"
              fontSize="12"
              fontWeight="700"
            >
              Save
            </text>
          </svg>
        </figure>

        <p
          className="
            -mt-3
            mb-5
            font-['IBM_Plex_Mono']
            text-[12px]
            leading-5
            text-[#5C7A8C]
          "
        >
          Ilustrasi tampilan dialog pgAdmin — nilai sebenarnya
          menyesuaikan server Anda
        </p>

        {/* ================================================= */}
        {/* LANGKAH LENGKAP                                   */}
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
          Langkah-langkah lengkap
        </h4>

        {/* Step 1 */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              rounded-full
              border
              border-[#4FD1E8]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#4FD1E8]
            "
          >
            1
          </span>

          <span>
            Buka pgAdmin → klik kanan pada{' '}
            <b className="text-[#E8F1F5]">
              Servers
            </b>{' '}
            di panel kiri →{' '}
            <b className="text-[#E8F1F5]">
              Register → Server...
            </b>
          </span>
        </div>

        {/* Step 2 */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              rounded-full
              border
              border-[#4FD1E8]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#4FD1E8]
            "
          >
            2
          </span>

          <span>
            Tab{' '}
            <b className="text-[#E8F1F5]">
              General
            </b>
            : isi{' '}
            <b className="text-[#E8F1F5]">
              Name
            </b>{' '}
            bebas, misalnya{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              VPS Production
            </code>{' '}
            (hanya label, tidak memengaruhi koneksi).
          </span>
        </div>

        {/* Step 3 */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              rounded-full
              border
              border-[#4FD1E8]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#4FD1E8]
            "
          >
            3
          </span>

          <span>
            Pindah ke tab{' '}
            <b className="text-[#E8F1F5]">
              Connection
            </b>{' '}
            (lihat ilustrasi di atas):
            <br />
            —{' '}
            <b className="text-[#E8F1F5]">
              Host name/address:
            </b>{' '}
            IP VPS Anda (jika PostgreSQL di VPS yang sama), atau host
            database terpisah
            <br />
            —{' '}
            <b className="text-[#E8F1F5]">
              Port:
            </b>{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              5432
            </code>{' '}
            (default PostgreSQL)
            <br />
            —{' '}
            <b className="text-[#E8F1F5]">
              Maintenance database:
            </b>{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              postgres
            </code>{' '}
            (database bawaan untuk login awal)
            <br />
            —{' '}
            <b className="text-[#E8F1F5]">
              Username:
            </b>{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sendy
            </code>{' '}
            (user yang dibuat di Tahap 8)
            <br />
            —{' '}
            <b className="text-[#E8F1F5]">
              Password:
            </b>{' '}
            password yang Anda set di Tahap 8
          </span>
        </div>

        {/* Step 4 */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              rounded-full
              border
              border-[#4FD1E8]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#4FD1E8]
            "
          >
            4
          </span>

          <span>
            Klik{' '}
            <b className="text-[#E8F1F5]">
              Save
            </b>
            . Jika koneksi berhasil, server akan muncul di panel kiri
            dan bisa di-expand.
          </span>
        </div>

        {/* Step 5 */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              rounded-full
              border
              border-[#4FD1E8]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#4FD1E8]
            "
          >
            5
          </span>

          <span>
            Klik kanan pada{' '}
            <b className="text-[#E8F1F5]">
              Databases
            </b>{' '}
            di bawah server tersebut →{' '}
            <b className="text-[#E8F1F5]">
              Create → Database...
            </b>
          </span>
        </div>

        {/* Step 6 */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              rounded-full
              border
              border-[#4FD1E8]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#4FD1E8]
            "
          >
            6
          </span>

          <span>
            Isi{' '}
            <b className="text-[#E8F1F5]">
              Database name
            </b>
            , misalnya{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              nama_database
            </code>
            . Di tab{' '}
            <b className="text-[#E8F1F5]">
              Definition
            </b>
            , set{' '}
            <b className="text-[#E8F1F5]">
              Owner
            </b>{' '}
            ke{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sendy
            </code>{' '}
            agar Laravel punya hak akses penuh.
          </span>
        </div>

        {/* Step 7 */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
            rounded-r
            border-l-[3px]
            border-[#4FD1E8]
            bg-[rgba(79,209,232,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              rounded-full
              border
              border-[#4FD1E8]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#4FD1E8]
            "
          >
            7
          </span>

          <span>
            Klik{' '}
            <b className="text-[#E8F1F5]">
              Save
            </b>
            . Database baru langsung muncul di panel kiri.
          </span>
        </div>

        {/* ================================================= */}
        {/* WARNING                                           */}
        {/* ================================================= */}

        <div
          className="
            my-5
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
            Jika PostgreSQL berjalan di VPS yang sama
          </b>{' '}
          dengan aplikasi Laravel, pastikan PostgreSQL mengizinkan
          koneksi dari luar (bukan hanya{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            localhost
          </code>
          ) agar pgAdmin di komputer lokal Anda bisa connect. Ini
          butuh edit{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            postgresql.conf
          </code>{' '}
          (
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            listen_addresses = '*'
          </code>
          ) dan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            pg_hba.conf
          </code>
          , serta membuka port 5432 di firewall —{' '}
          <b className="text-[#E8F1F5]">
            hanya lakukan ini jika memang perlu akses dari luar,
            dan sebaiknya batasi ke IP Anda saja demi keamanan.
          </b>
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

        <p className="text-[15px] text-[#8FA8B8]">
          Database baru terlihat di pgAdmin di bawah{' '}
          <b className="text-[#E8F1F5]">
            Databases
          </b>
          , dan bisa dibuka (expand) tanpa error.
        </p>

        {/* ================================================= */}
        {/* ERROR                                             */}
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

        {/* Timeout */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
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
          <X
            size={18}
            strokeWidth={2}
            className="mt-1 flex-none text-[#EC6A6A]"
          />

          <span>
            <b className="text-[#E8F1F5]">
              Unable to connect to server: timeout expired
            </b>
          </span>
        </div>

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
            Port 5432 belum terbuka di firewall VPS, atau{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              listen_addresses
            </code>{' '}
            di{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              postgresql.conf
            </code>{' '}
            masih{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              localhost
            </code>
            . Sesuaikan lalu restart PostgreSQL:
            <br />
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sudo systemctl restart postgresql
            </code>
            .
          </span>
        </div>

        {/* Password error */}

        <div
          className="
            my-2
            flex
            items-start
            gap-3
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
          <X
            size={18}
            strokeWidth={2}
            className="mt-1 flex-none text-[#EC6A6A]"
          />

          <span>
            <b className="text-[#E8F1F5]">
              password authentication failed for user "sendy"
            </b>
          </span>
        </div>

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
            Password salah ketik, atau{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              pg_hba.conf
            </code>{' '}
            belum mengizinkan metode auth yang sesuai (biasanya
            perlu baris{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              md5
            </code>{' '}
            atau{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              scram-sha-256
            </code>{' '}
            untuk koneksi dari IP luar).
          </span>
        </div>

        {/* ================================================= */}
        {/* NOTE                                               */}
        {/* ================================================= */}

        <p
          className="
            mt-5
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          📝{' '}
          <b className="text-[#E8F1F5]">
            Catat nama database yang Anda buat
          </b>{' '}
          — dipakai di Tahap 11 untuk mengisi{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            DB_DATABASE
          </code>{' '}
          di{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>
          .
        </p>
      </div>
    </details>
  )
}

export default PanduanT9