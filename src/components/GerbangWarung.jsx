import { useState, useRef } from "react";

function GerbangWarung({ onSelesai }) {
  const [membuka, setMembuka] = useState(false);
  const [zoom, setZoom] = useState(false);
  const tokoRef = useRef(null);
  const pintuRef = useRef(null);

  const bukaWarung = () => {
    // ukur posisi toko dan pintu sebelum ada transformasi apa pun
    const toko = tokoRef.current.getBoundingClientRect();
    const pintu = pintuRef.current.getBoundingClientRect();

    const pusatX = pintu.left + pintu.width / 2;
    const pusatY = pintu.top + pintu.height / 2;

    // skala agar lubang pintu (di luar border) menutupi seluruh layar
    const skala =
      Math.max(
        window.innerWidth / (pintu.width - 8),
        window.innerHeight / (pintu.height - 4)
      ) * 1.08;

    const gaya = tokoRef.current.style;
    gaya.setProperty("--ox", `${pusatX - toko.left}px`); // titik pusat zoom
    gaya.setProperty("--oy", `${pusatY - toko.top}px`);
    gaya.setProperty("--dx", `${window.innerWidth / 2 - pusatX}px`); // geser ke tengah layar
    gaya.setProperty("--dy", `${window.innerHeight / 2 - pusatY}px`);
    gaya.setProperty("--skala", skala);

    setMembuka(true); // 1. pintu terbuka
    setTimeout(() => setZoom(true), 1500); // 2. zoom masuk
    setTimeout(onSelesai, 3100); // 3. lepas gerbang
  };

  return (
    <div className={`gerbang ${zoom ? "zoom" : ""}`}>
      <div className="toko" ref={tokoRef}>
        <div className="papan">WARUNG PANCING</div>
        <div className="kanopi" />

        <div className="bingkai-pintu" ref={pintuRef}>
          <div className={`daun kiri ${membuka ? "buka" : ""}`} />
          <div className={`daun kanan ${membuka ? "buka" : ""}`} />

          <div className={`plang ${membuka ? "buka" : ""}`}>
            {membuka ? "BUKA" : "TUTUP"}
          </div>
        </div>
      </div>

      <button
        className={`btn-buka ${membuka ? "hilang" : ""}`}
        onClick={bukaWarung}
        disabled={membuka}
      >
        Buka Warung
      </button>
    </div>
  );
}

export default GerbangWarung;