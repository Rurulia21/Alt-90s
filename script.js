// メニューの折りたたみ
document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
    button.textContent = submenu.style.display === 'none' 
      ? button.textContent.replace('▼', '▶') 
      : button.textContent.replace('▶', '▼');
  });
});

// テキストサイズ変更
document.querySelectorAll('input[name="textSize"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.body.style.fontSize =
      radio.value === 'large' ? '1.2em' :
      radio.value === 'small' ? '0.8em' : '1em';
  });
});

// 幅変更
document.querySelectorAll('input[name="width"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelector('main').style.maxWidth =
      radio.value === 'narrow' ? '600px' : '800px';
  });
});
