import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT25 = () => {
  return (
    <details
      id="t25"
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
          25
        </span>

        {/* Title */}

        <span>
          Konfigurasi & Cek Max Upload
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
          Menetapkan dan memastikan batas maksimal upload file
          sebesar <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">20M</code>{' '}
          pada server production. Batas upload perlu dicek di
          <b className="text-[#E8F1F5]"> Nginx</b> dan
          <b className="text-[#E8F1F5]"> PHP-FPM</b>.
        </p>

        {/* ================================================= */}
        {/* FLOW                                               */}
        {/* ================================================= */}

        <div
          className="
            my-5
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            px-4
            py-4
            font-['IBM_Plex_Mono']
            text-[13px]
            leading-7
            text-[#8FA8B8]
          "
        >
          Browser
          <span className="px-2 text-[#4FD1E8]">→</span>
          Nginx
          <span className="px-2 text-[#4FD1E8]">→</span>
          PHP-FPM
          <span className="px-2 text-[#4FD1E8]">→</span>
          Laravel
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
          1 — cek batas upload Nginx
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
            sudo nginx -T | grep -n "client_max_body_size"
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Hasil yang diharapkan:
        </p>

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
{`client_max_body_size 20M;`}
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
          2 — jika belum 20M, ubah konfigurasi Nginx
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
            sudo nano /etc/nginx/sites-available/domain-saya.com
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Di dalam blok <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">server</code>,
          pastikan ada:
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
{`client_max_body_size 20M;`}
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Kemudian test dan reload Nginx:
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
{`sudo nginx -t
sudo systemctl reload nginx`}
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
          3 — cek batas upload PHP-FPM
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
{`sudo grep -E "^(upload_max_filesize|post_max_size)" /etc/php/8.3/fpm/php.ini`}
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Pastikan hasilnya:
        </p>

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
{`upload_max_filesize = 20M
post_max_size = 20M`}
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
          4 — ubah jika nilainya belum sesuai
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

        <p className="text-[15px] text-[#8FA8B8]">
          Cari dan sesuaikan:
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
{`upload_max_filesize = 20M
post_max_size = 20M`}
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Setelah itu restart PHP-FPM:
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
            sudo systemctl restart php8.3-fpm
          </pre>
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
          5 — verifikasi konfigurasi PHP-FPM
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
{`php -i | grep upload_max_filesize
php -i | grep post_max_size`}
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
{`upload_max_filesize => 20M => 20M
post_max_size => 20M => 20M`}
        </div>

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
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            php -i
          </code>{' '}
          mengecek konfigurasi PHP CLI. Untuk memastikan konfigurasi
          PHP-FPM yang benar-benar dipakai website, gunakan
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            phpinfo()
          </code>{' '}
          sementara atau lakukan test upload langsung dari aplikasi.
        </div>

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
          6 — test upload dari aplikasi
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Setelah konfigurasi selesai, test fitur upload di aplikasi:
        </p>

        <div
          className="
            my-4
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            px-4
            py-3
            font-['IBM_Plex_Mono']
            text-[14px]
            leading-7
            text-[#8FA8B8]
          "
        >
{`File < 20 MB      → harus berhasil
File sekitar 20 MB → tergantung overhead request & validasi aplikasi
File > 20 MB       → harus ditolak`}
        </div>

        {/* ================================================= */}
        {/* IMPORTANT                                         */}
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
            Penting:
          </b>{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            post_max_size
          </code>{' '}
          menghitung keseluruhan request POST, bukan hanya ukuran file.
          Karena itu, file yang ukurannya tepat 20 MB belum tentu dapat
          di-upload jika request memiliki data tambahan.
        </div>

        {/* ================================================= */}
        {/* ERRORS                                             */}
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

        <div className="my-3 flex gap-3">
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              border
              border-[#EC6A6A]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#EC6A6A]
            "
          >
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              413 Request Entity Too Large
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3">
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              border
              border-[#5FD68C]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#5FD68C]
            "
          >
            ✓
          </span>

          <span className="text-[#8FA8B8]">
            Biasanya batas Nginx terlalu kecil. Cek
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              {' '}client_max_body_size{' '}
            </code>
            lalu reload Nginx.
          </span>
        </div>

        <div className="my-3 flex gap-3">
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              border
              border-[#EC6A6A]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#EC6A6A]
            "
          >
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              Upload gagal tanpa error 413
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3">
          <span
            className="
              flex
              h-6
              w-6
              flex-none
              items-center
              justify-center
              border
              border-[#5FD68C]
              font-['IBM_Plex_Mono']
              text-[12px]
              text-[#5FD68C]
            "
          >
            ✓
          </span>

          <span className="text-[#8FA8B8]">
            Cek
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              {' '}upload_max_filesize{' '}
            </code>
            dan
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              {' '}post_max_size{' '}
            </code>
            pada konfigurasi PHP-FPM.
          </span>
        </div>

        {/* ================================================= */}
        {/* FINAL CHECK                                        */}
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
            py-4
            font-['IBM_Plex_Mono']
            text-[14px]
            leading-7
            text-[#5FD68C]
          "
        >
{`Nginx
client_max_body_size = 20M

PHP-FPM
upload_max_filesize = 20M
post_max_size = 20M

Test aplikasi
Upload < 20 MB = berhasil
Upload > 20 MB = ditolak`}
        </div>
      </div>
    </details>
  )
}

export default PanduanT25