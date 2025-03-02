document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "7c6adcce64f54f3e99b24a7cddfb76ef";
    const input = document.getElementById('input');
    const blogContainer = document.getElementById("blogContainer");
    const search = document.getElementById('search');

    search.addEventListener('click' , () => {
        Articles();
    })

    async function Articles() {
        const articles = await randomNewsGenerator(input);
        blogContainer.innerHTML = "";
        for (let i = 0; i < 10; i++) {
            const element = articles[i];
            console.log(element);
            const h = element.source.name
            const blog = document.createElement('div');
            const img = document.createElement("img");
            const h1 = document.createElement("h1");
            const p = document.createElement("p");
            const a = document.createElement("a");
            const s = document.createElement("span")
            p.innerText = element.content
            s.innerHTML = `source : ${h}`;
            s.style.color = 'blue'
            p.style.overflowX = 'ellipsis'
            img.src = element.urlToImage;
            img.style.height = '200px';
            img.style.width = "100%";
            a.style.display = 'flex';
            a.style.justifyContent = 'end'
            img.style.boxSizing = "contain";
            blog.style.backgroundColor = "#4bf68d";
            a.style.color = 'blue';
            blog.style.padding = '3px'
            h1.innerText = element.title;
            h1.style.fontSize = '20px'
            h1.style.fontWeight = 'bold'
            a.href = element.url;
            a.innerHTML = 'Clickhere for more details'
            blogContainer.style.border = '2px'
            blogContainer.appendChild(blog);
            blog.appendChild(img);
            blog.appendChild(h1);
            blog.appendChild(p);
            blog.appendChild(s);

            blog.appendChild(a);
        }
    }


  randomNewsGenerator();
  async function randomNewsGenerator() {
    try {
      const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${input.value.trim()}&apiKey=${apiKey}`;
      const response = await fetch(newsUrl);
      const data = await response.json();
      console.log(data);
      return data.articles;
    } catch (error) {
      console.log("Error fetching random news");
      return [];
    }
  }
});
