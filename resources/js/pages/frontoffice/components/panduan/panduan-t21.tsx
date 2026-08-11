import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT21 = () => {
  return (
    <details
      id="t21"
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
          21
        </span>

        {/* Title */}

        <span>
          Testing Production
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

          Browser + Terminal VPS
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
          Memastikan aplikasi Laravel sudah berjalan dengan
          benar di{' '}
          <b className="text-[#E8F1F5]">
            production
          </b>
          , HTTPS aktif, asset Vite terbaca, koneksi database
          berjalan, dan tidak ada error penting pada aplikasi
          maupun Nginx.
        </p>

        {/* ================================================= */}
        {/* CHECKLIST                                         */}
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
          1 — cek aplikasi melalui browser
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
              Buka{' '}
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                https://domain-saya.com
              </code>{' '}
              dan pastikan halaman aplikasi muncul dengan
              benar serta terdapat ikon gembok 🔒.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Pastikan tidak ada halaman{' '}
              <b className="text-[#E8F1F5]">
                404
              </b>
              ,{' '}
              <b className="text-[#E8F1F5]">
                403
              </b>
              , atau{' '}
              <b className="text-[#E8F1F5]">
                500
              </b>
              .
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Buka{' '}
              <b className="text-[#E8F1F5]">
                DevTools → Console
              </b>{' '}
              dan pastikan tidak ada error JavaScript
              maupun asset yang gagal dimuat.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Buka{' '}
              <b className="text-[#E8F1F5]">
                DevTools → Network
              </b>{' '}
              dan pastikan file CSS, JS, gambar, dan asset
              Vite tidak menghasilkan status{' '}
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                404
              </code>
              .
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Test fitur utama aplikasi yang menggunakan
              database, misalnya login, submit form, tambah
              data, edit data, atau hapus data.
            </span>
          </li>
        </ul>

        {/* ================================================= */}
        {/* LARAVEL LOG                                       */}
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
          2 — cek log Laravel
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
            tail -f storage/logs/laravel.log
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
          Jika tidak ada error baru saat fitur aplikasi
          digunakan, berarti dari sisi Laravel tidak terlihat
          masalah yang sedang terjadi.
        </div>

        {/* ================================================= */}
        {/* NGINX LOG                                         */}
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
          3 — cek log Nginx
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
            sudo tail -f /var/log/nginx/error.log
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
          Perhatikan terutama error seperti{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            502 Bad Gateway
          </code>
          ,{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            permission denied
          </code>
          , atau masalah koneksi ke PHP-FPM.
        </div>

        {/* ================================================= */}
        {/* HTTP → HTTPS                                      */}
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
          4 — cek redirect HTTP → HTTPS
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
            curl -I http://domain-saya.com
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
{`HTTP/1.1 301 Moved Permanently
Location: https://domain-saya.com/`}
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Status{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            301
          </code>{' '}
          atau{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            302
          </code>{' '}
          menunjukkan bahwa HTTP diarahkan ke HTTPS.
        </p>

        {/* ================================================= */}
        {/* CHECK DATABASE                                    */}
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
          5 — test fitur yang menggunakan database
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
              Login menggunakan akun yang valid.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Coba membaca data dari database.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Coba membuat atau submit data baru.
            </span>
          </li>

          <li className="flex gap-3">
            <span className="flex-none text-[#5FD68C]">
              ✓
            </span>

            <span>
              Coba edit atau hapus data jika fitur tersebut
              tersedia.
            </span>
          </li>
        </ul>

        {/* ================================================= */}
        {/* FINAL CHECK                                       */}
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
          <b className="text-[#E8F1F5]">
            Production dianggap berhasil
          </b>{' '}
          jika domain dapat dibuka melalui HTTPS, halaman
          Laravel tampil normal, asset CSS/JS tidak 404,
          fitur database berjalan, tidak ada error penting di
          log Laravel/Nginx, dan HTTP otomatis diarahkan ke
          HTTPS.
        </div>

        {/* ================================================= */}
        {/* JIKA GAGAL                                        */}
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
              502 Bad Gateway
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Cek status PHP-FPM:
            <br />
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sudo systemctl status php8.3-fpm
            </code>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              Asset CSS/JS 404
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Pastikan{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              npm run build
            </code>{' '}
            sudah berhasil dan folder{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              public/build
            </code>{' '}
            berisi hasil build.
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              Error database / SQLSTATE
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Periksa kembali{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_HOST
            </code>
            ,{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_PORT
            </code>
            ,{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_DATABASE
            </code>
            ,{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_USERNAME
            </code>
            , dan{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              DB_PASSWORD
            </code>{' '}
            di{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              .env
            </code>
            .
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              HTTP tidak redirect ke HTTPS
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Cek konfigurasi Nginx dan konfigurasi Certbot,
            kemudian ulangi pengecekan dengan:
            <br />
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              curl -I http://domain-saya.com
            </code>
          </span>
        </div>
      </div>
    </details>
  )
}

export default PanduanT21