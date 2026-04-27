export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Партнёрам</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Условия сотрудничества</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Реферальная программа</h4>
              <p className="text-gray-600 font-medium">Комиссия от 5% до 15%</p>
              <p className="mt-2">
                Получайте комиссию за каждого клиента, который оформил займ по вашей ссылке или промокоду.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">API интеграция</h4>
              <p className="text-gray-600 font-medium">Для сайтов и приложений</p>
              <p className="mt-2">
                Встройте каталог МФО-предложений прямо в ваш сервис через наше API. Полная документация и поддержка.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Белая метка</h4>
              <p className="text-gray-600 font-medium">White-label решение</p>
              <p className="mt-2">
                Запустите собственный агрегатор МФО под вашим брендом на нашей платформе.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Цифры платформы</h3>

          <div className="grid gap-4 grid-cols-2">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-3xl font-black text-[#FF2E63]">50+</h4>
              <p className="font-bold mt-1">МФО-партнёров</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-3xl font-black text-[#FF2E63]">500+</h4>
              <p className="font-bold mt-1">Активных промокодов</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-3xl font-black text-[#FF2E63]">до 50%</h4>
              <p className="font-bold mt-1">Скидки на первый займ</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-3xl font-black text-[#FF2E63]">24/7</h4>
              <p className="font-bold mt-1">Поддержка партнёров</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
