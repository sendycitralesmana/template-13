import React, { useState } from 'react'
import PanduanHead from './components/panduan/panduan-head'
import PanduanMenu from './components/panduan/panduan-menu'
import PanduanT0 from './components/panduan/panduan-t0'
import PanduanT1 from './components/panduan/panduan-t1'
import PanduanT2 from './components/panduan/panduan-t2'
import PanduanT3 from './components/panduan/panduan-t3'
import PanduanT4 from './components/panduan/panduan-t4'
import PanduanT5 from './components/panduan/panduan-t5'
import PanduanT6 from './components/panduan/panduan-t6'
import PanduanT7 from './components/panduan/panduan-t7'
import PanduanT8 from './components/panduan/panduan-t8'
import PanduanT9 from './components/panduan/panduan-t9'
import PanduanT10 from './components/panduan/panduan-t10'
import PanduanT11 from './components/panduan/panduan-t11'
import PanduanT12 from './components/panduan/panduan-t12'
import PanduanT13 from './components/panduan/panduan-t13'
import PanduanT14 from './components/panduan/panduan-t14'
import PanduanT15 from './components/panduan/panduan-t15'
import PanduanT16 from './components/panduan/panduan-t16'
import PanduanT17 from './components/panduan/panduan-t17'
import PanduanT18 from './components/panduan/panduan-t18'
import PanduanT19 from './components/panduan/panduan-t19'
import PanduanT20 from './components/panduan/panduan-t20'
import PanduanT21 from './components/panduan/panduan-t21'
import PanduanT22 from './components/panduan/panduan-t22'
import PanduanT23 from './components/panduan/panduan-t23'
import PanduanT24 from './components/panduan/panduan-t24'
import PanduanT25 from './components/panduan/panduan-t25'
import Footer from './components/panduan/panduan-footer'

const Page = () => {
  const [activeStage, setActiveStage] = useState('t0')

  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        bg-[#0A1929]
        bg-[linear-gradient(rgba(79,209,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,232,0.07)_1px,transparent_1px)]
        bg-[size:40px_40px]
        text-[#E8F1F5]
        font-['IBM_Plex_Sans']
        text-base
        leading-[1.65]
      "
    >
      {/* ===================================================== */}
      {/* CONTENT                                               */}
      {/* ===================================================== */}

      <div className="flex-1">
        {/* ================================================= */}
        {/* HERO                                              */}
        {/* ================================================= */}

        <div className="mx-auto max-w-[1180px] px-6">
          <PanduanHead />
        </div>

        {/* ================================================= */}
        {/* MENU + JUDUL PANDUAN                              */}
        {/* ================================================= */}

        <div className="mx-auto max-w-[1180px] px-6">
          <PanduanMenu
            activeStage={activeStage}
            onSelect={setActiveStage}
          />
        </div>

        {/* ================================================= */}
        {/* STAGES                                             */}
        {/* ================================================= */}

        <main className="mx-auto max-w-[1180px] px-6 pb-[120px]">
          <div className="mt-6">
            <PanduanT0 />
            <PanduanT1 />
            <PanduanT2 />
            <PanduanT3 />
            <PanduanT4 />
            <PanduanT5 />
            <PanduanT6 />
            <PanduanT7 />
            <PanduanT8 />
            <PanduanT9 />
            <PanduanT10 />
            <PanduanT11 />
            <PanduanT12 />
            <PanduanT13 />
            <PanduanT14 />
            <PanduanT15 />
            <PanduanT16 />
            <PanduanT17 />
            <PanduanT18 />
            <PanduanT19 />
            <PanduanT20 />
            <PanduanT21 />
            <PanduanT22 />
            <PanduanT23 />
            <PanduanT24 />
            <PanduanT25 />
          </div>
        </main>
      </div>

      {/* ===================================================== */}
      {/* FOOTER — FULL WIDTH                                  */}
      {/* ===================================================== */}

      <Footer />
    </div>
  )
}

export default Page