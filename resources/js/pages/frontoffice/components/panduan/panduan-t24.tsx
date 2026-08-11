import React from 'react'
import {
  ChevronRight,
  MapPin,
  Check,
} from 'lucide-react'

const PanduanT24 = () => {
  return (
    <details
      id="t24"
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
          24
        </span>

        {/* Title */}

        <span>
          Checklist Deployment Final
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

          Verifikasi Akhir
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
        {/* INTRO                                              */}
        {/* ================================================= */}

        <p className="text-[15px] text-[#8FA8B8]">
          Gunakan checklist berikut sebelum deployment dianggap
          selesai. Pastikan seluruh poin yang relevan sudah
          diverifikasi di server production.
        </p>

        {/* ================================================= */}
        {/* CHECKLIST                                          */}
        {/* ================================================= */}

        <ul
          className="
            my-5
            list-none
            space-y-2
            p-0
          "
        >
          {/* 1 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              User non-root (
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                sendy
              </code>
              ) dipakai untuk operasional
            </span>
          </li>

          {/* 2 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Firewall aktif, hanya port SSH/80/443 terbuka
            </span>
          </li>

          {/* 3 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Repository berhasil di-clone (public/private sesuai
              kondisi Anda)
            </span>
          </li>

          {/* 4 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                .env
              </code>{' '}
              terkonfigurasi benar dan tidak ter-commit ke Git
            </span>
          </li>

          {/* 5 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              User PostgreSQL{' '}
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                sendy
              </code>{' '}
              dibuat tanpa buat database via CLI
            </span>
          </li>

          {/* 6 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Database dibuat manual via pgAdmin dengan owner yang
              sesuai
            </span>
          </li>

          {/* 7 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Koneksi Laravel ke database terverifikasi
              (read-only, tanpa migration)
            </span>
          </li>

          {/* 8 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                php artisan migrate
              </code>{' '}
              tidak pernah dijalankan
            </span>
          </li>

          {/* 9 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                composer install --no-dev
              </code>{' '}
              berhasil tanpa error
            </span>
          </li>

          {/* 10 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                npm run build
              </code>{' '}
              menghasilkan folder{' '}
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                public/build/
              </code>
            </span>
          </li>

          {/* 11 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Permission{' '}
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                storage/
              </code>{' '}
              &amp;{' '}
              <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
                bootstrap/cache/
              </code>{' '}
              benar
            </span>
          </li>

          {/* 12 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Nginx aktif dan terkonfigurasi
            </span>
          </li>

          {/* 13 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              PHP-FPM aktif dan terhubung ke Nginx
            </span>
          </li>

          {/* 14 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Queue worker aktif (jika project menggunakan queue)
            </span>
          </li>

          {/* 15 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              DNS domain mengarah ke IP VPS dengan benar
            </span>
          </li>

          {/* 16 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              SSL/HTTPS terpasang, redirect HTTP→HTTPS aktif
            </span>
          </li>

          {/* 17 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Auto-renewal SSL terverifikasi
            </span>
          </li>

          {/* 18 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Website bisa diakses penuh via HTTPS tanpa error
            </span>
          </li>

          {/* 19 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Password database sudah diganti ke password kuat
              untuk production
            </span>
          </li>

          {/* 20 */}

          <li
            className="
              flex
              items-start
              gap-3
              border
              border-[#2A6478]
              bg-[#0B1C2B]
              px-4
              py-3
              text-[15px]
              text-[#8FA8B8]
            "
          >
            <Check
              size={18}
              strokeWidth={2}
              className="mt-1 flex-none text-[#5FD68C]"
            />

            <span>
              Sudah paham alur update aplikasi (git pull + rebuild)
            </span>
          </li>
        </ul>

        {/* ================================================= */}
        {/* FINAL CALLOUT                                     */}
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
            Deployment selesai.
          </b>{' '}
          Jika seluruh checklist yang relevan sudah terpenuhi,
          aplikasi siap digunakan di production.
        </div>
      </div>
    </details>
  )
}

export default PanduanT24