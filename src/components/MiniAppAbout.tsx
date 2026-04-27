export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">О платформе</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">МФО Партнёр — агрегатор выгодных предложений</h3>
          <p className="text-lg leading-relaxed mb-4">
            Мы собираем актуальные предложения микрофинансовых организаций в одном месте: скидки на
            первый займ, промокоды, специальные условия для новых клиентов.
          </p>
          <p className="text-lg leading-relaxed">
            Партнёры получают доступ к эксклюзивным офферам, прозрачной аналитике и комиссионным
            выплатам за каждого привлечённого клиента.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Преимущества платформы</h3>
          <div className="flex flex-wrap gap-2">
            {["Скидки до 50%", "Промокоды", "Партнёрская программа", "Аналитика", "API интеграция", "Быстрые выплаты", "Поддержка 24/7", "Личный кабинет"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
