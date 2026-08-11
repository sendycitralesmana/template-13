import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT18 = () => {
  return (
    <details
      id="t18"
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
          18
        </span>

        {/* Title */}

        <span>
          Queue Worker (Opsional)
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
          Menjalankan{' '}
          <b className="text-[#E8F1F5]">
            Laravel Queue Worker
          </b>{' '}
          sebagai service di VPS agar pekerjaan queue tetap
          berjalan di background tanpa harus menjalankan
          <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            php artisan queue:work
          </code>
          secara manual.
        </p>

        {/* ================================================= */}
        {/* CALLOUT                                            */}
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
          Jika project tidak menggunakan queue dan pada
          <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            .env
          </code>
          menggunakan
          <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            QUEUE_CONNECTION=sync
          </code>
          , tahap ini boleh dilewati.
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
          1 — buat service Laravel Queue Worker
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Buat file service systemd berikut:
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
            /etc/systemd/system/laravel-worker.service
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
{`[Unit]
Description=Laravel Queue Worker
After=network.target

[Service]
User=sendy
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/nama-project/artisan queue:work --sleep=3 --tries=3 --max-time=3600

[Install]
WantedBy=multi-user.target`}
          </pre>
        </div>

        {/* ================================================= */}
        {/* CATATAN SERVICE                                   */}
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
            Penting:
          </b>{' '}
          Ganti
          <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            /var/www/nama-project
          </code>
          dengan lokasi project Laravel Anda yang sebenarnya.
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
          2 — reload systemd
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
            sudo systemctl daemon-reload
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
          3 — aktifkan service saat VPS menyala
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
            sudo systemctl enable laravel-worker
          </pre>
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
          4 — jalankan queue worker
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
            sudo systemctl start laravel-worker
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
            sudo systemctl status laravel-worker
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
{`● laravel-worker.service
   Active: active (running)`}
        </div>

        {/* ================================================= */}
        {/* CEK LOG                                           */}
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
          Melihat log queue worker
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
            sudo journalctl -u laravel-worker -n 50 --no-pager
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Perintah tersebut menampilkan 50 log terakhir dari
          service queue worker untuk membantu mencari penyebab
          jika worker mengalami masalah.
        </p>

        {/* ================================================= */}
        {/* RESTART                                           */}
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
          Restart worker setelah perubahan project
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
              Worker terus restart (crash loop)
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#5FD68C]">
            ✓
          </span>

          <span className="text-[#8FA8B8]">
            Lihat detail error menggunakan:
            <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sudo journalctl -u laravel-worker -n 50 --no-pager
            </code>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#EC6A6A]">
            ✕
          </span>

          <span className="text-[#8FA8B8]">
            <b className="text-[#E8F1F5]">
              Worker tidak menemukan artisan
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#5FD68C]">
            ✓
          </span>

          <span className="text-[#8FA8B8]">
            Pastikan path pada
            <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              ExecStart
            </code>
            sesuai dengan lokasi project Laravel Anda.
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#EC6A6A]">
            ✕
          </span>

          <span className="text-[#8FA8B8]">
            <b className="text-[#E8F1F5]">
              Permission denied
            </b>
          </span>
        </div>

        <div className="my-3 flex gap-3 text-[15px] leading-7">
          <span className="flex-none font-bold text-[#5FD68C]">
            ✓
          </span>

          <span className="text-[#8FA8B8]">
            Pastikan user
            <code className="mx-1 font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
              sendy
            </code>
            memiliki akses ke project dan direktori yang diperlukan
            oleh Laravel.
          </span>
        </div>

      </div>
    </details>
  )
}

export default PanduanT18