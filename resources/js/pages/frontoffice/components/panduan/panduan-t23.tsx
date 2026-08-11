import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT23 = () => {
  return (
    <details
      id="t23"
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
          23
        </span>

        {/* Title */}

        <span>
          Troubleshooting Umum
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

          Referensi
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
        {/* 502 BAD GATEWAY                                   */}
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
          502 Bad Gateway
        </h4>

        <div
          className="
            my-3
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
          <span className="mr-2 text-[#5FD68C]">
            ✓
          </span>

          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            sudo systemctl restart php8.3-fpm nginx
          </code>
        </div>

        {/* ================================================= */}
        {/* 500 INTERNAL SERVER ERROR                         */}
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
          500 Internal Server Error
        </h4>

        <div
          className="
            my-3
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
          <span className="mr-2 text-[#5FD68C]">
            ✓
          </span>

          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            tail -n 50 storage/logs/laravel.log
          </code>{' '}
          untuk detail penyebab.
        </div>

        {/* ================================================= */}
        {/* ASSET CSS/JS                                      */}
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
          Asset CSS/JS tidak termuat
        </h4>

        <div
          className="
            my-3
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
          <span className="mr-2 text-[#5FD68C]">
            ✓
          </span>

          Pastikan{' '}
          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            public/build/
          </code>{' '}
          ada isinya dan{' '}
          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            APP_URL
          </code>{' '}
          sesuai domain sebenarnya.
        </div>

        {/* ================================================= */}
        {/* NPM OUT OF MEMORY                                  */}
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
          npm run build gagal (out of memory)
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
{`sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`}
          </pre>
        </div>

        {/* ================================================= */}
        {/* DATABASE CONNECTION REFUSED                       */}
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
          Database connection refused
        </h4>

        <div
          className="
            my-3
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
          <span className="mr-2 text-[#5FD68C]">
            ✓
          </span>

          Cek{' '}
          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            pg_hba.conf
          </code>{' '}
          dan{' '}
          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            listen_addresses
          </code>{' '}
          di{' '}
          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            postgresql.conf
          </code>{' '}
          agar mengizinkan koneksi dari IP VPS.
        </div>

        {/* ================================================= */}
        {/* SSL                                                    */}
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
          Sertifikat SSL tidak mau terpasang
        </h4>

        <div
          className="
            my-3
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
          <span className="mr-2 text-[#5FD68C]">
            ✓
          </span>

          Pastikan DNS sudah benar mengarah ke VPS dan
          port 80 terbuka, lalu ulangi{' '}
          <code
            className="
              font-['IBM_Plex_Mono']
              text-[14px]
              text-[#BEEAF2]
            "
          >
            certbot --nginx
          </code>.
        </div>
      </div>
    </details>
  )
}

export default PanduanT23