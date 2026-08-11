import React from 'react'
import {
  Check,
  ChevronRight,
  MapPin,
  Terminal,
  X,
} from 'lucide-react'

const PanduanT4 = () => {
  return (
    <details
      id="t4"
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
          04
        </span>

        {/* Title */}

        <span>
          Setup Akses GitHub
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
          Menyiapkan cara VPS mengakses repo GitHub. Caranya beda
          tergantung public/private.
        </p>

        {/* ================================================= */}
        {/* DIAGRAM                                           */}
        {/* ================================================= */}

        <figure
          className="
            my-6
            w-full
            overflow-x-auto
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            p-3
          "
        >
          <svg
            viewBox="0 0 900 210"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto min-w-[760px] w-full"
          >
            <defs>
              <marker
                id="github-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path
                  d="M0,0 L6,3 L0,6 Z"
                  fill="#4FD1E8"
                />
              </marker>
            </defs>

            {/* Repo GitHub */}

            <rect
              x="20"
              y="80"
              width="120"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="80"
              y="110"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              repo GitHub
            </text>

            {/* Branch PUBLIC */}

            <path
              d="M140,95 L230,45"
              stroke="#5FD68C"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#github-arrow)"
            />

            {/* Branch PRIVATE */}

            <path
              d="M140,115 L230,165"
              stroke="#F5A623"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#github-arrow)"
            />

            {/* Public */}

            <rect
              x="230"
              y="15"
              width="230"
              height="60"
              rx="3"
              fill="rgba(95,214,140,0.06)"
              stroke="#5FD68C"
              strokeWidth="1.5"
            />

            <text
              x="345"
              y="38"
              textAnchor="middle"
              fill="#5FD68C"
              fontFamily="IBM Plex Mono"
              fontSize="13"
              fontWeight="700"
            >
              PUBLIC
            </text>

            <text
              x="345"
              y="56"
              textAnchor="middle"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="10"
            >
              git clone https://... (langsung)
            </text>

            {/* Private */}

            <rect
              x="230"
              y="140"
              width="230"
              height="60"
              rx="3"
              fill="rgba(236,106,106,0.06)"
              stroke="#EC6A6A"
              strokeWidth="1.5"
            />

            <text
              x="345"
              y="163"
              textAnchor="middle"
              fill="#EC6A6A"
              fontFamily="IBM Plex Mono"
              fontSize="13"
              fontWeight="700"
            >
              PRIVATE
            </text>

            <text
              x="345"
              y="181"
              textAnchor="middle"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="10"
            >
              butuh Token atau SSH Key
            </text>

            {/* Private → Token */}

            <path
              d="M460,160 L560,110"
              stroke="#EC6A6A"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#github-arrow)"
            />

            {/* Private → SSH */}

            <path
              d="M460,175 L560,190"
              stroke="#EC6A6A"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#github-arrow)"
            />

            {/* PAT */}

            <rect
              x="560"
              y="80"
              width="320"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.3"
            />

            <text
              x="575"
              y="99"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              Metode 1 — Personal Access Token
            </text>

            <text
              x="575"
              y="118"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="9.5"
            >
              git clone https://TOKEN@github.com/...
            </text>

            {/* SSH Key */}

            <rect
              x="560"
              y="160"
              width="320"
              height="50"
              rx="3"
              fill="rgba(79,209,232,0.06)"
              stroke="#4FD1E8"
              strokeWidth="1.6"
            />

            <text
              x="575"
              y="179"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              Metode 2 — SSH Key (disarankan)
            </text>

            <text
              x="575"
              y="198"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="9.5"
            >
              git clone git@github.com:...
            </text>
          </svg>
        </figure>

        {/* ================================================= */}
        {/* SCENARIO A                                        */}
        {/* ================================================= */}

        <h4
          className="
            mt-8
            mb-3
            font-['IBM_Plex_Mono']
            text-[15px]
            font-semibold
            text-[#5FD68C]
          "
        >
          🟢 Skenario A — Repository PUBLIC
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Tidak perlu autentikasi. Langsung clone nanti di Tahap 10:
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
            git clone https://github.com/username/nama-project.git
          </pre>
        </div>

        {/* ================================================= */}
        {/* SCENARIO B — TOKEN                                */}
        {/* ================================================= */}

        <h4
          className="
            mt-8
            mb-3
            font-['IBM_Plex_Mono']
            text-[15px]
            font-semibold
            text-[#EC6A6A]
          "
        >
          🔴 Skenario B — Repository PRIVATE, Metode 1:
          Personal Access Token
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Di GitHub:{' '}
          <b className="text-[#E8F1F5]">
            Settings → Developer settings → Personal access tokens
            → Tokens (classic)
          </b>{' '}
          → generate dengan scope{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            repo
          </code>
          . Simpan token-nya, lalu clone dengan:
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
            git clone https://TOKEN@github.com/username/nama-project.git
          </pre>
        </div>

        {/* Warning */}

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
          Jangan simpan token ini di file yang ter-commit ke repo.
          Token hanya dipakai sekali saat clone.
        </div>

        {/* ================================================= */}
        {/* SCENARIO B — SSH                                  */}
        {/* ================================================= */}

        <h4
          className="
            mt-8
            mb-3
            font-['IBM_Plex_Mono']
            text-[15px]
            font-semibold
            text-[#EC6A6A]
          "
        >
          🔴 Skenario B — Repository PRIVATE, Metode 2:
          SSH Key (disarankan)
        </h4>

        {/* Generate SSH */}

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
            1 — generate SSH key di VPS
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
            ssh-keygen -t ed25519 -C "deploy-vps"
          </pre>
        </div>

        {/* Public Key */}

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
            2 — tampilkan public key
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
            cat ~/.ssh/id_ed25519.pub
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Copy seluruh output → GitHub →{' '}
          <b className="text-[#E8F1F5]">
            Settings → SSH and GPG keys → New SSH key
          </b>{' '}
          → paste →{' '}
          <b className="text-[#E8F1F5]">
            Add SSH key
          </b>
          .
        </p>

        {/* Test SSH */}

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
            3 — test koneksi
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
            ssh -T git@github.com
          </pre>
        </div>

        {/* Output */}

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
          Hi username! You've successfully authenticated, but GitHub
          does not provide shell access.
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

        {/* Error */}

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
              Permission denied (publickey)
            </b>
          </span>
        </div>

        {/* Solution */}

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
            Pastikan public key benar-benar tersimpan di GitHub,
            dan Anda copy seluruh isi file{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              .pub
            </code>{' '}
            termasuk bagian awal{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              ssh-ed25519
            </code>
            .
          </span>
        </div>
      </div>
    </details>
  )
}

export default PanduanT4