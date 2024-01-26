//头部背景图随机显示
var data = [
  { text: '北海轻歌', image: 'https://img.010316.xyz/usr/uploads/2019/03/waiting.jpg' },
  { text: '北海轻歌', image: 'https://img.010316.xyz/usr/uploads/2019/03/waiting.jpg' },
  { text: '北海轻歌', image: 'https://img.010316.xyz/usr/uploads/2019/03/waiting.jpg' }
];

var randomIndex = Math.floor(Math.random() * data.length);
var randomItem = data[randomIndex];

document.querySelector('.about-img img').src = randomItem.image;
document.querySelector('.about-img-intro').textContent = randomItem.text;