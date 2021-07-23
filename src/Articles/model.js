class Article {
    constructor({components, author, title, description } = {}) {
        this.id = uniqid();
        this.title = title || 'Title Here';
        this.description = description || 'Description Here';
        this.components = components || [];
        this.author = "Author Name";
        this.draft = true;
        this.publishedDate = null;
    }

    publish() {
        this.draft = false;
        this.publishedDate = new Date();
    }
    unpublish() {
        this.draft = false;
        this.publishedDate = null;
    }
}