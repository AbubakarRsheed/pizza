// Dynamic main content update
document.querySelectorAll('.nav-link').forEach(tab => {
    tab.addEventListener('click', function () {
      const tabId = this.id;
      let heading = '';
      let imgSrc = '';
  
      if (tabId.includes('pizza')) {
        heading = 'Pizza Round Behind Your Corner';
        imgSrc = '../Assects/images/pizzaone.jpg';
      } else if (tabId.includes('pasta')) {
        heading = 'Passta Round Behind Your Corner';
        imgSrc = '../Assects/images/passta.jpg';
      } else if (tabId.includes('burgers')) {
        heading = 'Burgers  Round Behind Your Corner';
        imgSrc = '../Assects/images/burger.jpg';
      } else if (tabId.includes('beer')) {
        heading = 'Beer  Round Behind Your Corner';
        imgSrc = '../Assects/images/beer.jpg';
      }
      else if (tabId.includes('drinks')) {
        heading = 'Drinks  Round Behind Your Corner';
        imgSrc = '../Assects/images/drinks.jpg';
      }
      else if (tabId.includes('coffe')) {
        heading = 'coffe  Round Behind Your Corner';
        imgSrc = '../Assects/images/coffe.avif';
      }
      else if (tabId.includes('fries')) {
        heading = 'Fries  Round Behind Your Corner';
        imgSrc = '../Assects/images/friess.jpg';
      }
      else if (tabId.includes('chicken')) {
        heading = 'Chicken  Round Behind Your Corner';
        imgSrc = '../Assects/images/chicken.avif';
      }
      else if (tabId.includes('donuts')) {
        heading = 'Donuts Round Behind Your Corner';
        imgSrc = '../Assects/images/donuts.jpg';
      }
      document.getElementById('tabs-main-heading').textContent = heading;
      document.getElementById('tabs-main-image').src = imgSrc;
    });
  });
  
  // Navigation to other page
  function tabsNavigateTo(page) {
    window.location.href = page;
  }
  