// Tính tiền lương
let luongMotNgay = 100000;
document.querySelector(".btn-primary").onclick = function () {
  // Lấy giá trị nhập từ người dùng
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  // Tính lương
  tienLuong = luongMotNgay * soNgayLam;
  // Hiển thị tiền lương
  let tienTe = tienLuong.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  document.querySelector(
    ".ketQua"
  ).innerHTML = `<i class="fa-solid fa-money-bill"></i> Số tiền lương tháng này là: ${tienTe}`;
};

// Tính giá trị trung bình
document.querySelector(".btn-dark").onclick = function () {
  // Lấy giá trị nhập từ người dùng
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;
  let soThuBa = document.getElementById("soThuBa").value * 1;
  let soThuTu = document.getElementById("soThuTu").value * 1;
  let soThuNam = document.getElementById("soThuNam").value * 1;
  // Tính số trung bình cộng
  giaTriTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
  // Hiển thị giá trị trung bình
  document.querySelector(
    ".ketQua2"
  ).innerHTML = `<i class="fa-solid fa-calculator"></i> Giá trị trung bình là: ${giaTriTrungBinh}`;
};

// Quy đổi tiền
let rate = 23500;
document.querySelector(".btn-warning").onclick = function () {
  // Lấy giá trị nhập từ người dùng
  let tienUsd = document.getElementById("tienUsd").value * 1;
  let tienVnd = tienUsd * rate;
  // Định dạng số tiền VND
  let dinhDangVnd = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
  }).format(tienVnd);
  // Hiển thị số tiền quy đổi (sang VND)
  document.querySelector(
    ".ketQua3"
  ).innerHTML = `<i class="fa-solid fa-cash-register"></i> Số tiền quy đổi được là: ${dinhDangVnd}`;
};

// Tính chu vi, diện tích hình chữ nhật
document.querySelector(".btn-success").onclick = function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;
  // Tính chu vi, diện tích
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  // Hiển thị chu vi, diện tích
  document.querySelector(
    ".ketQua4"
  ).innerHTML = `<i class="fa-solid fa-square"></i> Chu vi là: ${chuVi}, Diện tích là: ${dienTich}`;
};

// Tính tổng 2 ký số
document.querySelector(".btn-outline-danger").onclick = function () {
  let so = document.getElementById("so").value * 1;
  let soHangDv = so % 10;
  let soHangChuc = Math.floor(so / 10);
  // Tính tổng ký số
  let tongKySo = soHangDv + soHangChuc;
  // Hiển thị kết quả
  document.querySelector(
    ".ketQua5"
  ).innerHTML = ` <i class="fa-regular fa-face-smile-beam"></i> Tổng ký số bạn vừa nhập là: ${tongKySo}`;
};
