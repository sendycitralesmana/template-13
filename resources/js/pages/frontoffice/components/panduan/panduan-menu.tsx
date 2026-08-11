import React from 'react'

type PanduanMenuProps = {
  activeStage?: string
  onSelect?: (id: string) => void
}

const PanduanMenu = ({
  activeStage,
  onSelect,
}: PanduanMenuProps) => {
  const stages = [
    ['t0', '00', 'Persiapan'],
    ['t1', '01', 'Login & User Baru'],
    ['t2', '02', 'Update & Firewall'],
    ['t3', '03', 'Install Git'],
    ['t4', '04', 'Akses GitHub (Public/Private)'],
    ['t5', '05', 'Install PHP 8.3'],
    ['t6', '06', 'Install Composer'],
    ['t7', '07', 'Install Node.js'],
    ['t8', '08', 'User PostgreSQL'],
    ['t9', '09', 'Database via pgAdmin'],
    ['t10', '10', 'Clone Project'],
    ['t11', '11', 'Konfigurasi .env'],
    ['t12', '12', 'Composer Install'],
    ['t13', '13', 'Build Vite'],
    ['t14', '14', 'Cek Koneksi DB'],
    ['t15', '15', 'Permission & Storage'],
    ['t16', '16', 'Konfigurasi Nginx'],
    ['t17', '17', 'Konfigurasi PHP-FPM'],
    ['t18', '18', 'Queue Worker'],
    ['t19', '19', 'Domain / DNS'],
    ['t20', '20', 'SSL / HTTPS'],
    ['t21', '21', 'Testing Production'],
    ['t22', '22', 'Update (git pull)'],
    ['t23', '23', 'Troubleshooting'],
    ['t24', '24', 'Checklist Final'],
    ['t25', '25', 'Cek Batas Upload'],
  ]

  const handleClick = (id: string) => {
    onSelect?.(id)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div>
      {/* ===================================================== */}
      {/* JUDUL PANDUAN                                         */}
      {/* ===================================================== */}

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
          Panduan Lengkap

          <span className="h-px flex-1 bg-[#2A6478]" />
        </div>

        <h2
          className="
            font-['IBM_Plex_Mono']
            text-[clamp(22px,3.2vw,32px)]
            font-semibold
          "
        >
          26 Tahap, Dari Nol Sampai Live
        </h2>
      </div>

      {/* ===================================================== */}
      {/* MENU 00 - 25                                         */}
      {/* ===================================================== */}

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-[10px]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {stages.map(([id, number, title]) => {
          const isActive = activeStage === id

          return (
            <button
              key={id}
              type="button"
              onClick={() => handleClick(id)}
              className={`
                flex
                cursor-pointer
                gap-2
                rounded-[2px]
                border
                px-3
                py-[10px]
                text-left
                font-['IBM_Plex_Mono']
                text-[13px]
                no-underline
                transition

                ${
                  isActive
                    ? `
                      border-[#4FD1E8]
                      bg-[rgba(79,209,232,0.08)]
                      text-[#E8F1F5]
                    `
                    : `
                      border-[#2A6478]
                      text-[#8FA8B8]
                      hover:border-[#4FD1E8]
                      hover:bg-[rgba(79,209,232,0.05)]
                      hover:text-[#E8F1F5]
                    `
                }
              `}
            >
              <span className="text-[#4FD1E8]">
                {number}
              </span>

              <span>
                {title}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default PanduanMenu