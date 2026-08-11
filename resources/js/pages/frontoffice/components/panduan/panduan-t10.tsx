import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT10 = () => {
  return (
    <details
      id="t10"
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
          10
        </span>

        {/* Title */}

        <span>
          Clone Project dari GitHub
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
          Mengambil source code project dari GitHub ke VPS agar
          project Laravel dapat dipersiapkan untuk proses deployment.
          Pilih metode clone sesuai jenis repository Anda:
          <b className="text-[#E8F1F5]">
            public
          </b>{' '}
          atau{' '}
          <b className="text-[#E8F1F5]">
            private
          </b>
          .
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
          Pastikan Anda sudah menyelesaikan{' '}
          <b className="text-[#E8F1F5]">
            Tahap 4 — Setup Akses GitHub
          </b>
          . Untuk repository private, VPS harus sudah memiliki
          akses menggunakan SSH key atau Personal Access Token.
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
          1 — siapkan direktori project
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
{`sudo mkdir -p /var/www
sudo chown sendy:sendy /var/www
cd /var/www`}
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
          2 — clone repository GitHub
        </h4>

        <p className="mb-3 text-[15px] text-[#8FA8B8]">
          🟢{' '}
          <b className="text-[#5FD68C]">
            Repository PUBLIC
          </b>
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
            git clone https://github.com/username/nama-project.git
          </pre>
        </div>

        {/* ================================================= */}
        {/* PRIVATE SSH                                       */}
        {/* ================================================= */}

        <p className="mt-6 mb-3 text-[15px] text-[#8FA8B8]">
          🔴{' '}
          <b className="text-[#EC6A6A]">
            Repository PRIVATE — SSH
          </b>
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
            git clone git@github.com:username/nama-project.git
          </pre>
        </div>

        <p className="text-[15px] text-[#8FA8B8]">
          Gunakan metode ini jika SSH key dari VPS sudah ditambahkan
          ke GitHub pada Tahap 4.
        </p>

        {/* ================================================= */}
        {/* PRIVATE TOKEN                                     */}
        {/* ================================================= */}

        <p className="mt-6 mb-3 text-[15px] text-[#8FA8B8]">
          🔴{' '}
          <b className="text-[#EC6A6A]">
            Repository PRIVATE — Personal Access Token
          </b>
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
            git clone https://TOKEN@github.com/username/nama-project.git
          </pre>
        </div>

        {/* ================================================= */}
        {/* TOKEN WARNING                                     */}
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
            Catatan keamanan:
          </b>{' '}
          Jangan menuliskan Personal Access Token ke file project,
          dokumentasi yang di-commit, atau repository GitHub.
          Untuk deployment jangka panjang,{' '}
          <b className="text-[#E8F1F5]">
            SSH key lebih disarankan
          </b>{' '}
          daripada menaruh token langsung di URL.
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
          3 — masuk ke folder project
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
            cd nama-project
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
            ls -la
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
{`app/
artisan
composer.json
resources/
routes/
...`}
        </div>

        {/* ================================================= */}
        {/* ERROR                                              */}
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

        <div
          className="
            my-3
            flex
            items-start
            gap-3
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
              fatal: could not read Username for
              {' '}
              'https://github.com'
            </b>
          </span>
        </div>

        <div
          className="
            my-3
            flex
            items-start
            gap-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            Repo private tetapi clone menggunakan URL HTTPS biasa
            tanpa autentikasi. Gunakan URL SSH atau Personal Access
            Token sesuai konfigurasi pada Tahap 4.
          </span>
        </div>

        {/* ERROR 2 */}

        <div
          className="
            my-3
            flex
            items-start
            gap-3
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
              Permission denied (publickey)
            </b>
          </span>
        </div>

        <div
          className="
            my-3
            flex
            items-start
            gap-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <span className="flex-none text-[#5FD68C]">
            ✓
          </span>

          <span>
            SSH key belum terdaftar di GitHub atau SSH key yang
            digunakan bukan key yang benar. Pastikan public key dari
            VPS sudah ditambahkan ke GitHub dan lakukan pengecekan
            koneksi dengan:
          </span>
        </div>

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
            ssh -T git@github.com
          </pre>
        </div>

        {/* ================================================= */}
        {/* FINAL NOTE                                        */}
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
          Setelah berhasil clone, pastikan Anda berada di folder
          project yang benar sebelum melanjutkan ke tahap berikutnya.
          Folder ini nantinya akan menjadi lokasi utama source code
          Laravel di VPS.
        </div>
      </div>
    </details>
  )
}

export default PanduanT10