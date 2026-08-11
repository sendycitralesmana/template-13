import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT20 = () => {
  return (
    <details
      id="t20"
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
          20
        </span>

        {/* Title */}

        <span>
          SSL / HTTPS dengan Certbot
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
          Mengaktifkan{' '}
          <b className="text-[#E8F1F5]">
            HTTPS
          </b>{' '}
          untuk domain Laravel menggunakan sertifikat SSL
          gratis dari{' '}
          <b className="text-[#E8F1F5]">
            Let's Encrypt
          </b>
          .
        </p>

        {/* ================================================= */}
        {/* DIAGRAM                                            */}
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
          Alur pemasangan SSL
        </h4>

        <figure
          className="
            my-5
            overflow-x-auto
            border
            border-[#2A6478]
            bg-[#0B1C2B]
            p-3
          "
        >
          <svg
            viewBox="0 0 820 130"
            xmlns="http://www.w3.org/2000/svg"
            className="min-w-[700px]"
          >
            <defs>
              <marker
                id="a5"
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

            {/* Certbot */}

            <rect
              x="10"
              y="40"
              width="140"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="80"
              y="70"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              certbot --nginx
            </text>

            {/* Arrow */}

            <path
              d="M150,65 L250,65"
              stroke="#4FD1E8"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#a5)"
            />

            {/* Let's Encrypt */}

            <rect
              x="250"
              y="40"
              width="180"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="340"
              y="60"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Let's Encrypt CA
            </text>

            <text
              x="340"
              y="76"
              textAnchor="middle"
              fill="#8FA8B8"
              fontFamily="IBM Plex Mono"
              fontSize="9"
            >
              verifikasi domain
            </text>

            {/* Arrow */}

            <path
              d="M430,65 L530,65"
              stroke="#4FD1E8"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#a5)"
            />

            {/* SSL */}

            <rect
              x="530"
              y="40"
              width="140"
              height="50"
              rx="3"
              fill="none"
              stroke="#4FD1E8"
              strokeWidth="1.5"
            />

            <text
              x="600"
              y="70"
              textAnchor="middle"
              fill="#E8F1F5"
              fontFamily="IBM Plex Mono"
              fontSize="12"
            >
              Sertifikat SSL
            </text>

            {/* Arrow */}

            <path
              d="M670,65 L740,65"
              stroke="#5FD68C"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              markerEnd="url(#a5)"
            />

            {/* HTTPS */}

            <rect
              x="740"
              y="35"
              width="70"
              height="60"
              rx="3"
              fill="rgba(95,214,140,0.08)"
              stroke="#5FD68C"
              strokeWidth="1.8"
            />

            <text
              x="775"
              y="70"
              textAnchor="middle"
              fill="#5FD68C"
              fontFamily="IBM Plex Mono"
              fontSize="18"
            >
              🔒
            </text>
          </svg>
        </figure>

        <p className="text-[13px] leading-6 text-[#5C7A8C]">
          Certbot akan meminta sertifikat ke Let's Encrypt,
          melakukan verifikasi domain, kemudian dapat
          mengubah konfigurasi Nginx agar HTTP diarahkan
          otomatis ke HTTPS.
        </p>

        {/* ================================================= */}
        {/* PREREQUISITE                                      */}
        {/* ================================================= */}

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
            ⚠️ Prasyarat:
          </b>{' '}
          Domain harus sudah mengarah ke IP VPS dan
          konfigurasi Nginx pada Tahap 16 sudah aktif.
          Pastikan juga port{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            80
          </code>{' '}
          dan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            443
          </code>{' '}
          diizinkan oleh firewall.
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
          1 — install Certbot
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
            sudo apt install certbot python3-certbot-nginx -y
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
          2 — jalankan Certbot
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
            sudo certbot --nginx -d domain-saya.com -d www.domain-saya.com
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Ikuti pertanyaan yang muncul di terminal:
        </p>

        <div className="my-4 space-y-3">
          <div
            className="
              flex
              gap-3
              border
              border-[#2A6478]
              bg-[rgba(79,209,232,0.04)]
              px-4
              py-3
              text-[15px]
              leading-7
              text-[#8FA8B8]
            "
          >
            <span className="flex-none text-[#4FD1E8]">
              1
            </span>

            <span>
              Masukkan email yang aktif untuk menerima
              notifikasi penting terkait sertifikat.
            </span>
          </div>

          <div
            className="
              flex
              gap-3
              border
              border-[#2A6478]
              bg-[rgba(79,209,232,0.04)]
              px-4
              py-3
              text-[15px]
              leading-7
              text-[#8FA8B8]
            "
          >
            <span className="flex-none text-[#4FD1E8]">
              2
            </span>

            <span>
              Baca dan setujui Terms of Service Let's Encrypt.
            </span>
          </div>

          <div
            className="
              flex
              gap-3
              border
              border-[#2A6478]
              bg-[rgba(95,214,140,0.04)]
              px-4
              py-3
              text-[15px]
              leading-7
              text-[#8FA8B8]
            "
          >
            <span className="flex-none text-[#5FD68C]">
              3
            </span>

            <span>
              Jika ditawarkan redirect otomatis, pilih opsi
              redirect HTTP → HTTPS agar pengunjung selalu
              menggunakan koneksi HTTPS.
            </span>
          </div>
        </div>

        {/* ================================================= */}
        {/* OUTPUT                                             */}
        {/* ================================================= */}

        <div
          className="
            my-4
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
{`Successfully received certificate.
Congratulations! You have successfully enabled HTTPS`}
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
          3 — verifikasi auto-renewal
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Let's Encrypt memiliki masa berlaku sertifikat
          yang terbatas. Pastikan timer Certbot aktif dan
          proses renewal dapat berjalan.
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
{`sudo systemctl status certbot.timer
sudo certbot renew --dry-run`}
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
            curl -I https://domain-saya.com
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
{`HTTP/2 200
...`}
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
          Buka{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            https://domain-saya.com
          </code>{' '}
          di browser. Jika halaman Laravel tampil dengan
          ikon gembok 🔒 dan tidak ada peringatan sertifikat,
          HTTPS sudah aktif.
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

        {/* Error 1 */}

        <div
          className="
            my-3
            flex
            gap-3
            border
            border-[#2A6478]
            bg-[rgba(236,106,106,0.04)]
            px-4
            py-3
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
              Challenge failed for domain
            </b>
          </span>
        </div>

        <div
          className="
            my-3
            flex
            gap-3
            border
            border-[#2A6478]
            bg-[rgba(95,214,140,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Pastikan DNS sudah mengarah ke IP VPS dan
            port 80 dapat diakses dari internet. Cek:
            <div className="my-2 overflow-hidden border border-[#2A6478]">
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
                sudo ufw status
              </pre>
            </div>
          </span>
        </div>

        {/* Error 2 */}

        <div
          className="
            my-3
            flex
            gap-3
            border
            border-[#2A6478]
            bg-[rgba(236,106,106,0.04)]
            px-4
            py-3
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
              Port 80 atau 443 tidak dapat diakses
            </b>
          </span>
        </div>

        <div
          className="
            my-3
            flex
            gap-3
            border
            border-[#2A6478]
            bg-[rgba(95,214,140,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Pastikan firewall mengizinkan HTTP dan HTTPS:
            <div className="my-2 overflow-hidden border border-[#2A6478]">
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
{`sudo ufw allow 80
sudo ufw allow 443
sudo ufw status`}
              </pre>
            </div>
          </span>
        </div>

        {/* Error 3 */}

        <div
          className="
            my-3
            flex
            gap-3
            border
            border-[#2A6478]
            bg-[rgba(236,106,106,0.04)]
            px-4
            py-3
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
              Nginx configuration error
            </b>
          </span>
        </div>

        <div
          className="
            my-3
            flex
            gap-3
            border
            border-[#2A6478]
            bg-[rgba(95,214,140,0.04)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Test konfigurasi Nginx sebelum menjalankan
            Certbot:
            <div className="my-2 overflow-hidden border border-[#2A6478]">
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

            Jika muncul{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              syntax is ok
            </code>{' '}
            dan{' '}
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              test is successful
            </code>
            , konfigurasi Nginx siap digunakan.
          </span>
        </div>

        {/* ================================================= */}
        {/* FINAL NOTE                                        */}
        {/* ================================================= */}

        <div
          className="
            my-5
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
          📝 Setelah Tahap 20 selesai, akses utama aplikasi
          seharusnya menggunakan{' '}
          <b className="text-[#E8F1F5]">
            HTTPS
          </b>
          , misalnya{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            https://domain-saya.com
          </code>
          .
        </div>
      </div>
    </details>
  )
}

export default PanduanT20