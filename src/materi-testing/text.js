export function potonganPajak(gaji) {
  const Pajak = 10 / 100;
  const GajiBersih = gaji - gaji * Pajak;
  return `Gaji bersih anda ${GajiBersih}`;
}

export function sapaan(nama) {
  return `Hallo ${nama}`;
}
