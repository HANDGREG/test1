document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.snowflakes');
  
    for (let i = 0; i < 2000; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      container.appendChild(snowflake);
      resetSnowflake(snowflake);
    }
  
    function resetSnowflake(snowflake) {
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.animationDelay = `${Math.random()}s`;
    }
  });
  