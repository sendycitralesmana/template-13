import React from 'react'
import {
  ChevronRight,
  MapPin,
} from 'lucide-react'

const PanduanT19 = () => {
  return (
    <details
      id="t19"
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
          19
        </span>

        {/* Title */}

        <span>
          Domain / DNS
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

          Panel DNS Provider
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
          Mengarahkan domain Anda ke IP VPS agar aplikasi Laravel
          dapat diakses menggunakan nama domain, misalnya{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            domain-saya.com
          </code>
          .
        </p>

        {/* ================================================= */}
        {/* LANGKAH 1                                         */}
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
          1 — buka panel DNS provider
        </h4>

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
          Login ke panel tempat DNS domain Anda dikelola.
          Nama menu dapat berbeda-beda, misalnya{' '}
          <b className="text-[#E8F1F5]">
            DNS Management
          </b>
          ,{' '}
          <b className="text-[#E8F1F5]">
            DNS Records
          </b>
          , atau{' '}
          <b className="text-[#E8F1F5]">
            Manage DNS
          </b>
          .
        </div>

        {/* ================================================= */}
        {/* LANGKAH 2                                         */}
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
          2 — buat A Record untuk domain utama
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Buat record DNS dengan nilai berikut:
        </p>

        <div className="my-4 overflow-x-auto border border-[#2A6478]">
          <table className="w-full min-w-[560px] border-collapse font-['IBM_Plex_Mono'] text-[14px]">
            <thead>
              <tr className="bg-[#132D43] text-left">
                <th className="border-b border-[#2A6478] px-4 py-3 text-[#E8F1F5]">
                  Type
                </th>

                <th className="border-b border-[#2A6478] px-4 py-3 text-[#E8F1F5]">
                  Name
                </th>

                <th className="border-b border-[#2A6478] px-4 py-3 text-[#E8F1F5]">
                  Value
                </th>

                <th className="border-b border-[#2A6478] px-4 py-3 text-[#E8F1F5]">
                  TTL
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-b border-[#2A6478] px-4 py-3 text-[#4FD1E8]">
                  A
                </td>

                <td className="border-b border-[#2A6478] px-4 py-3 text-[#BEEAF2]">
                  @
                </td>

                <td className="border-b border-[#2A6478] px-4 py-3 text-[#5FD68C]">
                  IP_VPS_ANDA
                </td>

                <td className="border-b border-[#2A6478] px-4 py-3 text-[#8FA8B8]">
                  Auto
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3 text-[#4FD1E8]">
                  A
                </td>

                <td className="px-4 py-3 text-[#BEEAF2]">
                  www
                </td>

                <td className="px-4 py-3 text-[#5FD68C]">
                  IP_VPS_ANDA
                </td>

                <td className="px-4 py-3 text-[#8FA8B8]">
                  Auto
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
            Catatan:
          </b>{' '}
          Ganti{' '}
          <code className="font-['IBM_Plex_Mono'] text-[14px] text-[#BEEAF2]">
            IP_VPS_ANDA
          </code>{' '}
          dengan IP publik VPS yang sebenarnya.
        </div>

        {/* ================================================= */}
        {/* LANGKAH 3                                         */}
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
          3 — simpan perubahan DNS
        </h4>

        <p className="text-[15px] text-[#8FA8B8]">
          Setelah A Record dibuat, simpan perubahan pada
          panel DNS provider Anda.
        </p>

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
          Perubahan DNS tidak selalu langsung terlihat.
          Propagasi dapat berlangsung dari beberapa menit
          hingga beberapa jam, dan dalam kondisi tertentu
          bisa lebih lama.
        </div>

        {/* ================================================= */}
        {/* CHECK                                             */}
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
            dig domain-saya.com +short
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
{`203.0.113.10`}
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
          IP yang muncul harus sama dengan IP publik VPS
          Anda. Jika sama, berarti DNS domain sudah mengarah
          ke VPS.
        </div>

        {/* ================================================= */}
        {/* WWW CHECK                                         */}
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
          Cek domain www
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
            dig www.domain-saya.com +short
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
{`203.0.113.10`}
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
              dig: command not found
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
            Install paket DNS utility jika diperlukan:
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
                sudo apt install dnsutils -y
              </pre>
            </div>
          </span>
        </div>

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
              dig tidak menampilkan IP VPS
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
            Periksa kembali A Record pada panel DNS.
            Pastikan Name/Host dan Value sudah benar,
            kemudian tunggu propagasi DNS selesai.
          </span>
        </div>

        <div
          className="
            my-4
            rounded-r
            border-l-[3px]
            border-[#EC6A6A]
            bg-[rgba(236,106,106,0.07)]
            px-4
            py-3
            text-[15px]
            leading-7
            text-[#8FA8B8]
          "
        >
          <b className="text-[#E8F1F5]">
            Jangan lanjut ke konfigurasi SSL
          </b>{' '}
          sebelum domain sudah mengarah ke IP VPS dengan
          benar. Domain akan digunakan lagi pada Tahap 16
          dan Tahap SSL berikutnya.
        </div>
      </div>
    </details>
  )
}

export default PanduanT19