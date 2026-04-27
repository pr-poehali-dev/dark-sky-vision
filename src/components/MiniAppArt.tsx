export function MiniAppArt() {
  const mfos = [
    {
      title: "ВЕБЗАЙМ",
      badge: "0% первым клиентам",
      promos: [],
      limit: "",
      link: "https://clck.ru/3TFBWu",
      color: "from-[#FF2E63] to-[#FF6B9D]",
    },
    {
      title: "BelkaCredit",
      badge: "0% первым клиентам",
      promos: ["MFT20 — скидка повторным"],
      limit: "",
      link: "https://clck.ru/3TJBms",
      color: "from-[#2E63FF] to-[#6B9DFF]",
    },
    {
      title: "HurmaCredit",
      badge: "0% первым клиентам",
      promos: [],
      limit: "до 30 000 ₽",
      link: "https://clck.ru/3TJBo3",
      color: "from-[#FF8C2E] to-[#FFB36B]",
    },
    {
      title: "БыстроДеньги",
      badge: "0% первым клиентам",
      promos: [],
      limit: "до 50 000 ₽",
      link: "https://clck.ru/3TJBpk",
      color: "from-[#8C2EFF] to-[#B36BFF]",
    },
    {
      title: "JoyMoney",
      badge: "0% первым клиентам",
      promos: ["КУРТКА10 — скидка 100%", "90ПАЛЬТО — скидка 90%"],
      limit: "",
      link: "https://clck.ru/3TJBqS",
      color: "from-[#2EFF63] to-[#6BFFB3]",
    },
    {
      title: "ЗАЙМЕР",
      badge: "0% первым клиентам",
      promos: [],
      limit: "",
      link: "https://clck.ru/3TJBu8",
      color: "from-[#2EFFED] to-[#6BFFF5]",
    },
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Каталог МФО</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mfos.map((mfo, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col"
          >
            <div className={`bg-gradient-to-br ${mfo.color} border-b-[3px] border-black flex items-center justify-center py-6`}>
              <span className="text-white font-black text-2xl tracking-wide">{mfo.title}</span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <span className="inline-block bg-[#FF2E63] text-white text-xs font-bold px-2 py-1 border-[2px] border-black mb-2 self-start">
                {mfo.badge}
              </span>
              {mfo.limit && (
                <p className="text-sm font-bold text-gray-700 mb-2">{mfo.limit}</p>
              )}
              {mfo.promos.length > 0 && (
                <div className="space-y-1 mb-3">
                  {mfo.promos.map((promo, j) => (
                    <span key={j} className="block bg-yellow-100 text-black text-xs font-bold px-2 py-1 border-[2px] border-black">
                      🏷 {promo}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={mfo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center bg-black text-white font-black text-sm px-4 py-2 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Получить займ →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
