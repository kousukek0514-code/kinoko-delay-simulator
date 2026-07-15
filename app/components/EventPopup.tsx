"use client";

type Props = {
  selectedEvent: {
    time: number;
    name: string;
    cooldown: number;
    duration: number;
    color?: string;
  } | null;

  onClose: () => void;
};

export default function EventPopup({
  selectedEvent,
  onClose,
}: Props) {
  if (!selectedEvent) return null;

  return (
    <>
      {/* 背景 */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* ポップアップ */}
      <div className="fixed left-1/2 top-1/2 z-50 w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl border">

        <div className="border-b p-4">
          <h2 className="text-xl font-bold">
            {selectedEvent.name}
          </h2>
        </div>

        <div className="space-y-3 p-4">

          <div className="flex justify-between">
            <span>発動時間</span>
            <span className="font-bold">
              {selectedEvent.time.toFixed(1)} 秒
            </span>
          </div>

          <div className="flex justify-between">
            <span>クールタイム</span>
            <span className="font-bold">
              {selectedEvent.cooldown} 秒
            </span>
          </div>

          <div className="flex justify-between">
            <span>持続時間</span>
            <span className="font-bold">
              {selectedEvent.duration} 秒
            </span>
          </div>

        </div>

        <div className="border-t p-4">
          <button
            onClick={onClose}
            className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            閉じる
          </button>
        </div>

      </div>
    </>
  );
}