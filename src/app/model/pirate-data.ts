export class Category {
    constructor(
        public id: string, 
        public name: string
        ){}
}
export class PirateData {
    constructor(
        public id: string, 
        public name: string, 
        public size: string,
        public seeders: string,
        public leechers: string,
        public magnetLink: string,
        public category: Category
        ){}
}
