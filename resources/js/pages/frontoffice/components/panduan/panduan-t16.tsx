import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT16 = () => {
  return (
    <details
      id="t16"
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
          16
        </span>

        {/* Title */}

        <span>
          Konfigurasi Nginx
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
          Mengatur{' '}
          <b className="text-[#E8F1F5]">
            Nginx
          </b>{' '}
          sebagai web server untuk aplikasi Laravel, sehingga
          request dari domain diarahkan ke folder{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            public
          </code>{' '}
          Laravel dan request PHP diteruskan ke{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            PHP-FPM 8.3
          </code>
          .
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
          1 — install Nginx
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
            sudo apt install nginx -y
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
          2 — buat konfigurasi virtual host
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Buat file konfigurasi khusus untuk domain aplikasi Anda.
          Ganti{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            domain-saya.com
          </code>{' '}
          dengan domain asli Anda.
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
            sudo nano /etc/nginx/sites-available/domain-saya.com
          </pre>
        </div>

        {/* ================================================= */}
        {/* NGINX CONFIG                                      */}
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
          3 — isi konfigurasi Nginx
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
            /etc/nginx/sites-available/domain-saya.com
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
{`server {
    listen 80;
    server_name domain-saya.com www.domain-saya.com;

    root /var/www/nama-project/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\\.(?!well-known).* {
        deny all;
    }

    client_max_body_size 20M;
}`}
          </pre>
        </div>

        {/* ================================================= */}
        {/* CONFIG NOTES                                      */}
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
            Wajib disesuaikan:
          </b>

          <div className="mt-2">
            •{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              server_name
            </code>{' '}
            → domain asli Anda.
          </div>

          <div>
            •{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              root
            </code>{' '}
            → path folder{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              public
            </code>{' '}
            project Laravel Anda.
          </div>

          <div>
            •{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              fastcgi_pass
            </code>{' '}
            → harus sesuai socket PHP-FPM yang terpasang.
          </div>
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
          4 — aktifkan konfigurasi
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
{`sudo ln -s /etc/nginx/sites-available/domain-saya.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx`}
          </pre>
        </div>

        {/* ================================================= */}
        {/* CHECK NGINX CONFIG                                */}
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
          Cara mengecek konfigurasi berhasil
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
            sudo nginx -t
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
{`nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful`}
        </div>

        {/* ================================================= */}
        {/* SERVICE CHECK                                     */}
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
          Cara mengecek service Nginx
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
            sudo systemctl status nginx
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
{`Active: active (running)`}
        </div>

        {/* ================================================= */}
        {/* SUCCESS                                           */}
        {/* ================================================= */}

        <div
          className="
            my-4
            rounded-r
            border-l-[3px]
            border-[#5FD68C]
            bg-[rgba(95,214,140,0.07)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <b className="text-[#E8F1F5]">
            Jika berhasil:
          </b>{' '}
          Nginx sudah aktif dan konfigurasi virtual host untuk domain
          Anda sudah terbaca. Setelah DNS domain diarahkan ke IP VPS,
          request HTTP akan diteruskan ke aplikasi Laravel.
        </div>

        {/* ================================================= */}
        {/* IF FAILED                                         */}
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

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              duplicate listen options
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Periksa konfigurasi default Nginx. Jika tidak digunakan,
            hapus konfigurasi default lalu test kembali:
            <div className="mt-2 overflow-hidden border border-[#2A6478]">
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
                sudo rm /etc/nginx/sites-enabled/default
                {'\n'}sudo nginx -t
              </pre>
            </div>
          </span>
        </div>

        {/* ERROR 2 */}

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              connect() to unix:/run/php/php8.3-fpm.sock failed
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Pastikan PHP-FPM 8.3 terpasang dan servicenya berjalan:
            <div className="mt-2 overflow-hidden border border-[#2A6478]">
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
{`sudo systemctl status php8.3-fpm
sudo systemctl restart php8.3-fpm`}
              </pre>
            </div>
          </span>
        </div>

        {/* ERROR 3 */}

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              404 / 403 setelah membuka domain
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Periksa nilai{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              root
            </code>{' '}
            di konfigurasi Nginx. Pastikan mengarah ke folder
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              {' '}public
            </code>{' '}
            Laravel, misalnya:
            <div className="mt-2 overflow-hidden border border-[#2A6478]">
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
                root /var/www/nama-project/public;
              </pre>
            </div>
          </span>
        </div>

        {/* ================================================= */}
        {/* FINAL NOTE                                        */}
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
          Tahap ini hanya mengatur akses HTTP melalui port{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            80
          </code>
          . HTTPS/SSL akan dikonfigurasi pada tahap berikutnya setelah
          domain sudah mengarah ke IP VPS.
        </div>
      </div>
    </details>
  )
}

export default PanduanT16