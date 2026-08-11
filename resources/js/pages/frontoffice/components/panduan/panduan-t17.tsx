import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT17 = () => {
  return (
    <details
      id="t17"
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
          17
        </span>

        {/* Title */}

        <span>
          Konfigurasi PHP-FPM
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
          Memastikan{' '}
          <b className="text-[#E8F1F5]">
            PHP-FPM 8.3
          </b>{' '}
          berjalan dengan benar dan dikonfigurasi agar Nginx dapat
          meneruskan request PHP ke Laravel.
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
            p-3
          "
        >
          <svg
            viewBox="0 0 800 140"
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-[700px] w-full"
          >
            <defs>
              <marker
                id="a4"
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

            {/* Browser */}

            <rect
              x="10"
              y="45"
              width="120"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="70"
              y="75"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Browser
            </text>

            {/* Browser → Nginx */}

            <path
              d="M130,70 L220,70"
              stroke="#4FD1E8"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#a4)"
            />

            <text
              x="175"
              y="60"
              textAnchor="middle"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="9"
            >
              :443
            </text>

            {/* Nginx */}

            <rect
              x="220"
              y="45"
              width="120"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="280"
              y="75"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Nginx
            </text>

            {/* Nginx → PHP-FPM */}

            <path
              d="M340,70 L430,70"
              stroke="#4FD1E8"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#a4)"
            />

            <text
              x="385"
              y="60"
              textAnchor="middle"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="9"
            >
              .sock
            </text>

            {/* PHP-FPM */}

            <rect
              x="430"
              y="45"
              width="140"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="500"
              y="75"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              PHP-FPM
            </text>

            {/* PHP-FPM → Laravel */}

            <path
              d="M570,70 L660,70"
              stroke="#4FD1E8"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#a4)"
            />

            {/* Laravel */}

            <rect
              x="660"
              y="45"
              width="130"
              height="50"
              rx="3"
              fill="none"
              stroke="#5FD68C"
              strokeWidth="1.5"
            />

            <text
              x="725"
              y="75"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Laravel
            </text>
          </svg>
        </figure>

        <p
          className="
            mb-6
            text-[13px]
            leading-6
            text-[#5C7A8C]
          "
        >
          Alur request: Browser → Nginx → PHP-FPM → Laravel.
          Nginx meneruskan file PHP ke PHP-FPM melalui Unix socket.
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
          1 — cek status PHP-FPM
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
            sudo systemctl status php8.3-fpm
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
          2 — cek konfigurasi PHP-FPM
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
            sudo nano /etc/php/8.3/fpm/php.ini
          </pre>
        </div>

        {/* ================================================= */}
        {/* PHP.INI                                           */}
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
          3 — (opsional) tuning php.ini
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Jika aplikasi membutuhkan upload file lebih besar atau
          proses PHP yang lebih panjang, sesuaikan nilai berikut:
        </p>

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
            php.ini
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
{`upload_max_filesize = 20M
post_max_size = 20M
memory_limit = 256M
max_execution_time = 60`}
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
          <b className="text-[#E8F1F5]">
            Catatan:
          </b>{' '}
          Tuning di atas bersifat opsional. Jangan menaikkan
          <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            memory_limit
          </code>
          terlalu tinggi jika RAM VPS terbatas.
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
          4 — restart PHP-FPM
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
            sudo systemctl restart php8.3-fpm
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
            sudo systemctl status php8.3-fpm
          </pre>
        </div>

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
{`● php8.3-fpm.service
   Active: active (running)`}
        </div>

        {/* ================================================= */}
        {/* SOCKET CHECK                                      */}
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
          Cek Unix socket PHP-FPM
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
            ls -la /run/php/php8.3-fpm.sock
          </pre>
        </div>

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
          srw-rw---- ... /run/php/php8.3-fpm.sock
        </div>

        {/* ================================================= */}
        {/* IMPORTANT                                         */}
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
            Pastikan versi socket sesuai:
          </b>{' '}
          konfigurasi Nginx pada Tahap 16 menggunakan
          <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            /run/php/php8.3-fpm.sock
          </code>
          . Jika PHP-FPM menggunakan versi berbeda, path socket
          di konfigurasi Nginx harus disesuaikan.
        </div>

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

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#EC6A6A]">
            ✕
          </span>

          <span className="text-[#8FA8B8]">
            <b className="text-[#E8F1F5]">
              Nginx menampilkan 502 Bad Gateway
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#5FD68C]">
            ✓
          </span>

          <span className="text-[#8FA8B8]">
            PHP-FPM tidak berjalan atau path socket salah. Cek:
            <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sudo systemctl status php8.3-fpm
            </code>
            dan log Nginx:
            <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sudo tail -f /var/log/nginx/error.log
            </code>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#EC6A6A]">
            ✕
          </span>

          <span className="text-[#8FA8B8]">
            <b className="text-[#E8F1F5]">
              Unit php8.3-fpm.service could not be found
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#5FD68C]">
            ✓
          </span>

          <span className="text-[#8FA8B8]">
            Pastikan PHP 8.3-FPM sudah terinstall. Jalankan:
            <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sudo apt install php8.3-fpm -y
            </code>
            lalu cek kembali status service.
          </span>
        </div>

      </div>
    </details>
  )
}

export default PanduanT17