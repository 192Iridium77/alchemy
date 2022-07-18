import uniqid from "uniqid";
class Article {
  constructor({ components, author, title, description, image, slug } = {}) {
    this.id = uniqid();
    this.title = title || "Title Here";
    this.slug = slug || "slug-here";
    this.description = description || "Description Here";
    this.components = components || [];
    this.author = author || "Author Name";
    this.draft = true;
    this.publishedDate = null;
    this.image = image || null; // Todo: Image Class
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

export default Article;
