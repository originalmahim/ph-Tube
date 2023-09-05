// All category : - https://openapi.programming-hero.com/api/videos/categories
// ALL data by categoryId
// URL Format: - https://openapi.programming-hero.com/api/videos/category/${id}

const tabs = document.getElementById('tabs');

const tabsInfoLoad = async () => {
    const link = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await link.json();
    const lodedInfo = data.data;
    displayTab(lodedInfo);
}
const displayTab = (lodedInfo) =>{
          lodedInfo.forEach(element => {
          const div = document.createElement('div')
          div.innerHTML = `
          <button  class="btn  text-xl active:bg-red-500 active:text-white hover:bg-red-500 hover:text-white">${element.category}</button>
          `;
          tabs.appendChild(div)
          });}
          
tabsInfoLoad();