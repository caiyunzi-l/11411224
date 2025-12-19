const foods = [
  // 靜園餐廳 (通用時間：約 19:30 關門，週末不營業)
  { loc: "靜園", name: "白鬍子飲料店 🌍", type: "飲品/西點(EN Menu)", tel: "2632-8001#14416", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/473781194_1107631627537294_2063324884115509816_n.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "Morning house", type: "吐司/漢堡/蛋餅", tel: "0912-627436", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/whitebeard.jpg.jpeg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "赤坂拉麵", type: "拉麵/炒烏龍", tel: "0916-707074", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/赤.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "川福美食", type: "酸辣粉/螺獅粉", tel: "0970-283332", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/川.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "小林自助餐 🥗", type: "自助餐/素食友善", tel: "2632-8001#14405", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/林.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "樂亭輕食 🥗", type: "選餐自由配", tel: "官方line", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/640%20(1).jpeg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "湯才滷味", type: "各式口味滷味", tel: "0930-033329", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/滷味.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "極壽喜燒", type: "壽喜燒/鍋貼", tel: "0955-725991", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/壽.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "左撇子", type: "鴨肉飯/炒飯", tel: "0935-252241", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/左.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "極咖哩", type: "咖哩/水煮餐", tel: "0919-747652", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/極2.jpg", time: "19:30關門(週末休)" },
  { loc: "靜園", name: "古肆鴨肉飯", type: "當歸鴨料理", tel: "0932-024358", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/鴨.jpg", time: "19:30關門(週末休)" },

  // 宜園餐廳 (根據你的檔案更新內容)
  { loc: "宜園", name: "早安山丘 🌍", type: "早午餐系列(EN Menu)", tel: "04-2652-7373", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/480803418_1138166838103640_1567186508147684440_n.jpg", time: "08:00-19:00" },
  { loc: "宜園", name: "永和豆漿", type: "傳統台式早餐", tel: "0926-902-383", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/豆.jpg", time: "06:00-10:30 (最晚收攤)" },
  { loc: "宜園", name: "炸雞大獅 🌍☪️", type: "手搖式炸雞(EN/Halal)", tel: "04-26521951", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/20221229_學餐版菜單_A3-01.jpg", time: "11:00-19:00" },
  { loc: "宜園", name: "王者香 🌍", type: "質感茶飲(EN Menu)", tel: "0918-176551", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/474079881_1138879537769768_3043383075683274121_n.jpg", time: "08:30-19:00 (週日休)" },
  { loc: "宜園", name: "宜園小廚", type: "現炒家常料理", tel: "0910-532988", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/宜f.jpg", time: "11:00-19:00" },
  { loc: "宜園", name: "四海遊龍", type: "鍋貼/水餃", tel: "04-26328001", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/四.jpg", time: "11:00-19:00" },
  { loc: "宜園", name: "黑の屋(拉麵本舖)", type: "日式拉麵", tel: "0921-347-656", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/IMAG2957.jpg", time: "11:00-19:00" },
  { loc: "宜園", name: "咖哩大叔七號店 🌍", type: "日式咖哩(EN Menu)", tel: "0923-240811", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/大叔.jpg", time: "週一至四 19:00關 / 週六下午休" },

  // 至善餐廳 (通用時間：約 19:30 關門，週末不營業)
  { loc: "至善", name: "拉亞漢堡 🌍", type: "精緻早午餐(EN Menu)", tel: "0922-819983", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/219571.jpg", time: "至 14:30 (週末休)" },
  { loc: "至善", name: "馨饌坊", type: "中式餐系", tel: "04-26313790", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/219573.jpg", time: "19:30關門(週末休)" },
  { loc: "至善", name: "YAMI快餐", type: "平價快餐盒餐", tel: "0966-582684", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/219572.jpg", time: "19:30關門(週末休)" },
  { loc: "至善", name: "食樂拾參 🥗", type: "健康營養盒餐", tel: "0970-555531", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/219574.jpg", time: "19:30關門(週末休)" },
  { loc: "至善", name: "路易莎咖啡 🌍", type: "咖啡/輕食(EN Menu)", tel: "04-26330086", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/20220331223249_21.jpg", time: "07:30-18:00" },
  { loc: "至善", name: "禾豐家", type: "岩燒海苔飯捲", tel: "0910-201352", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/538643076_1244309287494052_5591317241608278075_n.jpg", time: "僅營業至中午(週末休)" },
  { loc: "至善", name: "好吃鮮果 🥗", type: "現切水果/果汁", tel: "0986-389306", menuImg: "https://raw.githubusercontent.com/caiyunzi-l/my-menu-pics/main/my_project/images/219575.jpg", time: "19:30關門(週末休)" }
];

let currentStars = 0;

// 1. 渲染畫面 (加上動態備註與標籤)
function render(data) {
  const grid = document.getElementById('cardGrid');
  grid.innerHTML = data.map(i => `
    <div class="card animate__animated animate__fadeInUp" onclick="openModal('${i.name}', '${i.menuImg}')">
      <div class="loc-tag">${i.loc}</div>
      <h3>${i.name}</h3>
      <div class="info">主打：${i.type}</div>
      <div class="tel">☎ ${i.tel}</div>
      <div style="font-size: 11px; color: #d32f2f; background: #fff1f0; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 5px; border: 1px solid #ffa39e;">
        🕒 ${i.time}
      </div>
      <div style="margin-top:10px; color:#ff4757; font-size:12px; text-decoration:underline; cursor:pointer;">查看菜單與學生心得</div>
    </div>
  `).join('');
}

// 2. 開啟彈窗 (含安全性檢查防止報錯)
function openModal(name, img) {
  const title = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modal = document.getElementById('imageModal');
  
  if(title) title.innerText = name;
  if(modalImg) modalImg.src = img;
  if(modal) modal.style.display = 'flex';

  const bar = document.getElementById('popularityBar');
  const valText = document.getElementById('popularityValue');
  
  if (bar) {
    bar.style.width = '0%';
    const randomPercent = Math.floor(Math.random() * 25) + 75;
    setTimeout(() => {
      bar.style.width = randomPercent + '%';
      if (valText) valText.innerText = randomPercent + '%';
    }, 150);
  }

  setStar(0);
  displayReviews(name);
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if(modal) modal.style.display = 'none';
}

function search() {
  const val = document.getElementById('searchInput').value.toLowerCase();
  render(foods.filter(i => i.name.includes(val) || i.type.includes(val) || i.loc.includes(val)));
}

function filter(loc) {
  const btns = document.querySelectorAll('.btn');
  btns.forEach(b => b.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  render(loc === 'all' ? foods : foods.filter(i => i.loc === loc));
}

function getRandomFood() {
  const randomIndex = Math.floor(Math.random() * foods.length);
  const selected = foods[randomIndex];
  openModal(selected.name, selected.menuImg);
}

function setStar(num) {
  currentStars = num;
  const stars = document.querySelectorAll('#starRating span');
  stars.forEach((s, i) => {
    s.innerText = i < num ? '★' : '☆';
  });
}

function displayReviews(shopName) {
  const reviewList = document.getElementById('reviewList');
  if(!reviewList) return;
  const data = JSON.parse(localStorage.getItem('foodReviews') || '{}');
  const shopReviews = data[shopName] || [];

  if (shopReviews.length === 0) {
    reviewList.innerHTML = '<p style="color: #999; text-align: center;">尚無心得，快來評價這家店吧！</p>';
  } else {
    reviewList.innerHTML = shopReviews.slice().reverse().map(rev => `
      <div class="review-item" style="border-bottom: 1px dashed #ddd; padding: 8px 0;">
        <div style="color: #ffc107;">${'★'.repeat(rev.stars || 0)}${'☆'.repeat(5 - (rev.stars || 0))}</div>
        <span class="review-text">匿名同學：${rev.text}</span>
        <div style="font-size:10px; color:#aaa; margin-top:3px;">${rev.time}</div>
      </div>
    `).join('');
  }
}

function addComment() {
  const shopName = document.getElementById('modalTitle').innerText;
  const input = document.getElementById('commentInput');
  const text = input ? input.value.trim() : "";

  if (!text) return alert("請輸入心得感想喔！");
  if (currentStars === 0) return alert("請點選星星評分喔！");

  const data = JSON.parse(localStorage.getItem('foodReviews') || '{}');
  if (!data[shopName]) data[shopName] = [];

  data[shopName].push({
    text: text,
    stars: currentStars,
    time: new Date().toLocaleString()
  });

  localStorage.setItem('foodReviews', JSON.stringify(data));
  if(input) input.value = '';
  setStar(0);
  displayReviews(shopName);
}

// 初始渲染
render(foods);
// 讓圖片點擊後可以縮放
document.getElementById('modalImg').addEventListener('click', function() {
  this.classList.toggle('zoomed');
});

// 每次開啟 Modal 時，重設縮放狀態
function openModal(name, img) {
  const modalImg = document.getElementById('modalImg');
  modalImg.classList.remove('zoomed'); // 確保打開新菜單時不是放大的
  
  document.getElementById('modalTitle').innerText = name;
  modalImg.src = img;
  document.getElementById('imageModal').style.display = 'flex';
  
  // ... 原有的熱度條動畫代碼 ...
  const bar = document.getElementById('popularityBar');
  if(bar) {
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = '85%'; }, 150);
  }
}