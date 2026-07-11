"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          🍄 キノコ伝説 技能遅延シミュレーター β0.1 🍄
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-5">

          <div>
            <label className="block font-semibold mb-1">
              ビルド名
            </label>

            <input
              type="text"
              placeholder="例：PvP最強"
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              職業
            </label>

            <select className="w-full border rounded-lg p-2">
              <option>矢神</option>
              <option>羽王</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              職業技能
            </label>

            <select className="w-full border rounded-lg p-2">
              <option>自然摂理</option>
              <option>青羽逐日</option>
            </select>
          </div>

          {[1,2,3,4,5].map((num)=>(
            <div key={num}>
              <label className="block font-semibold mb-1">
                技能{num}
              </label>

              <select className="w-full border rounded-lg p-2">
                <option>未選択</option>
              </select>
            </div>
          ))}

        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-4">
            タイムライン
          </h2>

          <div className="overflow-x-auto border rounded-lg">

            <div className="w-[4000px] h-[500px] bg-gray-50 relative">

              <div className="absolute top-12 left-0 h-10 w-[4000px] bg-white border"></div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

