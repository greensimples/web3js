// Pastikan untuk mengimpor web3.js di bagian atas file Anda
import Web3 from 'web3';

// Fungsi untuk memulai Web3
async function initWeb3() {
  // Variabel untuk menyimpan instansiasi Web3
  let web3;

  // Memeriksa apakah browser pengguna sudah memiliki penyedia Web3 (misalnya MetaMask)
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Meminta akses akun jika diperlukan
      await window.ethereum.enable();
      console.log('Web3 initialized and account access granted.');
    } catch (error) {
      console.error('User denied account access.');
    }
  }
  // Jika tidak ada penyedia yang disuntikkan, gunakan penyedia Web3 lokal (misalnya Ganache)
  else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    console.log('Web3 initialized using current provider.');
  }
  // Jika tidak ada penyedia yang tersedia, beri tahu pengguna
  else {
    console.log('No Web3 provider found. Please install MetaMask or similar.');
  }

  // Tampilkan versi Web3.js yang digunakan
  console.log('Web3.js version:', web3.version);

  // Lanjutkan dengan logika aplikasi Anda di sini...
}

// Memulai Web3 saat halaman dimuat
window.addEventListener('load', initWeb3);