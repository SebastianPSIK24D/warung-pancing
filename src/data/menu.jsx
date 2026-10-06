import kopiSusu from "../assets/menu/kopi-susu.jpg";
import americano from "../assets/menu/americano.jpg";
import tehTarik from "../assets/menu/teh-tarik.jpg";
import rotiBakar from "../assets/menu/roti-bakar.jpg";
import mieGomak from "../assets/menu/mie-gomak.jpg";
import pisangGoreng from "../assets/menu/pisang-goreng.jpg";
import esTehManis from "../assets/menu/es-teh-manis.jpg";
import kopiHitam from "../assets/menu/kopi-hitam.jpg";
import jusAlpukat from "../assets/menu/jus-alpukat.jpg";
import nasiGoreng from "../assets/menu/nasi-goreng.jpg";
import lontongSayur from "../assets/menu/lontong-sayur.jpg";
import martabak from "../assets/menu/martabak.jpg";


export const MENU = [
  { id: 1, nama: "Kopi Susu Gula Aren", harga: 18000, gambar: kopiSusu, kategori: "minuman" },
  { id: 2, nama: "Americano", harga: 15000, gambar: americano, kategori: "minuman" },
  { id: 3, nama: "Teh Tarik", harga: 12000, gambar: tehTarik, kategori: "minuman" },
  { id: 4, nama: "Roti Bakar Cokelat", harga: 16000, gambar: rotiBakar, kategori: "makanan" },
  { id: 5, nama: "Mie Gomak", harga: 20000, gambar: mieGomak, kategori: "makanan" },
  { id: 6, nama: "Pisang Goreng", harga: 10000, gambar: pisangGoreng, kategori: "makanan" },
  { id: 7, nama: "Es Teh Manis", harga: 8000, gambar: esTehManis, kategori: "minuman" },
  { id: 8, nama: "Kopi Hitam", harga: 10000, gambar: kopiHitam, kategori: "minuman" },
  { id: 9, nama: "Jus Alpukat", harga: 17000, gambar: jusAlpukat, kategori: "minuman" },
  { id: 10, nama: "Nasi Goreng", harga: 22000, gambar: nasiGoreng, kategori: "makanan" },
  { id: 11, nama: "Lontong Sayur", harga: 15000, gambar: lontongSayur, kategori: "makanan" },
  { id: 12, nama: "Martabak Mini", harga: 18000, gambar: martabak, kategori: "makanan" },
];

export const KATEGORI = [
  { kode: "minuman", judul: "Minuman" },
  { kode: "makanan", judul: "Makanan" },
];