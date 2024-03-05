document.addEventListener('DOMContentLoaded', function() {
    new Vue({
        el: '#articles',
        data: {
            selectedTag: null,
            articles: [
                {
                    title: 'Let’s Get Solution For Building Construction Work', 
                    date: '26 December,2022', 
                    pict: 'static/article_01.png', 
                    tag: 'Kitchan'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas.', 
                    date: '22 December,2022', 
                    pict: 'static/article_02.png', 
                    tag: 'Living'
                },
                {
                    title: 'Best For Any Office & Business Interior Solution', 
                    date: '25 December,2022', 
                    pict: 'static/article_03.png', 
                    tag: 'Interior'
                },
                {
                    title: 'Let’s Get Solution For Building Construction Work', 
                    date: '26 December,2022', 
                    pict: 'static/article_04.png', 
                    tag: 'Kitchan'
                },
                {
                    title: 'Low Cost Latest Invented Interior Designing Ideas.', 
                    date: '22 December,2022', 
                    pict: 'static/article_05.png', 
                    tag: 'Living'
                },
                {
                    title: 'Best For Any Office & Business Interior Solution', 
                    date: '25 December,2022', 
                    pict: 'static/article_06.png', 
                    tag: 'Interior'
                }
            ]
        },
        computed: {
            uniqueTags() {
                const tags = new Set();
                this.articles.forEach((article) => {
                    tags.add(article.tag);
                });
                return Array.from(tags);
            },
            filteredArticles() {
                if (!this.selectedTag) {
                    return this.articles;
                }
                console.log(this.articles);
                return this.articles.filter((article) => article.tag === this.selectedTag);
            },
        },
        methods: {
            selectTag(tag) {
                this.selectedTag = tag;
            },
        },
    });
});
