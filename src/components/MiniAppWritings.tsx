export function MiniAppWritings() {
  const posts = [
    {
      title: "Промокод на первый займ — 0%",
      date: "Апр 2026",
      excerpt:
        "Специальное предложение для новых клиентов: первый займ под 0% на 30 дней. Используй промокод при оформлении.",
    },
    {
      title: "Скидка 30% на все займы до 10 000 ₽",
      date: "Апр 2026",
      excerpt: "Ограниченная акция от топовых МФО: займы до 10 000 рублей со скидкой 30% на процентную ставку.",
    },
    {
      title: "Кэшбэк 5% для постоянных клиентов",
      date: "Мар 2026",
      excerpt: "Программа лояльности: получай кэшбэк 5% от суммы займа на счёт при каждом повторном обращении.",
    },
    {
      title: "Быстрый займ за 15 минут — без отказа",
      date: "Мар 2026",
      excerpt: "Новые условия одобрения: займ до 30 000 ₽ за 15 минут с вероятностью одобрения 95%.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Акции и промокоды</h2>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black">{post.title}</h3>
              <span className="text-sm font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black whitespace-nowrap ml-2">
                {post.date}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все акции
        </button>
      </div>
    </div>
  )
}
