const PanduanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
        min-h-screen
        bg-[#0A1929]
        bg-[linear-gradient(rgba(79,209,232,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,232,0.07)_1px,transparent_1px)]
        bg-[size:40px_40px]
        text-[#E8F1F5]
        font-['IBM_Plex_Sans']
        text-base
        leading-[1.65]
      "
    >
      {children}
    </div>
  )
}

export default PanduanLayout