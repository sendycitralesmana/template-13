import React from 'react'

const PanduanHead = () => {
  return (
    <>
      {/* ========================================================= */}
      {/* HERO                                                      */}
      {/* ========================================================= */}

      <div className="mx-auto max-w-[1180px] px-6 pb-10 pt-16">
        <div
          className="
            font-['IBM_Plex_Mono']
            text-[13px]
            uppercase
            tracking-[0.12em]
            text-[#4FD1E8]
          "
        >
          ◆ Dokumen Teknis · Deployment Blueprint
        </div>

        <h1
          className="
            mt-4
            mb-2
            font-['IBM_Plex_Mono']
            text-[clamp(28px,5vw,52px)]
            font-bold
            leading-[1.1]
            tracking-[-0.01em]
          "
        >
          Dari{' '}
          <span className="text-[#4FD1E8]">
            GitHub
          </span>{' '}
          ke Production
          <br />
          di balik{' '}
          <span className="text-[#4FD1E8]">
            HTTPS://
          </span>
        </h1>

        <p
          className="
            mb-7
            max-w-[760px]
            text-lg
            text-[#8FA8B8]
          "
        >
          Panduan lengkap, visual, dan step-by-step untuk deploy aplikasi{' '}
          <b className="text-[#E8F1F5]">
            Laravel 13 + Inertia.js + React TypeScript
          </b>{' '}
          ke VPS Ubuntu — dari clone repository sampai aplikasi hidup di
          domain sendiri dengan sertifikat SSL. Database PostgreSQL dikelola
          manual lewat pgAdmin, migration tidak dijalankan otomatis.
        </p>

        <div className="mb-2 flex flex-wrap gap-2">
          {[
            'Laravel 13',
            'PHP 8.3',
            'Inertia.js',
            'React + TS',
            'Vite',
            'PostgreSQL',
            'Nginx',
            'PHP-FPM',
            "Let's Encrypt",
            'Ubuntu VPS',
          ].map((item) => (
            <span
              key={item}
              className="
                rounded-[2px]
                border
                border-[#2A6478]
                bg-[rgba(79,209,232,0.04)]
                px-[11px]
                py-[5px]
                font-['IBM_Plex_Mono']
                text-[12px]
                text-[#8FA8B8]
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* KONTEN HEAD                                               */}
      {/* ========================================================= */}

      <div className="mx-auto max-w-[1180px] px-6 pb-[60px]">

        {/* ======================================================= */}
        {/* PETA ALUR DEPLOYMENT                                    */}
        {/* ======================================================= */}

        <div
          className="
            relative
            my-7
            border
            border-[#2A6478]
            bg-[#0F2438]
            p-8
          "
        >
          <span
            className="
              absolute
              -left-px
              -top-px
              h-[14px]
              w-[14px]
              border-l-2
              border-t-2
              border-[#4FD1E8]
            "
          />

          <span
            className="
              absolute
              -right-px
              -top-px
              h-[14px]
              w-[14px]
              border-r-2
              border-t-2
              border-[#4FD1E8]
            "
          />

          <span
            className="
              absolute
              -bottom-px
              -left-px
              h-[14px]
              w-[14px]
              border-b-2
              border-l-2
              border-[#4FD1E8]
            "
          />

          <span
            className="
              absolute
              -bottom-px
              -right-px
              h-[14px]
              w-[14px]
              border-b-2
              border-r-2
              border-[#4FD1E8]
            "
          />

          <h2
            className="
              mb-6
              font-['IBM_Plex_Mono']
              text-[clamp(22px,3.2vw,32px)]
              font-semibold
            "
          >
            Peta Alur Deployment
          </h2>

          <p className="-mt-3 text-[#8FA8B8]">
            Skema besar dari kode sampai bisa diakses publik. Setiap kotak
            akan dibahas detail di tahap masing-masing.
          </p>

          {/* ===================================================== */}
          {/* SVG PETA                                               */}
          {/* ===================================================== */}

          <figure className="my-6 overflow-x-auto">
            <svg
              viewBox="0 0 1000 420"
              xmlns="http://www.w3.org/2000/svg"
              className="block min-w-[900px] w-full"
            >
              <defs>
                <marker
                  id="arrow"
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

              {/* connectors */}

              <path
                d="M120,60 L220,60"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              <path
                d="M310,80 L310,140"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              <path
                d="M310,210 L310,260"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              <path
                d="M400,290 L470,290"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              <path
                d="M400,340 L470,340"
                stroke="#F5A623"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              <path
                d="M600,290 L670,290"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              <path
                d="M760,270 L820,180"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              <path
                d="M880,150 L880,90"
                stroke="#5FD68C"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow)"
              />

              {/* GitHub */}

              <rect
                x="10"
                y="30"
                width="110"
                height="60"
                rx="3"
                fill="none"
                stroke="#4FD1E8"
                strokeWidth="1.5"
              />

              <text
                x="65"
                y="55"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fontWeight="600"
              >
                GitHub
              </text>

              <text
                x="65"
                y="72"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                public / private
              </text>

              {/* VPS */}

              <rect
                x="220"
                y="20"
                width="620"
                height="360"
                rx="3"
                fill="none"
                stroke="#2A6478"
                strokeWidth="1"
              />

              <text
                x="236"
                y="14"
                fill="#5C7A8C"
                fontFamily="IBM Plex Mono"
                fontSize="11"
                letterSpacing="1"
              >
                VPS UBUNTU
              </text>

              {/* clone */}

              <rect
                x="250"
                y="30"
                width="120"
                height="50"
                rx="3"
                fill="none"
                stroke="#4FD1E8"
                strokeWidth="1.5"
              />

              <text
                x="310"
                y="50"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="12"
              >
                git clone
              </text>

              <text
                x="310"
                y="65"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                composer · npm
              </text>

              {/* build */}

              <rect
                x="250"
                y="140"
                width="120"
                height="70"
                rx="3"
                fill="none"
                stroke="#4FD1E8"
                strokeWidth="1.5"
              />

              <text
                x="310"
                y="165"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="12"
              >
                vite build
              </text>

              <text
                x="310"
                y="181"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                React + TS
              </text>

              <text
                x="310"
                y="196"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                → public/build
              </text>

              {/* .env */}

              <rect
                x="250"
                y="260"
                width="150"
                height="70"
                rx="3"
                fill="none"
                stroke="#4FD1E8"
                strokeWidth="1.5"
              />

              <text
                x="325"
                y="284"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="12"
              >
                .env config
              </text>

              <text
                x="325"
                y="300"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                DB_HOST / DB_USER
              </text>

              <text
                x="325"
                y="315"
                textAnchor="middle"
                fill="#F5A623"
                fontFamily="IBM Plex Mono"
                fontSize="9.5"
              >
                no migrate
              </text>

              {/* Nginx */}

              <rect
                x="470"
                y="260"
                width="130"
                height="50"
                rx="3"
                fill="none"
                stroke="#4FD1E8"
                strokeWidth="1.5"
              />

              <text
                x="535"
                y="280"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="12"
              >
                Nginx
              </text>

              <text
                x="535"
                y="296"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                + PHP-FPM
              </text>

              {/* PostgreSQL */}

              <rect
                x="470"
                y="315"
                width="130"
                height="55"
                rx="3"
                fill="none"
                stroke="#F5A623"
                strokeWidth="1.5"
                strokeDasharray="3 2"
              />

              <text
                x="535"
                y="337"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="12"
              >
                PostgreSQL
              </text>

              <text
                x="535"
                y="352"
                textAnchor="middle"
                fill="#F5A623"
                fontFamily="IBM Plex Mono"
                fontSize="9.5"
              >
                dibuat via pgAdmin
              </text>

              {/* Domain */}

              <rect
                x="670"
                y="260"
                width="90"
                height="60"
                rx="3"
                fill="none"
                stroke="#4FD1E8"
                strokeWidth="1.5"
              />

              <text
                x="715"
                y="284"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="12"
              >
                Domain
              </text>

              <text
                x="715"
                y="300"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                DNS A-record
              </text>

              {/* SSL */}

              <rect
                x="820"
                y="130"
                width="140"
                height="55"
                rx="3"
                fill="none"
                stroke="#5FD68C"
                strokeWidth="1.5"
              />

              <text
                x="890"
                y="152"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="12"
              >
                Certbot SSL
              </text>

              <text
                x="890"
                y="168"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                Let's Encrypt
              </text>

              {/* HTTPS */}

              <rect
                x="820"
                y="40"
                width="140"
                height="50"
                rx="3"
                fill="rgba(95,214,140,0.08)"
                stroke="#5FD68C"
                strokeWidth="1.8"
              />

              <text
                x="890"
                y="62"
                textAnchor="middle"
                fill="#5FD68C"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fontWeight="700"
              >
                🔒 HTTPS
              </text>

              <text
                x="890"
                y="78"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="9.5"
              >
                domain-saya.com
              </text>
            </svg>
          </figure>

          <p
            className="
              mt-5
              font-['IBM_Plex_Mono']
              text-[13px]
              text-[#5C7A8C]
            "
          >
            Garis putus-putus kuning menandakan jalur yang{' '}
            <b className="text-[#F5A623]">
              tidak
            </b>{' '}
            dieksekusi otomatis oleh script — database & migration dikendalikan
            manual oleh Anda.
          </p>
        </div>

        {/* ======================================================= */}
        {/* REFERENSI CEPAT                                         */}
        {/* ======================================================= */}

        <div className="mt-16">
          <div
            className="
              mb-1
              flex
              items-center
              gap-3
              font-['IBM_Plex_Mono']
              text-[13px]
              uppercase
              tracking-[0.14em]
              text-[#5C7A8C]
            "
          >
            Referensi Cepat

            <span className="h-px flex-1 bg-[#2A6478]" />
          </div>

          <h2
            className="
              mb-6
              font-['IBM_Plex_Mono']
              text-[clamp(22px,3.2vw,32px)]
              font-semibold
            "
          >
            Root vs User Baru — Mana yang Dipakai?
          </h2>

          {/* ===================================================== */}
          {/* ROOT VS USER SVG                                      */}
          {/* ===================================================== */}

          <figure className="my-6 overflow-x-auto">
            <svg
              viewBox="0 0 900 220"
              xmlns="http://www.w3.org/2000/svg"
              className="block min-w-[850px] w-full"
            >
              <defs>
                <marker
                  id="arrow2"
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

              <rect
                x="20"
                y="70"
                width="150"
                height="60"
                rx="3"
                fill="none"
                stroke="#EC6A6A"
                strokeWidth="1.5"
              />

              <text
                x="95"
                y="95"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="13"
              >
                root
              </text>

              <text
                x="95"
                y="112"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="9.5"
              >
                login pertama saja
              </text>

              <path
                d="M170,100 L260,100"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow2)"
              />

              <text
                x="215"
                y="90"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="9"
              >
                adduser + usermod -aG sudo
              </text>

              <rect
                x="260"
                y="60"
                width="180"
                height="80"
                rx="3"
                fill="rgba(79,209,232,0.06)"
                stroke="#4FD1E8"
                strokeWidth="1.8"
              />

              <text
                x="350"
                y="90"
                textAnchor="middle"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="13"
                fontWeight="700"
              >
                sendy (sudo)
              </text>

              <text
                x="350"
                y="108"
                textAnchor="middle"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="9.5"
              >
                dipakai seterusnya
              </text>

              <text
                x="350"
                y="122"
                textAnchor="middle"
                fill="#5FD68C"
                fontFamily="IBM Plex Mono"
                fontSize="9.5"
              >
                ✓ untuk semua operasional
              </text>

              <path
                d="M440,100 L560,100"
                stroke="#4FD1E8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                markerEnd="url(#arrow2)"
              />

              <rect
                x="560"
                y="30"
                width="320"
                height="160"
                rx="3"
                fill="none"
                stroke="#2A6478"
                strokeWidth="1"
              />

              <text
                x="576"
                y="24"
                fill="#5C7A8C"
                fontFamily="IBM Plex Mono"
                fontSize="10"
                letterSpacing="1"
              >
                TUGAS SEHARI-HARI
              </text>

              <text
                x="580"
                y="55"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="11"
              >
                • git clone / git pull
              </text>

              <text
                x="580"
                y="78"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="11"
              >
                • composer / npm install
              </text>

              <text
                x="580"
                y="101"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="11"
              >
                • edit .env, artisan command
              </text>

              <text
                x="580"
                y="124"
                fill="#E8F1F5"
                fontFamily="IBM Plex Mono"
                fontSize="11"
              >
                • sudo systemctl restart nginx
              </text>

              <text
                x="580"
                y="147"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                (butuh sudo → aman, ada jeda
              </text>

              <text
                x="580"
                y="164"
                fill="#8FA8B8"
                fontFamily="IBM Plex Mono"
                fontSize="10"
              >
                konfirmasi password)
              </text>
            </svg>
          </figure>

          <div
            className="
              my-4
              rounded-r
              border-l-[3px]
              border-[#5FD68C]
              bg-[rgba(95,214,140,0.07)]
              px-4
              py-3
              text-[14.5px]
              text-[#8FA8B8]
            "
          >
            <b className="text-[#E8F1F5]">
              Rekomendasi:
            </b>{' '}
            login sebagai <code>root</code> hanya sekali di awal untuk membuat
            user baru (<code>sendy</code>) dengan hak <code>sudo</code>.
            Setelah itu, <b className="text-[#E8F1F5]">semua aktivitas</b> —
            clone, build, edit config, restart service — dilakukan sebagai
            user <code>sendy</code>, memakai <code>sudo</code> hanya saat
            butuh hak admin. Ini standar praktik keamanan server production.
          </div>
        </div>
      </div>
    </>
  )
}

export default PanduanHead