import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT22 = () => {
  return (
    <details
      id="t22"
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
          22
        </span>

        {/* Title */}

        <span>
          Update Aplikasi (git pull)
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
          Alur ini dipakai setiap kali Anda melakukan{' '}
          <b className="text-[#E8F1F5]">
            push perubahan baru ke GitHub
          </b>{' '}
          dan ingin men-deploy perubahan tersebut ke
          production VPS dengan aman.
        </p>

        {/* ================================================= */}
        {/* DIAGRAM                                           */}
        {/* ================================================= */}

        <figure
          className="
            my-6
            overflow-x-auto
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            p-4
          "
        >
          <svg
            viewBox="0 0 900 120"
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-[760px] w-full"
          >
            <defs>
              <marker
                id="a6"
                markerWidth="7"
                markerHeight="7"
                refX="5"
                refY="2.5"
                orient="auto"
              >
                <path
                  d="M0,0 L5,2.5 L0,5 Z"
                  fill="#4FD1E8"
                />
              </marker>
            </defs>

            <text
              x="10"
              y="25"
              fill="#F5A623"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              artisan down
            </text>

            <path
              d="M105,20 L165,20"
              stroke="#4FD1E8"
              strokeWidth="1.3"
              strokeDasharray="3 2"
              markerEnd="url(#a6)"
            />

            <text
              x="175"
              y="25"
              fill="#4FD1E8"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              git pull
            </text>

            <path
              d="M235,20 L300,20"
              stroke="#4FD1E8"
              strokeWidth="1.3"
              strokeDasharray="3 2"
              markerEnd="url(#a6)"
            />

            <text
              x="310"
              y="25"
              fill="#4FD1E8"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              composer install
            </text>

            <path
              d="M435,20 L500,20"
              stroke="#4FD1E8"
              strokeWidth="1.3"
              strokeDasharray="3 2"
              markerEnd="url(#a6)"
            />

            <text
              x="510"
              y="25"
              fill="#4FD1E8"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              npm run build
            </text>

            <path
              d="M620,20 L680,20"
              stroke="#4FD1E8"
              strokeWidth="1.3"
              strokeDasharray="3 2"
              markerEnd="url(#a6)"
            />

            <text
              x="690"
              y="25"
              fill="#4FD1E8"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              cache ulang
            </text>

            <text
              x="10"
              y="70"
              fill="#5FD68C"
              fontFamily="IBM Plex Mono"
              fontSize="11"
            >
              restart worker
            </text>

            <path
              d="M135,65 L200,65"
              stroke="#4FD1E8"
              strokeWidth="1.3"
              strokeDasharray="3 2"
              markerEnd="url(#a6)"
            />

            <text
              x="210"
              y="70"
              fill="#5FD68C"
              fontFamily="IBM Plex Mono"
              fontSize="11"
              fontWeight="700"
            >
              artisan up
            </text>
          </svg>
        </figure>

        <figcaption
          className="
            mt-[-12px]
            mb-6
            font-['IBM_Plex_Mono']
            text-[12px]
            leading-6
            text-[#5C7A8C]
          "
        >
          Alur deployment: maintenance mode → tarik kode →
          update dependency → build asset → cache → restart
          worker → aplikasi kembali online.
        </figcaption>

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
          1 — masuk folder project & maintenance mode
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
            Terminal VPS
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
{`cd /var/www/nama-project
php artisan down`}
          </pre>
        </div>

        <div
          className="
            my-4
            rounded-r
            border-l-[3px]
            border-[#F5A623]
            bg-[rgba(245,166,35,0.06)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <b className="text-[#E8F1F5]">
            Maintenance mode
          </b>{' '}
          membuat pengunjung tidak menggunakan aplikasi
          ketika proses deployment sedang berlangsung.
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
          2 — tarik perubahan terbaru dari GitHub
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
            git pull origin main
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Ganti{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            main
          </code>{' '}
          sesuai nama branch production yang digunakan
          project Anda.
        </p>

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
          3 — update dependency & build asset
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
            Composer + Node.js
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
{`composer install --no-dev --optimize-autoloader
npm install
npm run build`}
          </pre>
        </div>

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
          Jalankan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            npm install
          </code>{' '}
          jika ada perubahan pada{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            package.json
          </code>{' '}
          atau dependency frontend. Setelah itu{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            npm run build
          </code>{' '}
          untuk menghasilkan asset production terbaru.
        </div>

        {/* ================================================= */}
        {/* STEP 4                                            */}
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
          4 — cache ulang konfigurasi Laravel
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
{`php artisan config:cache
php artisan route:cache
php artisan view:cache`}
          </pre>
        </div>

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
          Cache perlu dibuat ulang agar Laravel menggunakan
          konfigurasi, route, dan view terbaru setelah update.
        </div>

        {/* ================================================= */}
        {/* STEP 5                                            */}
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
          5 — restart queue worker (jika menggunakan queue)
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
            sudo systemctl restart laravel-worker
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Lewati langkah ini jika project tidak menggunakan
          queue worker.
        </p>

        {/* ================================================= */}
        {/* STEP 6                                            */}
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
          6 — nonaktifkan maintenance mode
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
            php artisan up
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
          Setelah perintah ini berhasil, aplikasi kembali
          dapat diakses oleh pengguna.
        </div>

        {/* ================================================= */}
        {/* DATABASE WARNING                                  */}
        {/* ================================================= */}

        <div
          className="
            my-5
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
          Sesuai aturan deployment yang digunakan pada panduan
          ini,{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            php artisan migrate
          </code>{' '}
          <b className="text-[#E8F1F5]">
            tidak dijalankan
          </b>{' '}
          dalam alur update. Perubahan struktur database
          dilakukan secara manual dan terkontrol melalui
          pgAdmin.
        </div>

        {/* ================================================= */}
        {/* CHECK                                             */}
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

        <ul
          className="
            my-4
            space-y-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Buka domain production dan pastikan aplikasi
              tampil normal.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Pastikan asset CSS dan JavaScript versi terbaru
              sudah tampil.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Test fitur utama aplikasi setelah deployment.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Jika menggunakan queue, pastikan worker kembali
              aktif.
            </span>
          </li>
        </ul>

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

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              local changes would be overwritten by merge
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Jangan mengedit file project langsung di server,
            kecuali file seperti{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              .env
            </code>
            . Cek terlebih dahulu:
            <br />
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              git status
            </code>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Jika memang ada perubahan lokal yang ingin
            disimpan sementara, gunakan{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              git stash
            </code>
            . Jangan sembarangan membuang perubahan sebelum
            memastikan isinya.
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              npm run build gagal karena kehabisan memory
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Tambahkan atau gunakan swap file pada VPS.
            Konfigurasi swap dibahas di Tahap 23.
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              Queue worker tidak menggunakan kode terbaru
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Restart worker:
            <br />
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sudo systemctl restart laravel-worker
            </code>
          </span>
        </div>

        {/* ================================================= */}
        {/* TIPS                                              */}
        {/* ================================================= */}

        <div
          className="
            my-5
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
          💡{' '}
          <b className="text-[#E8F1F5]">
            Tips:
          </b>{' '}
          Untuk workflow yang lebih rapi, Anda dapat membuat
          script{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            deploy.sh
          </code>{' '}
          yang menjalankan langkah deployment secara
          berurutan. Untuk project yang lebih besar, Anda juga
          dapat mempertimbangkan Laravel Envoy, GitHub
          Actions, atau Deployer.
        </div>
      </div>
    </details>
  )
}

export default PanduanT22