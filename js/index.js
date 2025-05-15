// 点击波纹效果
function createRipple(event) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 0.6;

    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size/2 + offsetX) + 'px';
    ripple.style.top = (event.clientY - rect.top - size/2 + offsetY) + 'px';

    event.currentTarget.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// 为所有卡片添加点击事件
document.querySelectorAll('.side-card, .container').forEach(element => {
	element.addEventListener('click', function(e) {
		createRipple(e);
		
		console.log('点击了：', this.querySelector('h3')?.textContent || '中间区域');
	});
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const startX = Math.random() * 100;
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.7 + 0.3;

    snowflake.style.left = startX + 'vw';
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.animationDelay = delay + 's';
    snowflake.style.opacity = opacity;

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, (duration + delay) * 1000);
}

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    
    const startX = Math.random() * 100;
    const height = Math.random() * 20 + 15;
    const duration = Math.random() * 0.8 + 0.3;
    const tilt = Math.random() * 6 - 3;

    raindrop.style.left = startX + 'vw';
    raindrop.style.height = height + 'px';
    raindrop.style.animationDuration = duration + 's';
    raindrop.style.transform = `rotate(${tilt}deg)`;

    document.body.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 150);
setInterval(createRaindrop, 30);