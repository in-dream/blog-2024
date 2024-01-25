//头部背景图随机显示
var data = [
  { text: '拍摄于杭州西湖', image: 'https://img.010316.xyz/usr/Obsidian/about.webp' },
  { text: '拍摄于北京长城', image: 'https://img.010316.xyz/usr/Obsidian/about-beij.webp' },
  { text: '拍摄于杭州千岛湖', image: 'https://img.010316.xyz/usr/Obsidian/about-qdh.webp' }
];

var randomIndex = Math.floor(Math.random() * data.length);
var randomItem = data[randomIndex];

document.querySelector('.about-img img').src = randomItem.image;
document.querySelector('.about-img-intro').textContent = randomItem.text;