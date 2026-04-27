export function MiniAppArt() {
  const mfos = [
    { title: "МигКредит", badge: "0% первый займ", rating: "4.8 ★" },
    { title: "Займер", badge: "Скидка 30%", rating: "4.7 ★" },
    { title: "еКапуста", badge: "Промокод -20%", rating: "4.6 ★" },
    { title: "МФО Лайм", badge: "Без процентов", rating: "4.5 ★" },
    { title: "Турбозайм", badge: "Кэшбэк 5%", rating: "4.4 ★" },
    { title: "Vivus", badge: "Скидка 50%", rating: "4.3 ★" },
  ]

  const colors = [
    "from-[#FF2E63] to-[#FF6B9D]",
    "from-[#2E63FF] to-[#6B9DFF]",
    "from-[#2EFF63] to-[#6BFFB3]",
    "from-[#FF8C2E] to-[#FFB36B]",
    "from-[#8C2EFF] to-[#B36BFF]",
    "from-[#2EFFED] to-[#6BFFF5]",
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Каталог МФО</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mfos.map((mfo, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className={`aspect-video bg-gradient-to-br ${colors[i]} border-b-[3px] border-black flex items-center justify-center`}>
              <span className="text-white font-black text-2xl">{mfo.title[0]}</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-black mb-1">{mfo.title}</h3>
              <span className="inline-block bg-[#FF2E63] text-white text-xs font-bold px-2 py-1 border-[2px] border-black mb-2">
                {mfo.badge}
              </span>
              <p className="text-sm font-bold text-gray-600">{mfo.rating}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все МФО
        </button>
      </div>
    </div>
  )
}
