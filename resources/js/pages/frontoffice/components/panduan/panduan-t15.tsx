import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT15 = () => {
  return (
    <details
      id="t15"
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
          15
        </span>

        {/* Title */}

        <span>
          Permission & Storage Link
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
          Mengatur permission folder Laravel agar aplikasi dapat
          membaca dan menulis file yang diperlukan, kemudian membuat
          symbolic link dari{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            storage/app/public
          </code>{' '}
          ke folder{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            public/storage
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
          1 — atur ownership project
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
            sudo chown -R sendy:www-data /var/www/nama-project
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Perintah ini membuat user{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            sendy
          </code>{' '}
          sebagai owner project dan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            www-data
          </code>{' '}
          sebagai group yang digunakan oleh web server.
        </p>

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
          2 — atur permission storage dan cache
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
            sudo chmod -R 775 storage bootstrap/cache
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Laravel membutuhkan akses tulis pada folder{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            storage
          </code>{' '}
          dan{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            bootstrap/cache
          </code>{' '}
          untuk log, cache, session, dan file aplikasi lainnya.
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
          3 — buat storage link
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
            php artisan storage:link
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Perintah ini membuat symbolic link agar file yang disimpan
          pada{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            storage/app/public
          </code>{' '}
          dapat diakses melalui URL dari folder{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            public/storage
          </code>
          .
        </p>

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
            ls -la public/storage
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
{`public/storage -> ../storage/app/public`}
        </div>

        {/* ================================================= */}
        {/* SUCCESS OUTPUT                                    */}
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
          Laravel akan menampilkan pesan:
          <div className="mt-2">
            <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#5FD68C]">
              The [public/storage] link has been connected to
              [storage/app/public].
            </code>
          </div>
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

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              The [public/storage] directory already exists.
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Jika link sudah pernah dibuat, hapus link lama terlebih
            dahulu lalu jalankan kembali:
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
                rm public/storage
                {'\n'}php artisan storage:link
              </pre>
            </div>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#EC6A6A]">
            ✕
          </span>

          <span>
            <b className="text-[#E8F1F5]">
              Permission denied
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7 text-[#8FA8B8]">
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Pastikan ownership dan permission folder sudah benar.
            Jalankan kembali:
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
                sudo chown -R sendy:www-data /var/www/nama-project
                {'\n'}sudo chmod -R 775 storage bootstrap/cache
              </pre>
            </div>
          </span>
        </div>
      </div>
    </details>
  )
}

export default PanduanT15